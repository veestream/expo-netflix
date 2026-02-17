import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import Home from '../screens/Home';
import TvShows from '../screens/TvShows';
import Movies from '../screens/Movies';
import MyList from '../screens/MyList';

const Stack = createNativeStackNavigator();

function StackHome() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ animationEnabled: false, headerShown: false }} />
      <Stack.Screen name="TvShows" component={TvShows} options={{ animationEnabled: false, headerShown: false }} />
      <Stack.Screen name="Movies" component={Movies} options={{ animationEnabled: false, headerShown: false }} />
      <Stack.Screen name="MyList" component={MyList} options={{ animationEnabled: false, headerShown: false }} />
    </Stack.Navigator>
  );
}

export default StackHome;