import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import DailyCheckUp from "./DailyCheckUp";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const ChallengePreview = () => {
  const [frameContainerVisible, setFrameContainerVisible] = useState(false);

  const openFrameContainer = useCallback(() => {
    setFrameContainerVisible(true);
  }, []);

  const closeFrameContainer = useCallback(() => {
    setFrameContainerVisible(false);
  }, []);

  return (
    <>
      <LinearGradient
        style={[styles.challengePreview, styles.naledi31Position]}
        locations={[0]}
        colors={["rgba(3, 89, 39, 0.12)"]}
      >
        <Image
          style={styles.nicePatternForStepsPage}
          contentFit="cover"
          source={require("../assets/nice-pattern-for-steps-page4.png")}
        />
        <Text style={styles.tipeContent}>
          I hope you are well , it`s a great day isn`t it ?
        </Text>
        <Text style={[styles.tipHeading, styles.tipHeadingTypo]}>
          Hello Tlhalefang
        </Text>
        <Pressable
          style={[styles.seeChallengeButtonWrapper, styles.seeLayout]}
          onPress={openFrameContainer}
        >
          <View style={[styles.seeChallengeButton, styles.seeLayout]}>
            <Text style={[styles.takeDailyCheck, styles.tipHeadingTypo]}>
              Take Daily Check Up
            </Text>
          </View>
        </Pressable>
        <Image
          style={[styles.naledi31, styles.naledi31Position]}
          contentFit="cover"
          source={require("../assets/naledi-3-14.png")}
        />
      </LinearGradient>

      <Modal animationType="fade" transparent visible={frameContainerVisible}>
        <View style={styles.frameContainerOverlay}>
          <Pressable
            style={styles.frameContainerBg}
            onPress={closeFrameContainer}
          />
          <DailyCheckUp onClose={closeFrameContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  naledi31Position: {
    overflow: "hidden",
    position: "absolute",
  },
  tipHeadingTypo: {
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    textAlign: "center",
  },
  seeLayout: {
    height: 33,
    width: 153,
    position: "absolute",
  },
  nicePatternForStepsPage: {
    top: 31,
    left: 37,
    width: 1037,
    height: 257,
    position: "absolute",
  },
  tipeContent: {
    marginLeft: -189.5,
    top: 98,
    fontSize: FontSize.size_mid,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    width: 389,
    height: 34,
    textAlign: "center",
    color: Color.bTCDARKGREEN,
    left: "50%",
    position: "absolute",
  },
  tipHeading: {
    marginLeft: -213.5,
    top: 30,
    fontSize: FontSize.size_19xl,
    width: 434,
    color: Color.bTCDARKGREEN,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  frameContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  takeDailyCheck: {
    fontSize: FontSize.size_smi,
    color: Color.white,
    width: 144,
  },
  seeChallengeButton: {
    marginLeft: -76.5,
    top: 0,
    borderRadius: Border.br_39xl,
    backgroundColor: Color.bTCDARKGREEN,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_80xl,
    paddingVertical: Padding.p_3xs,
    left: "50%",
    width: 153,
  },
  seeChallengeButtonWrapper: {
    top: 151,
    left: 463,
  },
  naledi31: {
    height: "87.88%",
    width: "14.83%",
    top: "25.97%",
    right: "12.79%",
    bottom: "-13.85%",
    left: "72.39%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  challengePreview: {
    top: 131,
    left: 293,
    borderRadius: Border.br_sm,
    borderStyle: "solid",
    borderColor: Color.colorSeagreen_100,
    borderWidth: 3,
    width: 1119,
    height: 231,
    backgroundColor: "transparent",
  },
});

export default ChallengePreview;
