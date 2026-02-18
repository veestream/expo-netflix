package com.exponetflix;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import expo.modules.ReactActivityDelegateWrapper;
import androidx.core.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    // Install SplashScreen before React Native sets up the UI
    SplashScreen.installSplashScreen(this);

    // Keep Expo’s expected behavior (null instead of savedInstanceState)
    super.onCreate(null);
  }

  @Override
  protected String getMainComponentName() {
    return "main"; // This should match the "name" in AppRegistry.registerComponent in index.js
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegateWrapper(
      this,
      new ReactActivityDelegate(this, getMainComponentName())
    );
  }
}