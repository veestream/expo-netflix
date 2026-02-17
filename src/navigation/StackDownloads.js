import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import Downloads from '../screens/Downloads';

const Stack = createNativeStackNavigator();

function StackDownloads() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Downloads" component={Downloads} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default StackDownloads;