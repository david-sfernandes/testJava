package com.testjava.common.utils;

import android.graphics.Bitmap;

import com.google.ar.core.AugmentedImageDatabase;
import com.google.ar.core.Config;
import com.google.ar.core.Session;
import com.testjava.common.models.Annotation;

import java.io.IOException;
import java.util.List;

public class CreateARImageDB extends Thread {
  private final Session session;
  private final Config config;
  private final List<Annotation> annotations;
  
  public CreateARImageDB(Session session, Config config, List<Annotation> annotations) {
    this.session = session;
    this.config = config;
    this.annotations = annotations;
  }
  
  public void run() {
    AugmentedImageDatabase augmentedImageDatabase = new AugmentedImageDatabase(session);
    float imgWidth = 0.10f;
    for (Annotation annotation : annotations) {
      Bitmap bitmap;
      try {
        bitmap = GetBitmap.get(annotation.anchor);
      } catch (IOException e) {
        throw new RuntimeException(e);
      }
      augmentedImageDatabase.addImage(annotation.id, bitmap, imgWidth);
    }
    config.setAugmentedImageDatabase(augmentedImageDatabase);
  }
}
