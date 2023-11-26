package com.testjava.rendering;

import android.content.Context;
import android.util.Log;

import com.google.ar.core.Anchor;
import com.google.ar.core.Pose;
import com.testjava.common.models.ARAnnotation;
import com.testjava.common.models.Annotation;
import com.testjava.common.rendering.ObjectRenderer;
import com.testjava.common.rendering.ObjectRenderer.BlendMode;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class ARRendering {
  private static final String TAG = "AugmentedImageRenderer";
  private static final ArrayList<ARAnnotation> ARObjects = new ArrayList<>();
  
  public void createOnGlThreadPlane(Context context, float diffuse, List<Annotation> annotations) throws IOException {
    for (Annotation annotation : annotations) {
      ARAnnotation arAnnotation = new ARAnnotation(annotation.id, new ObjectRenderer());
      Log.d(TAG, "**** createOnGlThreadPlane for id: " + annotation.id);
      
      arAnnotation.getARObject().createOnGlThread(context, "models/plane.obj", annotation.text);
      arAnnotation.getARObject().setMaterialProperties(0.0f, diffuse, 1.0f, 6.0f);
      arAnnotation.getARObject().setBlendMode(BlendMode.AlphaBlending);
      ARObjects.add(arAnnotation);
    }
  }
  
  public static void draw(
      float[] viewMatrix,
      float[] projectionMatrix,
      Anchor centerAnchor,
      String annotation) throws Exception {
    Pose localBoundaryPose = Pose.makeTranslation(0.1f, 0.0f, 0.01f);
    Pose anchorPose = centerAnchor.getPose();
    Pose worldBoundaryPose = anchorPose.compose(localBoundaryPose);
    float scaleFactor = 0.08f;
    float[] modelMatrix = new float[16];
    float[] colorCorrectionRgba = new float[]{0.5f, 0.5f, 0.5f, 0.7f};
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