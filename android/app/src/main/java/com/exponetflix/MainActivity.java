package com.exponetflix;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import expo.modules.ReactActivityDelegateWrapper;

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }

  @Override
  protected String getMainComponentName() {
    return "main"; // This should match the "name" in your index.js AppRegistry.registerComponent
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegateWrapper(this, new ReactActivityDelegate(this, getMainComponentName()));
  }
}
