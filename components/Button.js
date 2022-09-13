import { Text, TouchableOpacity, Image } from 'react-native';

import { SHADOWS, SIZES } from '../constants';

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: 'white',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SIZES.extraLarge,
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};
export const RectButton = ({
  minWidth,
  fontSize,
  imgUrl,
  handlePress,
  buttonText,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#1e293b',
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontWeight: '400',
          fontSize: fontSize,
          color: 'white',
          textAlign: 'center',
        }}
      >
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};
