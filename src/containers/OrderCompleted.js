import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import LottieView from 'lottie-react-native';
import MenuItems from '../components/MenuItems';
import firestore from '@react-native-firebase/firestore';

const OrderCompleted = () => {
  const restaurantName =
    useSelector(state => (state.cartReducer || {}).selectedItems || {})
      .restaurantName || '';
  const items =
    useSelector(state => (state.cartReducer || {}).selectedItems || {}).items ||
    [];
  const total = items
    .map(_ => Number(_.price.replace('$', '')))
    .reduce((accum, curr) => accum + curr, 0);

  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: 'Tandoori Chicken',
        description: 'Amazing Indian dish ',
        price: '$13.20',
        image:
          'https://www.cookingclassy.com/wp-content/uploads/2021/01/butter-chicken-4.jpg',
      },
    ],
  });

  useEffect(() => {
    const db = firestore();
    const unsubscribe = db
      .collection('orders')
      .orderBy('createdAt', 'desc')
      .limit(1)
      .onSnapshot(snapshot => {
        snapshot.docs.map(_ => {
          setLastOrder(_.data());
        });
      });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      {/* phonepe Check */}
      <View
        style={{
          margin: 15,
          alignItems: 'center',
          height: '100%',
        }}>
        <LottieView
          style={{height: 100, alignSelf: 'center', marginBottom: 30}}
          source={require('../assets/animations/check-mark.json')}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Your order at {restaurantName} has been placed for {total}{' '}
        </Text>
        <ScrollView>
          <MenuItems foods={lastOrder.items} hideCheckbox marginLeft={10} />
          <LottieView
            style={{height: 100, alignSelf: 'center', marginBottom: 30}}
            source={require('../assets/animations/cooking.json')}
            autoPlay
            speed={0.5}
            loop={false}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderCompleted;
