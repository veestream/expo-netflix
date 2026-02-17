import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import More from '../screens/More';
import MoreAppSettings from '../screens/MoreAppSettings';
import MoreNotifications from '../screens/MoreNotifications';
import MoreMyList from '../screens/MoreMyList';

const Stack = createNativeStackNavigator();

function StackMore() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="More" component={More} options={{ headerShown: false }} />
      <Stack.Screen name="MoreAppSettings" component={MoreAppSettings} options={{ headerShown: false }} />
      <Stack.Screen name="MoreNotifications" component={MoreNotifications} options={{ headerShown: false }} />
      <Stack.Screen name="MoreMyList" component={MoreMyList} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default StackMore;