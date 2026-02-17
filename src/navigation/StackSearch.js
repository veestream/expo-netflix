import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import Search from '../screens/Search';

const Stack = createNativeStackNavigator();

function StackSearch() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default StackSearch;