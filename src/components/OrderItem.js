import React from 'react';
import {Text, View} from 'react-native';

const OrderItem = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#999',
      }}>
      <Text style={{fontWeight: '600', fontSize: 16}}>{props.item.title}</Text>
      <Text style={{opacity: 0.7, fontSize: 16}}>{props.item.price}</Text>
    </View>
  );
};

export default OrderItem;
