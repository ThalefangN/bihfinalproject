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
import MenuItem from "./MenuItem";
import {
  FontSize,
  FontFamily,
  Color,
  Padding,
  Gap,
  Border,
} from "../GlobalStyles";

export type DesktopNavigationMenuType = {
  nalediLogo?: ImageSourcePropType;
  evapersonFill?: ImageSourcePropType;
};

const DesktopNavigationMenu = ({
  nalediLogo,
  evapersonFill,
}: DesktopNavigationMenuType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.desktopNavigationMenu, styles.menuPosition]}>
      <Image
        style={[styles.nalediLogoIcon, styles.createSessionPosition]}
        contentFit="cover"
        source={nalediLogo}
      />
      <View style={[styles.sidebarMenuOptions, styles.menuPosition]}>
        <MenuItem
          onMenuItemPress={() => navigation.navigate("HomescreenDesktop")}
          mingcutehome5Fill={require("../assets/mingcutehome5fill.png")}
          tipHeading="Dashboard"
        />
        <MenuItem
          onMenuItemPress={() => navigation.navigate("ChatHistory")}
          mingcutehome5Fill={require("../assets/tablerclockfilled.png")}
          tipHeading="Past Sessions "
        />
        <MenuItem
          onMenuItemPress={() => navigation.navigate("Resources")}
          mingcutehome5Fill={require("../assets/resource-center-icon.png")}
          tipHeading="Resources"
        />
        <View style={[styles.menuItem, styles.menuItemFlexBox]}>
          <Image
            style={styles.evapersonFillIcon}
            contentFit="cover"
            source={evapersonFill}
          />
          <View style={[styles.tipHeadingWrapper, styles.menuItemFlexBox]}>
            <Text style={styles.tipHeading}>Your Profile</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.createSession, styles.createSessionPosition]}
        onPress={() => navigation.navigate("NewSessionChat2")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/create-session.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  menuPosition: {
    left: 0,
    position: "absolute",
  },
  createSessionPosition: {
    left: "50%",
    position: "absolute",
  },
  menuItemFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  nalediLogoIcon: {
    marginLeft: -84,
    top: 50,
    width: 168,
    height: 43,
    overflow: "hidden",
  },
  evapersonFillIcon: {
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
  sidebarMenuOptions: {
    top: 324,
    width: 247,
    gap: Gap.gap_md,
  },
  icon: {
    marginLeft: -74,
    borderRadius: Border.br_51xl,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  createSession: {
    top: 127,
    width: 148,
    height: 37,
  },
  desktopNavigationMenu: {
    top: 0,
    backgroundColor: Color.bTCDARKGREEN,
    width: 248,
    height: 982,
    overflow: "hidden",
  },
});

export default DesktopNavigationMenu;
