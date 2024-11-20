import * as React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import ChallengePreview from "../components/ChallengePreview";
import DashboardOption from "../components/DashboardOption";
import DashboardOption1 from "../components/DashboardOption1";
import SessionHistoryTab from "../components/SessionHistoryTab";
import DesktopNavigationMenu from "../components/DesktopNavigationMenu";
import { FontFamily, Color, FontSize, Border, Gap } from "../GlobalStyles";

const HomescreenDesktop = () => {
  return (
    <ScrollView style={styles.homescreenDesktop}>
      <ChallengePreview />
      <LinearGradient
        style={styles.homepageTabs}
        locations={[0]}
        colors={["rgba(3, 89, 39, 0.12)"]}
      >
        <Text style={[styles.tipHeading, styles.tipTypo1]}>{`Feature under
Construction`}</Text>
        <Image
          style={styles.lucideconstructionIcon}
          contentFit="cover"
          source={require("../assets/lucideconstruction.png")}
        />
      </LinearGradient>
      <Text style={[styles.tipHeading1, styles.tipTypo]}>Popular Tasks</Text>
      <Text style={[styles.tipHeading2, styles.tipTypo]}>Session History</Text>
      <DashboardOption
        logoIconOptionsFrame={require("../assets/logo-icon-options-frame1.png")}
        tipHeading="Would you like to continue your previous chat ?"
        nicePatternForStepsPage={require("../assets/nice-pattern-for-steps-page5.png")}
      />
      <DashboardOption1 tipHeading="Start a new chat" />
      <DashboardOption1
        dashboardOptionTop={576}
        dashboardOptionBackgroundColor="rgba(255, 255, 255, 0.76)"
        tipHeading="Open Exercises"
      />
      <Image
        style={[styles.mynauinotificationIcon, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/mynauinotification.png")}
      />
      <View style={[styles.ellipseParent, styles.groupChildLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-8.png")}
        />
        <Text style={[styles.tipHeading3, styles.tipTypo1]}>T</Text>
      </View>
      <Text style={styles.seeAll}>See All</Text>
      <View style={styles.sessionHistories}>
        <SessionHistoryTab />
        <SessionHistoryTab />
        <SessionHistoryTab />
      </View>
      <DesktopNavigationMenu
        nalediLogo={require("../assets/naledi-logo3.png")}
        evapersonFill={require("../assets/evapersonfill1.png")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tipTypo1: {
    textAlign: "center",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  tipTypo: {
    width: 194,
    color: Color.pRIMARYFONT,
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_4xl,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  groupChildLayout: {
    height: 41,
    width: 41,
    position: "absolute",
  },
  tipHeading: {
    marginLeft: -180.5,
    top: 191,
    fontSize: FontSize.size_12xl,
    color: "rgba(3, 89, 39, 0.59)",
    width: 362,
  },
  lucideconstructionIcon: {
    top: 103,
    left: 208,
    width: 88,
    height: 88,
    position: "absolute",
  },
  homepageTabs: {
    top: 742,
    left: 909,
    borderRadius: Border.br_sm,
    borderStyle: "solid",
    borderColor: Color.colorSeagreen_100,
    borderWidth: 3,
    width: 503,
    height: 390,
    overflow: "hidden",
    backgroundColor: "transparent",
    position: "absolute",
  },
  tipHeading1: {
    top: 392,
    left: 300,
  },
  tipHeading2: {
    top: 740,
    left: 298,
  },
  mynauinotificationIcon: {
    left: 1290,
    top: 43,
    width: 41,
  },
  groupChild: {
    marginLeft: -20.5,
    top: 0,
    left: "50%",
  },
  tipHeading3: {
    marginLeft: -15.5,
    top: 4,
    fontSize: FontSize.size_5xl,
    color: Color.bTCWHITE,
    width: 31,
  },
  ellipseParent: {
    marginLeft: 596,
    top: 43,
    width: 41,
    left: "50%",
  },
  seeAll: {
    top: 745,
    left: 802,
    fontSize: FontSize.size_lg,
    color: Color.bTCLIGHTGREEN,
    width: 61,
    textAlign: "left",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  sessionHistories: {
    marginLeft: -460,
    top: 799,
    width: 579,
    gap: Gap.gap_lg,
    left: "50%",
    position: "absolute",
  },
  homescreenDesktop: {
    backgroundColor: Color.cREAMWHITE,
    flex: 1,
    width: "100%",
    maxWidth: "100%",
  },
});

export default HomescreenDesktop;
