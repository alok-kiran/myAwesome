/**
 * React Native App with Navigation
 * Includes Drawer, Bottom Tabs, and Stack Navigation
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import Navigation from './navigation';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#007AFF" />
      <Navigation />
    </>
  );
}

export default App;
