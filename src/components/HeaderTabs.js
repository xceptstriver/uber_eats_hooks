import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const HeaderTabs = props => {
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
};

const HeaderButton = props => (
  <TouchableOpacity
    onPress={() => props.setActiveTab(props.text)}
    style={{
      backgroundColor: props.activeTab == props.text ? 'black' : 'white',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}>
    <Text
      style={{
        color: props.activeTab == props.text ? 'white' : 'black',
        fontSize: 15,
        fontWeight: '900',
      }}>
      {props.text}
    </Text>
  </TouchableOpacity>
);

export default HeaderTabs;
