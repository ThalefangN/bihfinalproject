import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import DesktopSessionHistoryTab from "../components/DesktopSessionHistoryTab";
import DesktopNavigationMenu from "../components/DesktopNavigationMenu";
import { Color, FontSize, FontFamily, Border, Gap } from "../GlobalStyles";

const ChatHistory = () => {
  return (
    <ScrollView style={styles.chatHistory}>
      <LinearGradient
        style={[styles.homepageTabs, styles.homepageTabsPosition]}
        locations={[0]}
        colors={["rgba(3, 89, 39, 0.12)"]}
      >
        <Image
          style={[styles.naledi31, styles.naledi31Layout]}
          contentFit="cover"
          source={require("../assets/naledi-3-12.png")}
        />
        <Text style={styles.tipHeading}>
          Your thoughts matter. Let’s keep exploring them together.
        </Text>
        <Image
          style={[styles.nicePatternForStepsPage, styles.naledi31Layout]}
          contentFit="cover"
          source={require("../assets/nice-pattern-for-steps-page2.png")}
        />
      </LinearGradient>
      <View style={[styles.dashboardOption, styles.homepageTabsPosition]}>
        <Text style={[styles.tipHeading1, styles.tipClr]}>Chat History</Text>
        <Image
          style={styles.nicePatternForStepsPage1}
          contentFit="cover"
          source={require("../assets/nice-pattern-for-steps-page3.png")}
        />
        <Text
          style={styles.sessionDate}
        >{`Naledi Keeps Your Sessions up to 31 Days `}</Text>
        <Image
          style={[styles.createSessionIcon, styles.homepageTabsPosition]}
          contentFit="cover"
          source={require("../assets/create-session1.png")}
        />
      </View>
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
        <Text style={[styles.tipHeading2, styles.tipClr]}>T</Text>
      </View>
      <View style={styles.sessionHistories}>
        <DesktopSessionHistoryTab />
        <DesktopSessionHistoryTab />
        <DesktopSessionHistoryTab />
        <DesktopSessionHistoryTab />
        <DesktopSessionHistoryTab />
        <DesktopSessionHistoryTab />
      </View>
      <DesktopNavigationMenu
        nalediLogo={require("../assets/naledi-logo1.png")}
        evapersonFill={require("../assets/evapersonfill1.png")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homepageTabsPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  naledi31Layout: {
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  tipClr: {
    color: Color.bTCWHITE,
    position: "absolute",
  },
  groupChildLayout: {
    height: 41,
    width: 41,
    position: "absolute",
  },
  naledi31: {
    height: "52.05%",
    width: "37.57%",
    top: "39.74%",
    right: "1.79%",
    bottom: "8.21%",
    left: "60.64%",
  },
  tipHeading: {
    width: "61.63%",
    top: "18.97%",
    left: "9.54%",
    fontSize: FontSize.size_12xl,
    fontFamily: FontFamily.poppinsBold,
    color: Color.bTCDARKGREEN,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  nicePatternForStepsPage: {
    height: "101.79%",
    width: "94.95%",
    top: "7.95%",
    right: "-2.39%",
    bottom: "-9.74%",
    left: "7.44%",
  },
  homepageTabs: {
    top: 122,
    left: 909,
    borderRadius: Border.br_sm,
    borderStyle: "solid",
    borderColor: Color.colorSeagreen_100,
    borderWidth: 3,
    width: 503,
    height: 390,
    backgroundColor: "transparent",
  },
  tipHeading1: {
    top: 19,
    left: 35,
    fontSize: FontSize.size_4xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    width: 438,
    textAlign: "left",
  },
  nicePatternForStepsPage1: {
    top: -45,
    left: 170,
    width: 336,
    height: 250,
    position: "absolute",
  },
  sessionDate: {
    top: 53,
    left: 38,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSansRegular,
    color: Color.cREAMWHITE,
    width: 278,
    height: 21,
    textAlign: "left",
    position: "absolute",
  },
  createSessionIcon: {
    marginLeft: 139,
    top: 31,
    borderRadius: Border.br_51xl,
    width: 115,
    height: 37,
    left: "50%",
  },
  dashboardOption: {
    top: 121,
    left: 293,
    borderRadius: Border.br_2xl,
    backgroundColor: Color.bTCDARKGREEN,
    width: 582,
    height: 98,
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
  tipHeading2: {
    marginLeft: -15.5,
    top: 4,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.openSansBold,
    textAlign: "center",
    width: 31,
    left: "50%",
    fontWeight: "700",
  },
  ellipseParent: {
    marginLeft: 596,
    top: 43,
    width: 41,
    left: "50%",
  },
  sessionHistories: {
    marginLeft: -460,
    top: 269,
    width: 579,
    gap: Gap.gap_lg,
    left: "50%",
    position: "absolute",
  },
  chatHistory: {
    backgroundColor: Color.cREAMWHITE,
    flex: 1,
    width: "100%",
    maxWidth: "100%",
  },
});

export default ChatHistory;
