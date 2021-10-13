/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Home from './src/containers/Home';
import RestaurantDetail from './src/containers/RestaurantDetail';
import RootNavigation from './src/routes';

const App = () => {
  return <RootNavigation />;
};

export default App;
