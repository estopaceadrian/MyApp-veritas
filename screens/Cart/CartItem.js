import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Left, InputRightAddon, ListItem, Thumbnail, Body } from 'native-base';

const CartItem = (props) => {
  const data = props.item.item.product;
  const [quantity, setquantity] = useState(props.item.item.quantity);
  return (
    <View>
      <ListItem style={style.listItem} avatar key={Math.random()}>
        <Left>
          <Thumbnail />
        </Left>
        <Body style={styles.body}>
          <Left>
            <Text>{data.product.name}</Text>
          </Left>
          <Right>
            <Text> ${data.product.price}</Text>
          </Right>
        </Body>
      </ListItem>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'white',
  },
  body: {
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
});
