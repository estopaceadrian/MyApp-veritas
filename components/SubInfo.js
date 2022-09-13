import { View, Text, Image } from 'react-native';
import { SIZES, SHADOWS, assets } from '../constants';

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 22,
          textTransform: 'uppercase',
          alignItems: 'center',
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export const EthPrice = ({ price }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'black' }}>
        PHP {price}
      </Text>
    </View>
  );
};
export const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export const People = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {[assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => (
          <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
        )
      )}
    </View>
  );
};
export const EndDate = ({ cost }) => {
  return (
    <View
      style={{
        paddingHorizontal: 14,
        paddingVertical: 8,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: '50%',
      }}
    >
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 16,
          color: 'black',
        }}
      >
        {cost}
      </Text>
    </View>
  );
};
export const SubInfo = ({ cost }) => {
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: 14,
        marginTop: -24,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      {/* <People /> */}
      <EndDate cost={cost} />
    </View>
  );
};
