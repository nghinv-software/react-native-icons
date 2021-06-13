/**
 * Created by nghinv on Wed Feb 17 2021
 * Copyright (c) 2021 nghinv@lumi.biz
 */

import * as IconName from './lib/IconName';
import { ViewStyle } from 'react-native';

declare module '@nghinv/react-native-icons' {
  export type IconType = 'AntDesign' | 'Entypo' | 'EvilIcons' | 'Feather' | 'FontAwesome' | 'FontAwesome5' | 'FontAwesome5Pro' | 'Fontisto' | 'Foundation' | 'Ionicons' | 'MaterialCommunityIcons' | 'MaterialIcons' | 'Octicons' | 'RNIMigration' | 'SimpleLineIcons' | 'Zocial';

  type AntDesignType = {
    type?: 'AntDesign';
    name?: IconName.AntDesignGlyphs;
  }

  type EntypoType = {
    type?: 'Entypo';
    name?: IconName.EntypoGlyphs;
  }

  type EvilIconsType = {
    type?: 'EvilIcons';
    name?: IconName.EvilIconsGlyphs;
  }

  type FeatherType = {
    type?: 'Feather';
    name?: IconName.FeatherGlyphs;
  }

  type FontAwesomeType = {
    type?: 'FontAwesome';
    name?: IconName.FontAwesomeGlyphs;
  }

  type FontAwesome5Type = {
    type?: 'FontAwesome5';
    name?: IconName.FontAwesome5Glyphs;
  }

  type FontAwesome5ProType = {
    type?: 'FontAwesome5Pro';
    name?: IconName.FontAwesome5ProGlyphs;
  }

  type FontistoProType = {
    type?: 'Fontisto';
    name?: IconName.FontistoGlyphs;
  }

  type FoundationType = {
    type?: 'Foundation';
    name?: IconName.FoundationGlyphs;
  }

  type IoniconsType = {
    type?: 'Ionicons';
    name?: IconName.IoniconsGlyphs;
  }

  type MaterialCommunityIconsType = {
    type?: 'MaterialCommunityIcons';
    name?: IconName.MaterialCommunityIconsGlyphs;
  }

  type MaterialIconsType = {
    type?: 'MaterialIcons';
    name?: IconName.MaterialIconsGlyphs;
  }

  type OcticonsType = {
    type?: 'Octicons';
    name?: IconName.OcticonsGlyphs;
  }

  type SimpleLineIconsType = {
    type?: 'SimpleLineIcons';
    name?: IconName.SimpleLineIconsGlyphs;
  }

  type ZocialType = {
    type?: 'Zocial';
    name?: IconName.ZocialGlyphs;
  }

  type IconTypes = AntDesignType | EntypoType | EvilIconsType | FeatherType | FontAwesomeType | FontAwesome5Type | FontAwesome5ProType | FontistoProType | FoundationType | IoniconsType | MaterialCommunityIconsType | MaterialIconsType | OcticonsType | SimpleLineIconsType | ZocialType;

  interface IconProps {
    size?: number;
    color?: string;
    style?: ViewStyle;
  }

  export type IconPropsType = IconProps & IconTypes;

  export function Icon(props: IconPropsType): JSX.Element;
}