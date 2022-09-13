import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { SIZES, SHADOWS, assets } from '../constants';
import { CircleButton, RectButton } from './Button';
import { SubInfo, NFTTitle, EthPrice } from './SubInfo';

const NTFCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: '100%', height: 250 }}>
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfo cost={data.cost} />
      <View
        style={{
          width: '100%',
          padding: SIZES.font,
        }}
      >
        <NFTTitle
          title={data.name}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            buttonText={'View Details'}
            handlePress={() => navigation.navigate('Details', { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default NTFCard;
