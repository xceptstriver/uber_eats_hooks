import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import OrderItem from './OrderItem';
import firestore from '@react-native-firebase/firestore';
import LottieView from 'lottie-react-native';

const ViewCart = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const items =
    useSelector(state => (state.cartReducer || {}).selectedItems || {}).items ||
    [];
  const restaurantName =
    useSelector(state => (state.cartReducer || {}).selectedItems || {})
      .restaurantName || '';
  const total = items
    .map(_ => Number(_.price.replace('$', '')))
    .reduce((accum, curr) => accum + curr, 0);

  //   const totalUSD = total.toLocaleString('en', {
  //     style: 'currency',
  //     currency: 'USD',
  //   });
  //   console.log('totalUSD', totalUSD);

  const addOrderToFirebase = () => {
    setLoading(true);
    firestore()
      .collection('orders')
      .add({
        items: items,
        restaurantName: restaurantName,
        createdAt: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
          props.navigation.navigate('OrderCompleted');
        }, 2500);
      });

    // const db = firebase.firestore();
    // db.collection('orders').add({
    //   items: items,
    //   restaurantName: restaurantName,
    //   createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    // });
  };

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items.map((_, i) => (
              <OrderItem key={i} item={_} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text>${total}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: 'black',
                  alignItems: 'center',
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: 'relative',
                }}
                onPress={() => {
                  addOrderToFirebase();
                  setModalVisible(false);
                }}>
                <Text style={{color: 'white', fontSize: 20}}>Checkout</Text>
                <Text
                  style={{
                    position: 'absolute',
                    right: 20,
                    color: 'white',
                    fontSize: 15,
                    top: 17,
                  }}>
                  ${total ? total : ''}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        {checkoutModalContent()}
      </Modal>

      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 40,
            zIndex: 999,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
            }}>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={{
                marginTop: 20,
                backgroundColor: 'black',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: 15,
                borderRadius: 30,
                width: 300,
                position: 'relative',
                flexDirection: 'row',
              }}>
              <Text style={{color: 'white', fontSize: 20, marginRight: 60}}>
                View Cart
              </Text>
              <Text style={{color: 'white', fontSize: 20}}>${total}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {loading ? (
        <View
          style={{
            backgroundColor: 'black',
            position: 'absolute',
            opacity: 0.6,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            alignContent: 'center',
            height: '100%',
            width: '100%',
          }}>
          <LottieView
            style={{height: 200}}
            source={require('../assets/animations/scanner.json')}
            autoPlay
            speed={3}
          />
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalCheckoutContainer: {
    backgroundColor: 'white',
    padding: 16,
    height: 500,
    borderWidth: 1,
  },

  restaurantName: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 10,
  },

  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  subtotalText: {
    textAlign: 'left',
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 10,
  },
});

export default ViewCart;
