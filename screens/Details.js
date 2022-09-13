import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';

import { SIZES, SHADOWS, assets } from '../constants';
import {
  FocusedStatusBar,
  SubInfo,
  RectButton,
  CircleButton,
  DetailsDesc,
  DetailsBid,
} from '../components';
import React from 'react';

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: '100%', height: 373 }}>
    <Image
      resizeMode="cover"
      style={{ width: '100%', height: '100%' }}
      source={data.image}
    />
    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />
    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

export default function Details({ route, navigation }) {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: 'center',
          backgroundColor: 'rgba(255,255,255,0.5)',
          alignItems: 'center',
          zIndex: 1,
        }}
      >
        <RectButton
          buttonText={'Add To Cart'}
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS.dark}
        />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />

            <SubInfo cost={data.cost} />

            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
}
