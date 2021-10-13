import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import BottomTabs from '../components/BottomTabs';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import RestaurantItems, {localRestaurants} from '../components/RestaurantItems';
import SearchBar from '../components/SearchBar';
import {useSelector, useDispatch} from 'react-redux';

const YELP_API_KEY =
  'v7bKSSx1YMnDQCUklA2ITwiCMO_5I6GTTptkZZDAB26ibcNlCExKP0HnYVBBblBsUQDSEQJ2Bdac3UboJLGFCrYhNVrVGo1ODt1DNuAOELlo6UUMYK6-_aSAxfBiYXYx';

const Home = props => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [activeTab, setActiveTab] = useState('Delivery');
  const itemsData =
    useSelector(state => (state.cartReducer || {}).selectedItems || {}).items ||
    [];

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=LosAngeles`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then(res => res.json())
      .then(json =>
        setRestaurantData(
          json.businesses.filter(_ =>
            _.transactions.includes(activeTab.toLowerCase()),
          ),
        ),
      );
  };
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [activeTab]);

  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* <SearchBar /> */}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={props.navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;
