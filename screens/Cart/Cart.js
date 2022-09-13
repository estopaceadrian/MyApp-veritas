import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Container, Left, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import CartItem from './CartItem';
import { SwipeableListView } from 'react-native';

var { height, width } = Dimensions.get('window');

const Cart = (props) => {
  var total = 0;

  return (
    <>
      <Container>
        <h1 style={{ alignSelf: 'center' }}>Cart</h1>
        <SwipeableListView
          data={props.cartItems}
          renderItem={(data) => {
            <CartItem item={data} />;
          }}
          renderHiddenItem={(data) => (
            <View style={styles.hiddenContainer}>
              <TouchableOpacity
                onPress={() => props.removeFromCart(data.item)}
                style={styles.hiddenButton}
              >
                <Icon name="trash" color={'white'} size={30} />
              </TouchableOpacity>
            </View>
          )}
          disableRightSwipe={true}
          previewOpenDelay={3000}
          friction={1000}
          tension={40}
          leftOpenValue={75}
          stopLeftSwipe={75}
          rightOpenValue={-75}
        />
        <View style={styles.bottomContainer}>
          <Left>
            <Text style={styles.price}>${total}</Text>
          </Left>
          <Right>
            <Button title="Clear" />
          </Right>
          <Right>
            <Button
              title="Checkout"
              onPress={() => props.navigation.navigate('Checkout')}
            />
          </Right>
        </View>
      </Container>

      <Container style={styles.emptyContainer}>
        <Text>Looks like your cart is empty</Text>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     clearCart: () => dispatch(actions.clearCart()),
//     removeFromCart: (item) => dispatch(actions.removeFromCart(item)),
//   };
// };
export default Cart;

const styles = StyleSheet.create({
  emptyContainer: {
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'white',
    elevation: 20,
  },
  price: {
    fontSize: 18,
    margin: 20,
    color: 'red',
  },
  hiddenContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  hiddenButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 25,
    height: 70,
    width: width / 1.2,
  },
});
