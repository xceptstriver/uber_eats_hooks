import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../containers/Home';
import RestaurantDetail from '../containers/RestaurantDetail';
import OrderCompleted from '../containers/OrderCompleted';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from '../redux/store';

const store = configureStore();

const RootNavigation = () => {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
  };
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
          <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default RootNavigation;
