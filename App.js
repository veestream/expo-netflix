import * as React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { func } from './src/constants';

// Root stack navigation
import RootStack from './src/navigation/RootStack';

// Prevent splash screen from auto-hiding until assets are ready
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function prepare() {
      try {
        await func.loadAssetsAsync();
      } catch (e) {
        // Optional: log or handle asset loading errors
        console.warn('Asset loading error:', e);
      } finally {
        setIsLoading(false);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (!isLoading) {
      await SplashScreen.hideAsync();
    }
  }, [isLoading]);

  if (isLoading) {
    // Keep splash screen visible while loading
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <RootStack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
