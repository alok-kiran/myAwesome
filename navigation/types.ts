import type {NavigatorScreenParams} from '@react-navigation/native';

// Main Stack Navigation
export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

// Bottom Tab Navigation
export type BottomTabParamList = {
  HomeStack: NavigatorScreenParams<RootStackParamList>;
  Explore: undefined;
  Notifications: undefined;
};

// Drawer Navigation
export type DrawerParamList = {
  MainTabs: NavigatorScreenParams<BottomTabParamList>;
  About: undefined;
  Contact: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends DrawerParamList {}
  }
}