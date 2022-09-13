import { View, Text, Image, TextInput } from 'react-native';
import { SIZES, assets, COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from './Button';
const HomeHeader = ({ onSearch }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: '#38bdf8',
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Image
          source={assets.pokemonLogo}
          resizeMode="contain"
          style={{
            width: 120,
            height: 45,
          }}
        />
        <View
          style={{
            width: 45,
            height: 45,
          }}
        >
          <RectButton
            minWidth={57}
            fontSize={SIZES.font}
            backgroundColor={'blue'}
            buttonText={'CART'}
            handlePress={() => navigation.navigate('Cart')}
          >
            <Image
              source={assets.cart}
              resizeMode="contain"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
            <Image
              source={assets.badge}
              resizeMode="contain"
              style={{
                position: 'absolute',
                width: 15,
                height: 15,
                bottom: 0,
                right: 0,
              }}
              onPress={() => navigation.navigate('Cart', { data })}
            />
          </RectButton>
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontWeight: 'normal',
            fontSize: 14,
            color: 'white',
            marginTop: 8 / 2,
          }}
        >
          Hello, Tiffany 👋
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 22,
            color: 'white',
            marginTop: 8,
          }}
        >
          Let's get your Pokemon
        </Text>
      </View>
      <View
        style={{
          marginTop: SIZES.font,
        }}
      >
        <View
          style={{
            width: '100%',
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search items by Name or Category"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
