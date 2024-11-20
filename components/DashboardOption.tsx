import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type DashboardOptionType = {
  logoIconOptionsFrame?: ImageSourcePropType;
  tipHeading?: string;
  nicePatternForStepsPage?: ImageSourcePropType;

  /** Style props */
  dashboardOptionTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DashboardOption = ({
  dashboardOptionTop,
  logoIconOptionsFrame,
  tipHeading,
  nicePatternForStepsPage,
}: DashboardOptionType) => {
  const dashboardOptionStyle = useMemo(() => {
    return {
      ...getStyleValue("top", dashboardOptionTop),
    };
  }, [dashboardOptionTop]);

  return (
    <View style={[styles.dashboardOption, dashboardOptionStyle]}>
      <Image
        style={styles.logoIconOptionsFrame}
        contentFit="cover"
        source={logoIconOptionsFrame}
      />
      <Text style={styles.tipHeading}>{tipHeading}</Text>
      <View style={styles.seeChallengeButton}>
        <Text style={styles.continueChat}>Continue Chat</Text>
      </View>
      <Image
        style={styles.nicePatternForStepsPage}
        contentFit="cover"
        source={nicePatternForStepsPage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoIconOptionsFrame: {
    top: 26,
    left: 29,
    width: 47,
    height: 47,
    position: "absolute",
  },
  tipHeading: {
    top: 79,
    left: 35,
    fontSize: FontSize.size_4xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.bTCWHITE,
    textAlign: "left",
    width: 438,
    position: "absolute",
  },
  continueChat: {
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    color: Color.bTCDARKGREEN,
    textAlign: "center",
    width: 144,
  },
  seeChallengeButton: {
    marginLeft: -257,
    top: 170,
    left: "50%",
    borderRadius: Border.br_39xl,
    backgroundColor: Color.cREAMWHITE,
    width: 153,
    height: 33,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_80xl,
    paddingVertical: Padding.p_3xs,
    position: "absolute",
  },
  nicePatternForStepsPage: {
    top: -265,
    left: -133,
    width: 692,
    height: 728,
    position: "absolute",
  },
  dashboardOption: {
    top: 451,
    left: 293,
    borderRadius: Border.br_2xl,
    backgroundColor: Color.bTCDARKGREEN,
    width: 582,
    height: 240,
    overflow: "hidden",
    position: "absolute",
  },
});

export default DashboardOption;
