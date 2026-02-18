# Keep React Native classes
-keep class com.facebook.react.** { *; }
-keep class com.facebook.hermes.** { *; }
-keep class com.facebook.jni.** { *; }

# Keep Expo modules
-keep class expo.modules.** { *; }
-keep class expo.modules.splashscreen.** { *; }
-keep class expo.modules.updates.** { *; }

# Keep JNI methods
-keepclasseswithmembernames class * {
    native <methods>;
}

# Keep annotations
-keepattributes *Annotation*

# Keep classes used by reflection
-keepclassmembers class * {
    @com.facebook.react.bridge.ReactMethod <methods>;
    @com.facebook.react.bridge.ReactModule <fields>;
}

# Keep Kotlin metadata and reflection
-keep class kotlin.Metadata { *; }
-keep class kotlin.reflect.** { *; }

# Keep OkHttp (used by React Native networking)
-keep class okhttp3.** { *; }
-dontwarn okhttp3.**

# Do not warn about missing classes
-dontwarn com.facebook.react.**
-dontwarn expo.modules.**
-dontwarn kotlin.**