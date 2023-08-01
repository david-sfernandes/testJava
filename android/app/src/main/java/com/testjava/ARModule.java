package com.testjava;

import android.app.Activity;
import android.content.Intent;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

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
  public void startARActivity() {
    Activity currentActivity = getCurrentActivity();
    if (null != currentActivity) {
      Intent intent = new Intent(currentActivity, ARActivity.class);
      currentActivity.startActivity(intent);
    }
  }
}
