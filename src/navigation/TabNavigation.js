import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors, gStyle } from '../constants';
import { Home, Search, Downloads, Menu } from '../icons';

// stacks
import StackHome from './StackHome';
import StackSearch from './StackSearch';
import StackDownloads from './StackDownloads';
import StackMore from './StackMore';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.inactiveGrey,
        tabBarStyle: gStyle.navTabStyle,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={StackHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={StackSearch}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => <Search color={color} />,
        }}
      />
      <Tab.Screen
        name="DownloadsTab"
        component={StackDownloads}
        options={{
          tabBarLabel: 'Downloads',
          tabBarIcon: ({ color }) => <Downloads color={color} />,
        }}
      />
      <Tab.Screen
        name="MoreTab"
        component={StackMore}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color }) => <Menu color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;