import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import DesktopNavigationMenu from "../components/DesktopNavigationMenu";
import { FontFamily, Border, FontSize, Color, Padding } from "../GlobalStyles";

const NewSessionChat = () => {
  return (
    <ScrollView style={styles.newSessionChat}>
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
        <Text style={[styles.tipHeading, styles.tipHeadingTypo]}>T</Text>
      </View>
      <View style={[styles.inputField, styles.inputLayout]}>
        <View style={styles.subHeading}>
          <Text style={styles.talkToMe}>Talk to me about anything</Text>
        </View>
      </View>
      <Image
        style={[styles.sendButtonIcon, styles.inputLayout]}
        contentFit="cover"
        source={require("../assets/send-button1.png")}
      />
      <View style={[styles.outwardMessage, styles.outwardLayout]}>
        <View style={[styles.inputField1, styles.inputLayout]}>
          <View style={[styles.subHeading1, styles.iAmFeelingPosition]}>
            <Text style={[styles.iAmFeeling, styles.iAmFeelingTypo]}>
              I am feeling very sad today
            </Text>
          </View>
        </View>
        <View style={[styles.subHeading2, styles.subLayout]}>
          <Text style={[styles.am, styles.amTypo]}>10:32 AM</Text>
        </View>
      </View>
      <View style={[styles.outwardMessage1, styles.outwardLayout]}>
        <View style={[styles.inputField2, styles.inputLayout]}>
          <View style={[styles.subHeading3, styles.subHeading3Position]}>
            <Text style={[styles.aFriendSpoke, styles.subHeading3Position]}>
              A friend spoke to me in a rude manner
            </Text>
          </View>
        </View>
        <View style={[styles.subHeading4, styles.subLayout]}>
          <Text style={[styles.am, styles.amTypo]}>10:32 AM</Text>
        </View>
      </View>
      <View style={styles.outwardMessage2}>
        <View style={[styles.inputField3, styles.inputField3Bg]}>
          <View style={[styles.subHeading5, styles.iAmSorryPosition]}>
            <Text style={[styles.iAmSorry, styles.iAmSorryPosition]}>
              I am sorry to hear that, is there anything in particular that
              could be causing you to feel in such a way?
            </Text>
          </View>
        </View>
        <View style={[styles.subHeading6, styles.am2Layout]}>
          <Text style={[styles.am2, styles.am2Layout]}>10:32 AM</Text>
        </View>
      </View>
      <View style={[styles.chatIcon, styles.iconLayout]}>
        <Image
          style={[styles.logoIconOptionsFrame, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/logo-icon-options-frame.png")}
        />
        <Image
          style={styles.naledi31}
          contentFit="cover"
          source={require("../assets/naledi-3-13.png")}
        />
      </View>
      <Image
        style={styles.newSessionChatChild}
        contentFit="cover"
        source={require("../assets/frame-117.png")}
      />
      <View style={[styles.seeChallengeButton, styles.inputField3Bg]}>
        <Text style={[styles.chattingWithNaledi, styles.tipHeadingTypo]}>
          Chatting with Naledi v1
        </Text>
      </View>
      <DesktopNavigationMenu
        nalediLogo={require("../assets/naledi-logo2.png")}
        evapersonFill={require("../assets/evapersonfill2.png")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 41,
    width: 41,
    position: "absolute",
  },
  tipHeadingTypo: {
    textAlign: "center",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  inputLayout: {
    height: 66,
    overflow: "hidden",
    borderRadius: Border.br_2xs,
    position: "absolute",
  },
  outwardLayout: {
    height: 91,
    position: "absolute",
  },
  iAmFeelingPosition: {
    width: 227,
    top: "50%",
    marginTop: -17,
    left: "50%",
    position: "absolute",
  },
  iAmFeelingTypo: {
    textAlign: "right",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    color: Color.pRIMARYFONT,
  },
  subLayout: {
    height: 25,
    width: 73,
    position: "absolute",
  },
  amTypo: {
    fontSize: FontSize.size_xs,
    color: Color.pRIMARYFONT,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    textAlign: "center",
    top: 0,
  },
  subHeading3Position: {
    width: 304,
    top: "50%",
    marginTop: -17,
    left: "50%",
    position: "absolute",
  },
  inputField3Bg: {
    backgroundColor: Color.bTCDARKGREEN,
    position: "absolute",
  },
  iAmSorryPosition: {
    width: 298,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  am2Layout: {
    width: 62,
    height: 25,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 52,
    width: 52,
    position: "absolute",
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
  tipHeading: {
    marginLeft: -15.5,
    top: 4,
    fontSize: FontSize.size_5xl,
    width: 31,
    color: Color.bTCWHITE,
    textAlign: "center",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  ellipseParent: {
    marginLeft: 596,
    left: "50%",
    top: 43,
    width: 41,
  },
  talkToMe: {
    marginLeft: -102.5,
    fontSize: FontSize.size_mini,
    color: Color.pRIMARYFONT,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    width: 205,
    top: "50%",
    marginTop: -17,
    textAlign: "center",
    left: "50%",
    position: "absolute",
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
    overflow: "hidden",
    backgroundColor: Color.white,
    height: 66,
  },
  sendButtonIcon: {
    top: 843,
    left: 1229,
    width: 72,
    overflow: "hidden",
  },
  iAmFeeling: {
    marginLeft: -113.5,
    width: 227,
    top: "50%",
    marginTop: -17,
    left: "50%",
    position: "absolute",
    lineHeight: 34,
    textAlign: "right",
  },
  subHeading1: {
    marginLeft: -105,
    height: 34,
  },
  inputField1: {
    width: 270,
    left: 0,
    overflow: "hidden",
    backgroundColor: Color.white,
    height: 66,
    top: 0,
  },
  am: {
    height: 25,
    width: 73,
    position: "absolute",
    left: 0,
  },
  subHeading2: {
    left: 202,
    top: 66,
    width: 73,
  },
  outwardMessage: {
    top: 206,
    left: 1035,
    width: 275,
  },
  aFriendSpoke: {
    marginLeft: -152,
    lineHeight: 17,
    textAlign: "right",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    color: Color.pRIMARYFONT,
  },
  subHeading3: {
    marginLeft: -151.5,
    height: 34,
  },
  inputField2: {
    width: 357,
    left: 0,
    overflow: "hidden",
    backgroundColor: Color.white,
    height: 66,
    top: 0,
  },
  subHeading4: {
    left: 289,
    top: 66,
    width: 73,
  },
  outwardMessage1: {
    top: 476,
    left: 943,
    width: 362,
  },
  iAmSorry: {
    marginTop: -36,
    marginLeft: -149,
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    width: 298,
    color: Color.bTCWHITE,
  },
  subHeading5: {
    marginTop: -40,
    marginLeft: -135,
    height: 72,
  },
  inputField3: {
    left: 2,
    width: 358,
    height: 92,
    overflow: "hidden",
    borderRadius: Border.br_2xs,
    backgroundColor: Color.bTCDARKGREEN,
    top: 0,
  },
  am2: {
    fontSize: FontSize.size_xs,
    color: Color.pRIMARYFONT,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    textAlign: "center",
    top: 0,
  },
  subHeading6: {
    top: 92,
  },
  outwardMessage2: {
    left: 623,
    width: 360,
    height: 117,
    top: 336,
    position: "absolute",
  },
  logoIconOptionsFrame: {
    left: 0,
    top: 0,
  },
  naledi31: {
    top: 10,
    left: 6,
    width: 37,
    height: 34,
    position: "absolute",
  },
  chatIcon: {
    left: 542,
    top: 336,
  },
  newSessionChatChild: {
    top: 573,
    left: 773,
    borderRadius: 9,
    width: 66,
    height: 20,
    overflow: "hidden",
    position: "absolute",
  },
  chattingWithNaledi: {
    fontSize: FontSize.size_smi,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
  },
  seeChallengeButton: {
    marginLeft: -39,
    top: 126,
    borderRadius: Border.br_39xl,
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
    left: "50%",
  },
  newSessionChat: {
    backgroundColor: Color.cREAMWHITE,
    flex: 1,
    width: "100%",
    maxWidth: "100%",
  },
});

export default NewSessionChat;
