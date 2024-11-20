import * as React from "react";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DesktopNavigationMenu from "../components/DesktopNavigationMenu";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const CognitiveReframingExercise = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView style={styles.cognitiveReframingExercise}>
      <Image
        style={styles.nicePatternForStepsPage}
        contentFit="cover"
        source={require("../assets/nice-pattern-for-steps-page1.png")}
      />
      <Image
        style={styles.mynauinotificationIcon}
        contentFit="cover"
        source={require("../assets/mynauinotification.png")}
      />
      <View style={[styles.ellipseParent, styles.groupChildPosition]}>
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-8.png")}
        />
        <Text style={styles.tipHeading}>T</Text>
      </View>
      <Pressable
        style={[styles.inputField, styles.inputFieldLayout]}
        onPress={() => navigation.navigate("CognitiveReframingLOADING")}
      >
        <View style={[styles.subHeading, styles.talkToMePosition]}>
          <Text style={[styles.talkToMe, styles.inputATypo]}>
            Talk to me about anything
          </Text>
        </View>
      </Pressable>
      <Image
        style={[styles.sendButtonIcon, styles.inputFieldLayout]}
        contentFit="cover"
        source={require("../assets/send-button.png")}
      />
      <Image
        style={styles.naledi31}
        contentFit="cover"
        source={require("../assets/naledi-3-11.png")}
      />
      <View style={[styles.mockLogo, styles.mockLogoPosition]}>
        <Text style={[styles.inputAWorryContainer, styles.mockLogoPosition]}>
          <Text style={styles.inputATypo}>{`Input a `}</Text>
          <Text style={styles.worry}>Worry</Text>
          <Text style={styles.inputATypo}>{` or `}</Text>
          <Text style={styles.worry}>Negative</Text>
          <Text
            style={styles.inputATypo}
          >{` thought and i will provide you with a `}</Text>
          <Text style={styles.worry}>reframed</Text>
          <Text style={styles.inputATypo}> perspective.</Text>
        </Text>
      </View>
      <DesktopNavigationMenu
        nalediLogo={require("../assets/naledi-logo.png")}
        evapersonFill={require("../assets/evapersonfill.png")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: "50%",
    height: 41,
    width: 41,
    position: "absolute",
  },
  inputFieldLayout: {
    overflow: "hidden",
    height: 66,
    borderRadius: Border.br_2xs,
    position: "absolute",
  },
  talkToMePosition: {
    width: 205,
    top: "50%",
    marginTop: -17,
    left: "50%",
    position: "absolute",
  },
  inputATypo: {
    color: Color.pRIMARYFONT,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  mockLogoPosition: {
    width: 297,
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
  },
  tipHeading: {
    marginLeft: -15.5,
    top: 4,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.openSansBold,
    color: Color.bTCWHITE,
    width: 31,
    textAlign: "center",
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  ellipseParent: {
    marginLeft: 596,
    top: 43,
    left: "50%",
  },
  talkToMe: {
    marginLeft: -102.5,
    fontSize: FontSize.size_mini,
    lineHeight: 34,
    textAlign: "center",
    width: 205,
    top: "50%",
    marginTop: -17,
    left: "50%",
    position: "absolute",
  },
  subHeading: {
    marginLeft: -128.5,
    height: 34,
  },
  inputField: {
    top: 844,
    left: 485,
    backgroundColor: Color.white,
    width: 707,
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
  worry: {
    fontFamily: FontFamily.poppinsBold,
    color: Color.bTCDARKGREEN,
    fontWeight: "700",
  },
  inputAWorryContainer: {
    marginLeft: -148.5,
    fontSize: FontSize.size_mid,
    lineHeight: 34,
    textAlign: "center",
    top: 0,
  },
  mockLogo: {
    marginLeft: -48,
    top: 390,
    height: 102,
  },
  cognitiveReframingExercise: {
    backgroundColor: Color.cREAMWHITE,
    flex: 1,
    width: "100%",
    maxWidth: "100%",
  },
});

export default CognitiveReframingExercise;
