import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const DesktopSessionHistoryTab = () => {
  return (
    <View style={styles.desktopSessionHistoryTab}>
      <Text style={[styles.sessionDate, styles.sessionFlexBox]}>
        January 7 2023
      </Text>
      <Text style={[styles.sessionHeading, styles.sessionFlexBox]}>
        My troubles at School
      </Text>
      <Image
        style={styles.chatIcon}
        contentFit="cover"
        source={require("../assets/chat-icon.png")}
      />
      <Image
        style={styles.rightArrowIcon}
        contentFit="cover"
        source={require("../assets/right-arrow.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sessionFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  sessionDate: {
    top: 48,
    left: 98,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSansRegular,
    color: Color.pRIMARYFONT,
    width: 101,
    height: 21,
  },
  sessionHeading: {
    top: 24,
    left: 96,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    color: Color.colorBlack,
    width: 182,
  },
  chatIcon: {
    top: 27,
    left: 16,
    width: 38,
    height: 38,
    position: "absolute",
  },
  rightArrowIcon: {
    top: 36,
    left: 517,
    width: 24,
    height: 24,
    position: "absolute",
  },
  desktopSessionHistoryTab: {
    alignSelf: "stretch",
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    height: 89,
  },
});

export default DesktopSessionHistoryTab;
