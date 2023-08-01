package com.testjava.rendering;

import android.content.Context;
import android.util.Log;

import com.testjava.common.models.ARAnnotation;

import com.google.ar.core.Anchor;
import com.google.ar.core.Pose;
import com.testjava.common.rendering.ObjectRenderer;
import com.testjava.common.rendering.ObjectRenderer.BlendMode;

import java.io.IOException;
import java.util.ArrayList;

public class ARRendering {
  private static final String TAG = "AugmentedImageRenderer";
  private static final ArrayList<ARAnnotation> ARObjects = new ArrayList<>();
  
  public void createOnGlThreadPlane(Context context, float diffuse, String[] images) throws IOException {
    for (String image : images) {
      ARAnnotation ARAnnotation = new ARAnnotation(image, new ObjectRenderer());
      Log.d(TAG, "**** createOnGlThreadPlane: " + image);
      
      ARAnnotation.getARObject().createOnGlThread(context, "models/plane.obj", image);
      ARAnnotation.getARObject().setMaterialProperties(0.0f, diffuse, 1.0f, 6.0f);
      ARAnnotation.getARObject().setBlendMode(BlendMode.AlphaBlending);
      ARObjects.add(ARAnnotation);
    }
  }
  
  public static void draw(
      float[] viewMatrix,
      float[] projectionMatrix,
      Anchor centerAnchor,
      String annotation) throws Exception {
    Pose localBoundaryPose = Pose.makeTranslation(0.0f, 0.0f, 0.0f);
    Pose anchorPose = centerAnchor.getPose();
    Pose worldBoundaryPose = anchorPose.compose(localBoundaryPose);
    float scaleFactor = 0.08f;
    float[] modelMatrix = new float[16];
    float[] colorCorrectionRgba = new float[] {0.5f, 0.5f, 0.5f, 0.7f};
    worldBoundaryPose.toMatrix(modelMatrix, 0);
    
    ARAnnotation ARAnnotation = ARObjects
        .stream()
        .filter(obj -> obj.getAnnotation().equals(annotation))
        .findFirst()
        .orElseThrow(() -> new Exception("No ARObject found with annotation: " + annotation + "\n objects" + ARObjects));
    
    ARAnnotation.getARObject().updateModelMatrix(modelMatrix, scaleFactor);
    ARAnnotation.getARObject().draw(viewMatrix, projectionMatrix, colorCorrectionRgba);
  }
}