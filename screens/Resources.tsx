import * as React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import DashboardOption from "../components/DashboardOption";
import Exercise from "../components/Exercise";
import Exercise1 from "../components/Exercise1";
import DesktopNavigationMenu from "../components/DesktopNavigationMenu";
import { Color, FontFamily, FontSize, Border, Gap } from "../GlobalStyles";

const Resources = () => {
  return (
    <ScrollView style={styles.resources}>
      <Text style={[styles.tipHeading, styles.tipTypo]}>Resources Center</Text>
      <Text style={[styles.tipHeading1, styles.tipTypo]}>
        Available Exercises
      </Text>
      <DashboardOption
        dashboardOptionTop={181}
        logoIconOptionsFrame={require("../assets/logo-icon-options-frame2.png")}
        tipHeading={`We put an option here for something
that falls under resources`}
        nicePatternForStepsPage={require("../assets/nice-pattern-for-steps-page7.png")}
      />
      <View style={[styles.dashboardOption, styles.dashboardLayout]}>
        <Image
          style={styles.nicePatternForStepsPage}
          contentFit="cover"
          source={require("../assets/nice-pattern-for-steps-page8.png")}
        />
        <Text
          style={[styles.tipHeading2, styles.tipHeading2Typo]}
        >{`Connections & Crisis Support`}</Text>
        <Image
          style={[styles.rightArrowIcon, styles.rightIconLayout]}
          contentFit="cover"
          source={require("../assets/right-arrow1.png")}
        />
        <Image
          style={[styles.crisisSupportIcon, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/crisis-support-icon.png")}
        />
      </View>
      <View style={[styles.dashboardOption1, styles.dashboardLayout]}>
        <Image
          style={styles.nicePatternForStepsPage}
          contentFit="cover"
          source={require("../assets/nice-pattern-for-steps-page8.png")}
        />
        <Text style={[styles.tipHeading3, styles.tipFlexBox]}>
          <Text
            style={[styles.youHaveDone, styles.tipHeading2Typo]}
          >{`You have done `}</Text>
          <Text style={styles.text}>13</Text>
          <Text style={[styles.youHaveDone, styles.tipHeading2Typo]}>
            {" "}
            mental exercise sessions this weeek
          </Text>
        </Text>
        <Image
          style={[styles.rightArrowIcon1, styles.rightIconLayout]}
          contentFit="cover"
          source={require("../assets/right-arrow1.png")}
        />
        <Image
          style={styles.mentalExerciseIcon}
          contentFit="cover"
          source={require("../assets/mental-exercise-icon.png")}
        />
      </View>
      <Image
        style={[styles.mynauinotificationIcon, styles.ellipseParentLayout]}
        contentFit="cover"
        source={require("../assets/mynauinotification.png")}
      />
      <View style={[styles.ellipseParent, styles.groupChildPosition]}>
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-8.png")}
        />
        <Text style={[styles.tipHeading4, styles.groupChildPosition]}>T</Text>
      </View>
      <View style={styles.exerciseParent}>
        <Exercise />
        <Exercise1 />
      </View>
      <DesktopNavigationMenu
        nalediLogo={require("../assets/naledi-logo1.png")}
        evapersonFill={require("../assets/evapersonfill1.png")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tipTypo: {
    width: 274,
    color: Color.pRIMARYFONT,
    fontFamily: FontFamily.poppinsBold,
    left: 300,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_4xl,
    position: "absolute",
  },
  dashboardLayout: {
    overflow: "hidden",
    height: 117,
    width: 503,
    borderRadius: Border.br_2xl,
    left: 909,
    position: "absolute",
  },
  tipHeading2Typo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  rightIconLayout: {
    height: 42,
    width: 42,
    top: 42,
    position: "absolute",
  },
  groupChildLayout: {
    height: 41,
    width: 41,
  },
  tipFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  ellipseParentLayout: {
    top: 43,
    height: 41,
    width: 41,
  },
  groupChildPosition: {
    left: "50%",
    position: "absolute",
  },
  tipHeading: {
    top: 122,
  },
  tipHeading1: {
    top: 449,
  },
  nicePatternForStepsPage: {
    top: -185,
    left: 25,
    width: 451,
    height: 517,
    position: "absolute",
  },
  tipHeading2: {
    top: 62,
    left: 16,
    width: 346,
    textAlign: "left",
    position: "absolute",
    fontSize: FontSize.size_4xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  rightArrowIcon: {
    left: 442,
  },
  crisisSupportIcon: {
    top: 21,
    left: 18,
    height: 41,
    position: "absolute",
  },
  dashboardOption: {
    top: 179,
    backgroundColor: Color.colorLightgreen,
  },
  youHaveDone: {
    fontSize: FontSize.size_smi,
  },
  text: {
    fontSize: FontSize.size_mini,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    color: Color.bTCDARKGREEN,
  },
  tipHeading3: {
    top: 60,
    left: 26,
    width: 339,
  },
  rightArrowIcon1: {
    left: 432,
  },
  mentalExerciseIcon: {
    top: 19,
    height: 53,
    width: 41,
    left: 18,
    position: "absolute",
  },
  dashboardOption1: {
    top: 306,
    backgroundColor: Color.white,
  },
  mynauinotificationIcon: {
    left: 1290,
    position: "absolute",
  },
  groupChild: {
    marginLeft: -20.5,
    top: 0,
    height: 41,
    width: 41,
  },
  tipHeading4: {
    marginLeft: -15.5,
    top: 4,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.openSansBold,
    color: Color.bTCWHITE,
    textAlign: "center",
    width: 31,
    fontWeight: "700",
    left: "50%",
  },
  ellipseParent: {
    marginLeft: 596,
    top: 43,
    height: 41,
    width: 41,
  },
  exerciseParent: {
    top: 514,
    left: 298,
    width: 1114,
    flexDirection: "row",
    gap: Gap.gap_lg,
    position: "absolute",
  },
  resources: {
    backgroundColor: Color.cREAMWHITE,
    flex: 1,
    width: "100%",
    maxWidth: "100%",
  },
});

export default Resources;
