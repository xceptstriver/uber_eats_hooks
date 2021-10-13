import React from 'react';
import {View, Text, Image} from 'react-native';

const yelpRestaurantInfo = {
  name: 'Farmhouse Kitchen Thai Cuisine',
  image: 'https://s3-media4.fl.yelpcdn.com/bphoto/kUlEaPpv0JGlHG_nrPr7wQ/o.jpg',
  price: '$$',
  reviews: '1500',
  rating: 4.5,
  categories: [
    {title: 'Thai'},
    {title: 'Comfort food'},
    {title: 'Indian'},
    {title: 'Ice cream'},
    {title: 'Snacks'},
  ],
};

const About = props => {
  const {name, image, price, reviews, rating, categories} = props.route.params;
  const formattedCategories = categories.map(_ => _.title).join(' • ');

  const description = `${formattedCategories} ${
    price ? ' • ' + price : ''
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View style={{backgroundColor: '#fff'}}>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

const RestaurantImage = props => (
  <Image source={{uri: props.image}} style={{width: '100%', height: 180}} />
);

const RestaurantName = props => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: '600',
      marginTop: 10,
      marginHorizontal: 15,
    }}>
    {props.name}
  </Text>
);

const RestaurantDescription = props => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: '400',
      fontSize: 15.5,
      color: '#000',
    }}>
    {props.description}
  </Text>
);

export default About;
