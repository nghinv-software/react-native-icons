/**
 * Created by nghinv on Wed Feb 17 2021
 * Copyright (c) 2021 nghinv@lumi.biz
 */


declare module '@nghinv/react-native-icons' {
  import { ViewStyle } from 'react-native';

  export type IconType = 'AntDesign' | 'Entypo' | 'EvilIcons' | 'Feather' | 'FontAwesome' | 'FontAwesome5' | 'FontAwesome5Pro' | 'Fontisto' | 'Foundation' | 'Ionicons' | 'MaterialCommunityIcons' | 'MaterialIcons' | 'Octicons' | 'RNIMigration' | 'SimpleLineIcons' | 'Zocial';

  export interface IconProps {
    size: Number;
    name: String;
    color: String;
    style: ViewStyle;
    type: IconType
  }

  export function Icon(props: IconProps): JSX.Element;
}