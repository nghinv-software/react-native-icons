/**
 * Created by nghinv on Sun Aug 02 2020
 * Copyright (c) 2020 nguyennghidt6@gmail.com
 */

import React from 'react';
import { ViewStyle } from 'react-native';

const IconFamily = {
  get AntDesign() {
    return require('react-native-vector-icons/dist/AntDesign').default;
  },
  get Entypo() {
    return require('react-native-vector-icons/dist/Entypo').default;
  },
  get EvilIcons() {
    return require('react-native-vector-icons/dist/EvilIcons').default;
  },
  get Feather() {
    return require('react-native-vector-icons/dist/Feather').default;
  },
  get FontAwesome() {
    return require('react-native-vector-icons/dist/FontAwesome').default;
  },
  get FontAwesome5() {
    return require('react-native-vector-icons/dist/FontAwesome5').default;
  },
  get FontAwesome5Pro() {
    return require('react-native-vector-icons/dist/FontAwesome5Pro').default;
  },
  get Fontisto() {
    return require('react-native-vector-icons/dist/Fontisto').default;
  },
  get Foundation() {
    return require('react-native-vector-icons/dist/Foundation').default;
  },
  get Ionicons() {
    return require('react-native-vector-icons/dist/Ionicons').default;
  },
  get MaterialCommunityIcons() {
    return require('react-native-vector-icons/dist/MaterialCommunityIcons').default;
  },
  get MaterialIcons() {
    return require('react-native-vector-icons/dist/MaterialIcons').default;
  },
  get Octicons() {
    return require('react-native-vector-icons/dist/Octicons').default;
  },
  get RNIMigration() {
    return require('react-native-vector-icons/dist/RNIMigration').default;
  },
  get SimpleLineIcons() {
    return require('react-native-vector-icons/dist/SimpleLineIcons').default;
  },
  get Zocial() {
    return require('react-native-vector-icons/dist/Zocial').default;
  },
};

export type IconType = 'AntDesign' | 'Entypo' | 'EvilIcons' | 'Feather' | 'FontAwesome' | 'FontAwesome5' | 'FontAwesome5Pro' | 'Fontisto' | 'Foundation' | 'Ionicons' | 'MaterialCommunityIcons' | 'MaterialIcons' | 'Octicons' | 'RNIMigration' | 'SimpleLineIcons' | 'Zocial';

export interface IconProps {
  size: Number;
  name: String;
  color: String;
  style: ViewStyle;
  type: IconType
}

Icon.defaultProps = {
  size: 32,
  name: 'camera',
  color: 'black',
  type: 'MaterialIcons',
};

export default function Icon(props?: IconProps) {
  const { size, name, color, type, style } = props;
  const IconComponent = IconFamily[type];

  return (
    <IconComponent size={size} name={name} color={color} style={style} />
  );
}
