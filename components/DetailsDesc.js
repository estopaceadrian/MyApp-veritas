import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import moment from 'moment/moment';
import { EthPrice, NFTTitle } from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';
const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <NFTTitle title={data.name} titleSize={22} />
        <EthPrice price={data.price} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <View
          style={{
            marginTop: 5,
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '20%',
          }}
        >
          <Text style={styles.title}>Stock</Text>
          <Text> {data.quantity}</Text>
        </View>
        <Text style={styles.title}>Category: {data.category.name}</Text>

        <Text style={[styles.title, { marginTop: 20 }]}>Description</Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontWeight: 'normal',
              color: '#334155',
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {!readMore && '...'}
            <Text
              style={{
                fontSize: SIZES.small,
                fontWeight: 'bold',
                color: 'black',
              }}
              onPress={() => {
                if (!readMore) {
                  setText(data.description);
                  setReadMore(true);
                } else {
                  setText(data.description.slice(0, 100));
                  setReadMore(false);
                }
              }}
            >
              {readMore ? ' Show Less' : ' Read More'}
            </Text>
          </Text>
          <Text style={[styles.title, { marginTop: 50 }]}>
            Date Created: {moment(data.dateCreated).format('ll')}
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;

const styles = StyleSheet.create({
  title: {
    fontSize: SIZES.font,
    fontWeight: 'bold',
    color: 'black',
  },
});
