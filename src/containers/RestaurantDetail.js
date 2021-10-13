import React from 'react';
import {View, Text} from 'react-native';
import {Divider} from 'react-native-elements';
import About from '../components/About';
import MenuItems from '../components/MenuItems';
import ViewCart from '../components/ViewCart';

const foods = [
  {
    title: 'Tandoori Chicken',
    description: 'Amazing Indian dish ',
    price: '$13.20',
    image:
      'https://www.cookingclassy.com/wp-content/uploads/2021/01/butter-chicken-4.jpg',
  },
  {
    title: 'Lasagna Chicken',
    description: 'Amazing Indian dish ',
    price: '$19.20',
    image:
      'https://www.cookingclassy.com/wp-content/uploads/2021/01/butter-chicken-4.jpg',
  },
  {
    title: 'Chilaquile',
    description: 'Amazing Indian dish ',
    price: '$15.20',
    image:
      'https://www.cookingclassy.com/wp-content/uploads/2021/01/butter-chicken-4.jpg',
  },
];

const RestaurantDetail = props => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <About route={props.route} />
      <Divider width={1.8} style={{marginVertical: 20}} />
      <MenuItems
        restaurantName={props.route.params.name}
        hideCheckbox={false}
        foods={foods}
      />
      <ViewCart
        navigation={props.navigation}
        restaurantName={props.route.params.name}
      />
    </View>
  );
};

export default RestaurantDetail;
