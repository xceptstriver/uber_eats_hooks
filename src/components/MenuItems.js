import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Divider} from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useSelector, useDispatch} from 'react-redux';

const MenuItems = props => {
  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...item,
        restaurantName: props.restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems =
    useSelector(state => (state.cartReducer || {}).selectedItems || {}).items ||
    [];

  const isFoodIncart = (food, cartItems) =>
    Boolean(cartItems.find(_ => _.title == food.title));
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {(props.foods || []).map((_, i) => (
        <View key={i}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 20,
            }}>
            {props.hideCheckbox ? null : (
              <BouncyCheckbox
                iconStyle={{borderColor: 'lightGray', borderRadius: 0}}
                fillColor="green"
                onPress={checkboxValue => selectItem(_, checkboxValue)}
                isChecked={isFoodIncart(_, cartItems)}
              />
            )}

            <FoodInfo food={_} />
            <FoodImage
              food={_}
              marginLeft={props.marginLeft ? props.marginLeft : 0}
            />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{marginHorizontal: 20}}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const FoodInfo = props => (
  <View style={{width: 240, justifyContent: 'space-evenly'}}>
    <Text style={{fontSize: 16, fontWeight: '600'}}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = props => (
  <View style={{marginLeft: -60}}>
    <Image
      source={{uri: props.food.image}}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: props.marginLeft,
      }}
    />
  </View>
);

export default MenuItems;
