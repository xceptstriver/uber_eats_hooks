import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';

export const localRestaurants = [
  {
    name: 'Beachside Bar',
    image_url:
      'https://img.etimg.com/thumb/width-1200,height-900,imgsize-829462,resizemode-1,msid-82666514/industry/services/hotels-/-restaurants/staggered-lockdowns-start-to-bite-battered-restaurants.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: 'Benihana',
    image_url:
      'https://www.pandotrip.com/wp-content/uploads/2014/05/Ithaa-Restaurant4.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 3.9,
  },
  {
    name: "India's Grill",
    image_url:
      'https://smallbizclub.com/wp-content/uploads/2015/12/4-Things-You-Should-Know-About-Opening-a-Restaurant.jpg',
    categories: ['Indian', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 4.7,
  },
];

const RestaurantItems = props => {
  return (
    <>
      {props.restaurantData.map((_, i) => (
        <TouchableOpacity
          key={i}
          activeOpacity={1}
          style={{marginBottom: 30}}
          onPress={() =>
            props.navigation.navigate('RestaurantDetail', {
              name: _.name,
              image: _.image_url,
              price: _.price,
              reviews: _.review_count,
              rating: _.rating,
              categories: _.categories,
            })
          }>
          <View style={{marginTop: 10, padding: 15, backgroundColor: 'white'}}>
            <RestaurantImage image={_.image_url} />
            <RestaurantInfo name={_.name} price={_.price} rating={_.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

const RestaurantImage = props => (
  <>
    <Image source={{uri: props.image}} style={{width: '100%', height: 180}} />
    <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = props => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    }}>
    <View>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>{props.name}</Text>
      <Text style={{fontSize: 13, color: 'gray'}}>30-45 . </Text>
    </View>
    <View
      style={{
        backgroundColor: '#eee',
        height: 30,
        width: 30,
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'center',
      }}>
      <Text>{props.rating}</Text>
    </View>
  </View>
);

export default RestaurantItems;
