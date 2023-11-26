package com.testjava;

import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.opengl.GLES20;
import android.opengl.GLSurfaceView;
import android.os.Bundle;
import android.util.Log;
import android.util.Pair;
import android.view.View;
import android.widget.ImageView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.bumptech.glide.Glide;
import com.bumptech.glide.RequestManager;
import com.google.ar.core.Anchor;
import com.google.ar.core.ArCoreApk;
import com.google.ar.core.AugmentedImage;
import com.google.ar.core.Camera;
import com.google.ar.core.Config;
import com.google.ar.core.Frame;
import com.google.ar.core.Session;
import com.google.ar.core.TrackingState;
import com.google.ar.core.exceptions.CameraNotAvailableException;
import com.google.ar.core.exceptions.UnavailableApkTooOldException;
import com.google.ar.core.exceptions.UnavailableArcoreNotInstalledException;
import com.google.ar.core.exceptions.UnavailableSdkTooOldException;
import com.google.ar.core.exceptions.UnavailableUserDeclinedInstallationException;
import com.testjava.common.helpers.CameraPermissionHelper;
import com.testjava.common.helpers.DisplayRotationHelper;
import com.testjava.common.helpers.FullScreenHelper;
import com.testjava.common.helpers.SnackbarHelper;
import com.testjava.common.helpers.TrackingStateHelper;
import com.testjava.common.models.Annotation;
import com.testjava.common.rendering.BackgroundRenderer;
import com.testjava.common.utils.CreateARImageDB;
import com.testjava.rendering.ARRendering;

import java.io.IOException;
import java.io.InputStream;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.microedition.khronos.egl.EGLConfig;
import javax.microedition.khronos.opengles.GL10;

public class ARActivity extends AppCompatActivity implements GLSurfaceView.Renderer {
  // Rendering. The Renderers are created here, and initialized when the GL
  // surface is created.
  private GLSurfaceView surfaceView;
  private Session session;
  private ImageView fitToScanView;
  private boolean installRequested;
  private boolean shouldConfigureSession = false;
  private DisplayRotationHelper displayRotationHelper;
  private final String[] images = {
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Earth_Eastern_Hemisphere.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flower_jtca001.jpg/1280px-Flower_jtca001.jpg"
  };
  private final SnackbarHelper messageSnackBarHelper = new SnackbarHelper();
  private final BackgroundRenderer backgroundRenderer = new BackgroundRenderer();
  private static final String TAG = ARActivity.class.getSimpleName();
  private final ARRendering augmentedImageRenderer = new ARRendering();
  private final TrackingStateHelper trackingStateHelper = new TrackingStateHelper(this);
  private final Map<Integer, Pair<AugmentedImage, Anchor>> augmentedImageMap = new HashMap<>();
  private List<Annotation> annotations;
  
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
    setContentView(R.layout.activity_main);
    Intent intent = getIntent();
    
    try {
      annotations = (List<Annotation>) intent.getSerializableExtra("annotations");
      Log.d(TAG, ">>> ANNOTATIONS length: " + annotations.size());
    } catch (Exception e) {
      Log.d(TAG, ">>> ERROR: " + e.getMessage());
    }
    
    surfaceView = findViewById(R.id.surfaceview);
    displayRotationHelper = new DisplayRotationHelper(/* context= */ this);
    
    // Set up renderer.
    surfaceView.setPreserveEGLContextOnPause(true);
    surfaceView.setEGLContextClientVersion(2);
    // Alpha used for plane blending.
    surfaceView.setEGLConfigChooser(8, 8, 8, 8, 16, 0);
    surfaceView.setRenderer(this);
    surfaceView.setRenderMode(GLSurfaceView.RENDERMODE_CONTINUOUSLY);
    surfaceView.setWillNotDraw(false);
    
    fitToScanView = findViewById(R.id.image_view_fit_to_scan);
    RequestManager glideRequestManager = Glide.with(this);
    glideRequestManager.load(Uri.parse("file:///android_asset/fit_to_scan.png")).into(fitToScanView);
    
    if (annotations.isEmpty())
      messageSnackBarHelper.showError(this, "Nenhuma anotação encontrada para esse livro!");
    
    installRequested = false;
    // Prevent camera blurry at start of app due to render before onResume called.
    this.onResume();
  }
  
  @Override
  protected void onDestroy() {
    if (session != null) {
      // Explicitly close ARCore Session to release native resources.
      // Review the API reference for important considerations before calling close()
      // in apps with
      // more complicated lifecycle requirements:
      // https://developers.google.com/ar/reference/java/arcore/reference/com/google/ar/core/Session#close()
      session.close();
      session = null;
    }
    super.onDestroy();
  }
  
  @Override
  protected void onResume() {
    // Prevente onResume from being called without onPause being called first.
    this.onPause();

    super.onResume();
    if (session == null) {
      Exception exception = null;
      String message = null;
      try {
        switch (ArCoreApk.getInstance().requestInstall(this, !installRequested)) {
          case INSTALL_REQUESTED:
            installRequested = true;
            return;
          case INSTALLED:
            break;
        }
        
        // ARCore requires camera permissions to operate. If we did not yet obtain
        // runtime
        // permission on Android M and above, now is a good time to ask the user for it.
        if (!CameraPermissionHelper.hasCameraPermission(this)) {
          CameraPermissionHelper.requestCameraPermission(this);
          return;
        }
        
        session = new Session(/* context = */ this);
      } catch (UnavailableArcoreNotInstalledException |
               UnavailableUserDeclinedInstallationException e) {
        message = "Por favor instale o ARCore.";
        exception = e;
      } catch (UnavailableApkTooOldException e) {
        message = "Por favor atualize o ARCore.";
        exception = e;
      } catch (UnavailableSdkTooOldException e) {
        message = "Por favor atualize este app.";
        exception = e;
      } catch (Exception e) {
        message = "Este dispositivo não suporta AR.";
        exception = e;
      }
      
      if (message != null) {
        messageSnackBarHelper.showError(this, message);
        Log.e(TAG, "Exception creating session", exception);
        return;
      }
      shouldConfigureSession = true;
    }
    
    if (shouldConfigureSession) {
      try {
        configureSession();
      } catch (IOException e) {
        throw new RuntimeException(e);
      }
      shouldConfigureSession = false;
    }
    
    // Note that order matters - see the note in onPause(), the reverse applies
    // here.
    try {
      session.resume();
    } catch (CameraNotAvailableException e) {
      messageSnackBarHelper.showError(this, "Câmera não está disponivel. Tente reiniciar o app!");
      session = null;
      return;
    }
    surfaceView.onResume();
    displayRotationHelper.onResume();
    
    fitToScanView.setVisibility(View.VISIBLE);
  }
  
  @Override
  public void onPause() {
    super.onPause();
    if (session != null) {
      // Note that the order matters - GLSurfaceView is paused first so that it does
      // not try
      // to query the session. If Session is paused before GLSurfaceView,
      // GLSurfaceView may
      // still call session.update() and get a SessionPausedException.
      displayRotationHelper.onPause();
      surfaceView.onPause();
      session.pause();
    }
  }
  
  @Override
  public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] results) {
    super.onRequestPermissionsResult(requestCode, permissions, results);
    if (!CameraPermissionHelper.hasCameraPermission(this)) {
      Toast.makeText(this, "Camera permissions are needed to run this application", Toast.LENGTH_LONG).show();
      if (!CameraPermissionHelper.shouldShowRequestPermissionRationale(this)) {
        // Permission denied with checking "Do not ask again".
        CameraPermissionHelper.launchPermissionSettings(this);
      }
      finish();
    }
  }
  
  @Override
  public void onWindowFocusChanged(boolean hasFocus) {
    super.onWindowFocusChanged(hasFocus);
    FullScreenHelper.setFullScreenOnWindowFocusChanged(this, hasFocus);
  }
  
  @Override
  public void onSurfaceCreated(GL10 gl, EGLConfig config) {
    GLES20.glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
    
    // Prepare the rendering objects. This involves reading shaders, so may throw an
    // IOException.
    try {
      // Create the texture and pass it to ARCore session to be filled during
      // update().
      backgroundRenderer.createOnGlThread(/* context= */ this);
      augmentedImageRenderer.createOnGlThreadPlane(/* context= */ this, 2.0f, annotations);
    } catch (IOException e) {
      Log.e(TAG, "Failed to read an asset file", e);
    }
  }
  
  @Override
  public void onSurfaceChanged(GL10 gl, int width, int height) {
    displayRotationHelper.onSurfaceChanged(width, height);
    GLES20.glViewport(0, 0, width, height);
  }
  
  @Override
  public void onDrawFrame(GL10 gl) {
    // Clear screen to notify driver it should not load any pixels from previous
    // frame.
    GLES20.glClear(GLES20.GL_COLOR_BUFFER_BIT | GLES20.GL_DEPTH_BUFFER_BIT);
    
    if (session == null)
      return;
    
    // Notify ARCore session that the view size changed so that the perspective
    // matrix and
    // the video background can be properly adjusted.
    displayRotationHelper.updateSessionIfNeeded(session);
    
    try {
      session.setCameraTextureName(backgroundRenderer.getTextureId());
      
      // Obtain the current frame from ARSession. When the configuration is set to
      // UpdateMode.BLOCKING (it is by default), this will throttle the rendering to
      // the
      // camera framerate.
      Frame frame = session.update();
      Camera camera = frame.getCamera();
      
      // Keep the screen unlocked while tracking, but allow it to lock when tracking
      // stops.
      trackingStateHelper.updateKeepScreenOnFlag(camera.getTrackingState());
      
      // If frame is ready, render camera preview image to the GL surface.
      backgroundRenderer.draw(frame);
      
      // Get projection matrix.
      float[] projmtx = new float[16];
      camera.getProjectionMatrix(projmtx, 0, 0.1f, 100.0f);
      
      // Get camera matrix and draw.
      float[] viewmtx = new float[16];
      camera.getViewMatrix(viewmtx, 0);
      
      // Visualize augmented images.
      drawAugmentedImages(frame, projmtx, viewmtx);
    } catch (Throwable t) {
      // Avoid crashing the application due to unhandled exceptions.
      Log.e(TAG, "Exception on the OpenGL thread", t);
    }
  }
  
  private void configureSession() throws IOException {
    Config config = new Config(session);
    if (session.isDepthModeSupported(Config.DepthMode.AUTOMATIC) == true) {
      config.setDepthMode(Config.DepthMode.AUTOMATIC);
    }
    config.setFocusMode(Config.FocusMode.FIXED);
    if (!setupAugmentedImageDatabase(config, annotations)) {
      messageSnackBarHelper.showError(this, "Could not setup augmented image database");
    }
    session.configure(config);
  }
  
  private void drawAugmentedImages(Frame frame, float[] projmtx, float[] viewmtx) throws Exception {
    Collection<AugmentedImage> updatedAugmentedImages = frame.getUpdatedTrackables(AugmentedImage.class);
    
    // Iterate to update augmentedImageMap, remove elements we cannot draw.
    for (AugmentedImage augmentedImage : updatedAugmentedImages) {
      switch (augmentedImage.getTrackingMethod()) {
        case FULL_TRACKING:
          // Have to switch to UI Thread to update View.
          this.runOnUiThread(() -> fitToScanView.setVisibility(View.GONE));
    
          // Create a new anchor for newly found images.
          if (!augmentedImageMap.containsKey(augmentedImage.getIndex())) {
            Anchor centerPoseAnchor = augmentedImage.createAnchor(augmentedImage.getCenterPose());
            augmentedImageMap.put(augmentedImage.getIndex(), Pair.create(augmentedImage, centerPoseAnchor));
          }
          break;
        
        case LAST_KNOWN_POSE:
          augmentedImageMap.remove(augmentedImage.getIndex());
          break;
        
        default:
          break;
      }
    }
    // Draw all images in augmentedImageMap
    for (Pair<AugmentedImage, Anchor> pair : augmentedImageMap.values()) {
      AugmentedImage arImg = pair.first;
      Anchor centerAnchor = pair.second;
      if (arImg.getTrackingState() == TrackingState.TRACKING) {
        Log.d(TAG, "drawAugmentedImages: " + arImg.getName());
        ARRendering.draw(viewmtx, projmtx, centerAnchor, arImg.getName());
      }
    }
  }
  
  private boolean setupAugmentedImageDatabase(Config config, List<Annotation> annotations) {
    CreateARImageDB createARImageDB = new CreateARImageDB(session, config, annotations);
    createARImageDB.start();
    synchronized (createARImageDB) {
      try {
        createARImageDB.join();
      } catch (InterruptedException e) {
        e.printStackTrace();
      }
    }
    return true;
  }
  
  private Bitmap loadAugmentedImageBitmap(String fileName) {
    try (InputStream is = getAssets().open(fileName)) {
      return BitmapFactory.decodeStream(is);
    } catch (IOException e) {
      Log.e(TAG, "IO exception loading augmented image bitmap.", e);
    }
    return null;
  }
}
