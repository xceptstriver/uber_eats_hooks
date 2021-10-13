import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState(null);
  return (
    <View style={{marginTop: 15, flexDirection: 'row'}}>
      <View
        style={{
          position: 'absolute',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          height: 50,
          width: '90%',
          marginVertical: 20,
          paddingHorizontal: 15,
          borderRadius: 25,
          //shadow
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 6,
        }}>
        <Ionicons name={'search-outline'} color={'#888'} size={26} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={'#eee'}
          selectionColor={'#888'}
          returnKeyType={'search'}
          value={inputValue}
          // blurOnSubmit={true}
          onChangeText={value => {
            setInputValue(value);
          }}
          style={{
            fontSize: 16,
            fontFamily: 'Roboto-Regular',
            marginHorizontal: '3%',
            width: '80%',

            // color: bkgStyle.darkModesecTxtColor,
            // fontFamily: 'Montserrat-SemiBold',
          }}
        />
      </View>
      {/* <GooglePlacesAutocomplete
        placeholder="Search"
        query={{key: 'AIzaSyB7sQvTdqDgV_8_Grrm4xjuhc3pijPGV4U'}}
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
            color: '#5d5d5d',
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{marginLeft: 10}}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              marginRight: 8,
              backgroundColor: 'white',
              padding: 9,
              borderRadius: 30,
              alignItems: 'center',
            }}>
            <AntDesign name="clockcircle" size={11} style={{marginRight: 6}} />
            <Text>Search</Text>
          </View>
        )}
      /> */}
    </View>
  );
};

export default SearchBar;
