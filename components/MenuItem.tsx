import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Gap } from "../GlobalStyles";

export type MenuItemType = {
  mingcutehome5Fill?: ImageSourcePropType;
  tipHeading?: string;

  /** Action props */
  onMenuItemPress?: () => void;
};

const MenuItem = ({
  onMenuItemPress,
  mingcutehome5Fill,
  tipHeading,
}: MenuItemType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={[styles.menuItem, styles.menuItemFlexBox]}
      onPress={onMenuItemPress}
    >
      <Image
        style={styles.mingcutehome5FillIcon}
        contentFit="cover"
        source={mingcutehome5Fill}
      />
      <View style={[styles.tipHeadingWrapper, styles.menuItemFlexBox]}>
        <Text style={styles.tipHeading}>{tipHeading}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  menuItemFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  mingcutehome5FillIcon: {
    width: 24,
    height: 24,
  },
  tipHeading: {
    fontSize: FontSize.size_2xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.bTCWHITE,
    textAlign: "center",
  },
  tipHeadingWrapper: {
    height: 19,
    justifyContent: "center",
    padding: Padding.p_3xs,
  },
  menuItem: {
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_22xl,
    paddingVertical: Padding.p_3xs,
    gap: Gap.gap_xs,
  },
});

export default MenuItem;
