import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {BottomTabParamList} from './types';

import StackNavigator from './StackNavigator';
import ExploreScreen from '../screens/ExploreScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#E5E5EA',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={StackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => (
            <TabIcon name="🏠" focused={focused} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({focused, color}) => (
            <TabIcon name="🔍" focused={focused} color={color} />
          ),
          headerShown: true,
          headerTitle: 'Explore',
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({focused, color}) => (
            <TabIcon name="🔔" focused={focused} color={color} />
          ),
          headerShown: true,
          headerTitle: 'Notifications',
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Tab.Navigator>
  );
};

// Simple emoji-based tab icon component
interface TabIconProps {
  name: string;
  focused: boolean;
  color: string;
}

const TabIcon: React.FC<TabIconProps> = ({name, focused}) => {
  return (
    <Text style={{
      fontSize: focused ? 24 : 20,
      opacity: focused ? 1 : 0.6,
    }}>
      {name}
    </Text>
  );
};

export default BottomTabNavigator;