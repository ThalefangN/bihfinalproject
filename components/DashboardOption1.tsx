import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

export type DashboardOption1Type = {
  tipHeading?: string;

  /** Style props */
  dashboardOptionTop?: number | string;
  dashboardOptionBackgroundColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DashboardOption1 = ({
  dashboardOptionTop,
  dashboardOptionBackgroundColor,
  tipHeading,
}: DashboardOption1Type) => {
  const dashboardOption1Style = useMemo(() => {
    return {
      ...getStyleValue("top", dashboardOptionTop),
      ...getStyleValue("backgroundColor", dashboardOptionBackgroundColor),
    };
  }, [dashboardOptionTop, dashboardOptionBackgroundColor]);

  return (
    <View style={[styles.dashboardOption, dashboardOption1Style]}>
      <Image
        style={styles.nicePatternForStepsPage}
        contentFit="cover"
        source={require("../assets/nice-pattern-for-steps-page6.png")}
      />
      <Text style={styles.tipHeading}>{tipHeading}</Text>
      <Image
        style={[styles.rightArrowIcon, styles.rightArrowIconLayout]}
        contentFit="cover"
        source={require("../assets/right-arrow1.png")}
      />
      <Image
        style={[styles.dashboardOptionChild, styles.rightArrowIconLayout]}
        contentFit="cover"
        source={require("../assets/group-17.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rightArrowIconLayout: {
    height: 42,
    width: 42,
    position: "absolute",
  },
  nicePatternForStepsPage: {
    top: -185,
    left: 25,
    width: 451,
    height: 517,
    position: "absolute",
  },
  tipHeading: {
    top: 62,
    left: 16,
    fontSize: FontSize.size_4xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
    width: 215,
    position: "absolute",
  },
  rightArrowIcon: {
    top: 42,
    left: 362,
  },
  dashboardOptionChild: {
    top: 21,
    left: 11,
  },
  dashboardOption: {
    top: 449,
    left: 909,
    borderRadius: Border.br_2xl,
    backgroundColor: Color.colorLightgreen,
    width: 503,
    height: 117,
    overflow: "hidden",
    position: "absolute",
  },
});

export default DashboardOption1;
