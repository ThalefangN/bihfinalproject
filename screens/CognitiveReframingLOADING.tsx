import * as React from "react";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Component from "../components/Component";
import DesktopNavigationMenu from "../components/DesktopNavigationMenu";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const CognitiveReframingLOADING = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView style={styles.cognitiveReframingLoading}>
      <Image
        style={styles.nicePatternForStepsPage}
        contentFit="cover"
        source={require("../assets/nice-pattern-for-steps-page11.png")}
      />
      <Image
        style={styles.mynauinotificationIcon}
        contentFit="cover"
        source={require("../assets/mynauinotification.png")}
      />
      <View style={styles.ellipseParent}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/ellipse-8.png")}
        />
        <Text style={styles.tipHeading}>T</Text>
      </View>
      <Pressable
        style={[styles.inputField, styles.inputFieldLayout]}
        onPress={() => navigation.navigate("CognitiveReframingDone")}
      >
        <View style={styles.subHeading}>
          <Text style={[styles.talkToMe, styles.talkToMePosition]}>
            Talk to me about anything
          </Text>
        </View>
      </Pressable>
      <Image
        style={[styles.sendButtonIcon, styles.inputFieldLayout]}
        contentFit="cover"
        source={require("../assets/send-button1.png")}
      />
      <Image
        style={styles.naledi31}
        contentFit="cover"
        source={require("../assets/naledi-3-11.png")}
      />
      <View style={[styles.mockLogo, styles.mockLayout]}>
        <View
          style={[
            styles.usersInputShouldAppearHerWrapper,
            styles.mockLogoChildPosition,
          ]}
        >
          <Text
            style={[styles.usersInputShould, styles.talkToMePosition]}
          >{`User\`s Input Should Appear here after being entered. There should a be a word limit so that the fit inside this container `}</Text>
        </View>
      </View>
      <View style={[styles.mockLogo1, styles.mockLogo1Position]}>
        <Text style={[styles.yourThought, styles.reframingTypo]}>
          Your Thought
        </Text>
      </View>
      <View style={[styles.mockLogo2, styles.mockLogo2Position]}>
        <Text style={[styles.reframing, styles.mockLogo2Position]}>
          Reframing..
        </Text>
      </View>
      <View style={[styles.mockLogo3, styles.mockLayout]}>
        <View style={[styles.mockLogoChild, styles.mockLogoChildPosition]} />
        <Component property1="Loading Icon 1" />
      </View>
      <DesktopNavigationMenu
        nalediLogo={require("../assets/naledi-logo4.png")}
        evapersonFill={require("../assets/evapersonfill.png")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputFieldLayout: {
    overflow: "hidden",
    height: 66,
    borderRadius: Border.br_2xs,
    position: "absolute",
  },
  talkToMePosition: {
    color: Color.pRIMARYFONT,
    lineHeight: 34,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  mockLayout: {
    height: 123,
    width: 391,
    left: 678,
    position: "absolute",
  },
  mockLogoChildPosition: {
    left: 0,
    height: 123,
    width: 391,
    borderRadius: Border.br_2xs,
    top: 0,
    position: "absolute",
  },
  mockLogo1Position: {
    width: 142,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  reframingTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xl,
    color: Color.pRIMARYFONT,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    marginTop: -17,
  },
  mockLogo2Position: {
    width: 125,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  nicePatternForStepsPage: {
    top: 93,
    left: 399,
    width: 974,
    height: 947,
    position: "absolute",
  },
  mynauinotificationIcon: {
    left: 1290,
    height: 41,
    width: 41,
    top: 43,
    position: "absolute",
  },
  groupChild: {
    marginLeft: -20.5,
    top: 0,
    left: "50%",
    height: 41,
    width: 41,
    position: "absolute",
  },
  tipHeading: {
    marginLeft: -15.5,
    top: 4,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    color: Color.bTCWHITE,
    width: 31,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  ellipseParent: {
    marginLeft: 596,
    left: "50%",
    height: 41,
    width: 41,
    top: 43,
    position: "absolute",
  },
  talkToMe: {
    marginLeft: -102.5,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.pRIMARYFONT,
    lineHeight: 34,
    width: 205,
    top: "50%",
    marginTop: -17,
  },
  subHeading: {
    marginLeft: -128.5,
    height: 34,
    width: 205,
    top: "50%",
    marginTop: -17,
    left: "50%",
    position: "absolute",
  },
  inputField: {
    top: 844,
    left: 485,
    width: 707,
    backgroundColor: Color.white,
  },
  sendButtonIcon: {
    top: 843,
    left: 1229,
    width: 72,
  },
  naledi31: {
    top: 173,
    left: 757,
    width: 196,
    height: 177,
    position: "absolute",
  },
  usersInputShould: {
    marginLeft: -164.5,
    top: 11,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    width: 330,
    height: 91,
    color: Color.pRIMARYFONT,
    lineHeight: 34,
  },
  usersInputShouldAppearHerWrapper: {
    borderStyle: "solid",
    borderColor: Color.bTCDARKGREEN,
    borderWidth: 3,
    backgroundColor: Color.white,
  },
  mockLogo: {
    top: 429,
  },
  yourThought: {
    marginLeft: -71,
    width: 142,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  mockLogo1: {
    marginTop: -106,
    marginLeft: 42,
    height: 34,
  },
  reframing: {
    marginLeft: -62.5,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    color: Color.pRIMARYFONT,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    marginTop: -17,
  },
  mockLogo2: {
    marginTop: 72,
    marginLeft: 63,
    height: 34,
  },
  mockLogoChild: {
    backgroundColor: Color.bTCDARKGREEN,
  },
  mockLogo3: {
    top: 608,
  },
  cognitiveReframingLoading: {
    backgroundColor: Color.cREAMWHITE,
    flex: 1,
    width: "100%",
    maxWidth: "100%",
  },
});

export default CognitiveReframingLOADING;
