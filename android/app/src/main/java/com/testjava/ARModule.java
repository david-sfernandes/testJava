package com.testjava;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.testjava.common.models.Annotation;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class ARModule extends ReactContextBaseJavaModule {
  public ARModule(ReactApplicationContext context) {
    super(context);
  }
  
  @NonNull
  @Override
  public String getName() {
    return "ARModule";
  }
  
  @ReactMethod
  public void startARActivity(ReadableArray annotations) {
    Activity currentActivity = getCurrentActivity();
    if (null != currentActivity) {
      Intent intent = new Intent(currentActivity, ARActivity.class);
      Bundle bundle = new Bundle();
      try {
        List<Annotation> list = new ArrayList<>();
        for (int i = 0; i < annotations.size(); i++) {
          Annotation annotation = new Annotation();
          annotation.id = annotations.getMap(i).getString("id");
          annotation.anchor = annotations.getMap(i).getString("anchor");
          annotation.text = annotations.getMap(i).getString("text");
          list.add(annotation);
        }
        bundle.putSerializable("annotations", (Serializable) list);
        intent.putExtras(bundle);
        currentActivity.startActivity(intent);
      } catch (Exception e) {
        Log.d(" >>>>> ARModule ERROR", e.getMessage());
      }
    }
  }
}
