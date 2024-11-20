import * as React from "react";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DesktopNavigationMenu from "../components/DesktopNavigationMenu";
import { FontFamily, Border, FontSize, Color, Padding } from "../GlobalStyles";

const NewSessionChat3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView style={styles.newSessionChat}>
      <Image
        style={[styles.mynauinotificationIcon, styles.ellipseParentLayout]}
        contentFit="cover"
        source={require("../assets/mynauinotification.png")}
      />
      <View style={[styles.ellipseParent, styles.tipHeadingPosition]}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/ellipse-8.png")}
        />
        <Text style={[styles.tipHeading, styles.tipHeadingTypo]}>T</Text>
      </View>
      <View style={[styles.chatIcon, styles.iconLayout]}>
        <Image
          style={[styles.logoIconOptionsFrame, styles.containerPosition]}
          contentFit="cover"
          source={require("../assets/logo-icon-options-frame3.png")}
        />
        <Image
          style={styles.naledi31}
          contentFit="cover"
          source={require("../assets/naledi-3-15.png")}
        />
      </View>
      <View style={[styles.mockLogo, styles.mockLogoLayout]}>
        <Text style={[styles.hiImNalediContainer, styles.mockLogoLayout]}>
          <Text style={[styles.hiIm, styles.hiImTypo]}>{`Hi, I\`m `}</Text>
          <Text style={styles.naledi}>
            <Text style={styles.naledi1}>Naledi</Text>
            <Text style={styles.text}>,</Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.hiImTypo}>{` `}</Text>
          </Text>
        </Text>
      </View>
      <View style={[styles.subHeading, styles.subHeadingLayout]}>
        <Text style={[styles.yourAiMentalContainer, styles.subHeadingLayout]}>
          <Text style={styles.text}>{`Your `}</Text>
          <Text style={styles.naledi1}>AI</Text>
          <Text style={styles.text}>{` Mental Health Companion `}</Text>
        </Text>
      </View>
      <Pressable
        style={[styles.inputField, styles.inputFieldLayout]}
        onPress={() => navigation.navigate("NewSessionChat")}
      >
        <View style={[styles.subHeading1, styles.talkToMePosition]}>
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
      <View style={[styles.seeChallengeButton, styles.tipHeadingPosition]}>
        <Text style={[styles.chattingWithNaledi, styles.tipHeadingTypo]}>
          Chatting with Naledi v1
        </Text>
      </View>
      <DesktopNavigationMenu
        nalediLogo={require("../assets/naledi-logo1.png")}
        evapersonFill={require("../assets/evapersonfill1.png")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ellipseParentLayout: {
    height: 41,
    width: 41,
    top: 43,
  },
  tipHeadingPosition: {
    left: "50%",
    position: "absolute",
  },
  tipHeadingTypo: {
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    textAlign: "center",
  },
  iconLayout: {
    height: 246,
    width: 246,
    position: "absolute",
  },
  containerPosition: {
    left: 0,
    top: 0,
  },
  mockLogoLayout: {
    width: 148,
    position: "absolute",
  },
  hiImTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  subHeadingLayout: {
    width: 320,
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
  mynauinotificationIcon: {
    left: 1290,
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
    color: Color.bTCWHITE,
    width: 31,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  ellipseParent: {
    marginLeft: 596,
    height: 41,
    width: 41,
    top: 43,
  },
  logoIconOptionsFrame: {
    height: 246,
    width: 246,
    position: "absolute",
  },
  naledi31: {
    top: 49,
    left: 28,
    width: 176,
    height: 159,
    position: "absolute",
  },
  chatIcon: {
    top: 268,
    left: 732,
  },
  hiIm: {
    color: Color.pRIMARYFONT,
  },
  naledi1: {
    color: Color.bTCDARKGREEN,
  },
  text: {
    color: Color.pRIMARYFONT,
  },
  naledi: {
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
  },
  hiImNalediContainer: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    lineHeight: 34,
    left: 0,
    top: 0,
  },
  mockLogo: {
    top: 530,
    left: 788,
    height: 34,
  },
  yourAiMentalContainer: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    left: 0,
    top: 0,
    textAlign: "center",
  },
  subHeading: {
    top: 564,
    left: 702,
    height: 34,
  },
  talkToMe: {
    marginLeft: -102.5,
    fontSize: FontSize.size_mini,
    color: Color.pRIMARYFONT,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    textAlign: "center",
  },
  subHeading1: {
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
  chattingWithNaledi: {
    fontSize: FontSize.size_smi,
    color: Color.white,
    textAlign: "center",
  },
  seeChallengeButton: {
    marginLeft: -39,
    top: 126,
    borderRadius: Border.br_39xl,
    backgroundColor: Color.bTCDARKGREEN,
    borderStyle: "solid",
    borderColor: Color.bTCDARKGREEN,
    borderWidth: 1,
    width: 261,
    height: 33,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_80xl,
    paddingVertical: Padding.p_3xs,
  },
  newSessionChat: {
    backgroundColor: Color.cREAMWHITE,
    flex: 1,
    width: "100%",
    maxWidth: "100%",
  },
});

export default NewSessionChat3;
