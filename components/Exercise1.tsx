import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Exercise1 = () => {
  return (
    <View style={[styles.exercise, styles.exerciseBorder]}>
      <Text
        style={[styles.tipHeading, styles.tipPosition]}
      >{`Daily Affirmations `}</Text>
      <Text style={[styles.tipHeading1, styles.tipPosition]}>
        Description of a mental exercise will be showned
      </Text>
      <View style={[styles.seeChallengeButton, styles.exerciseBorder]}>
        <Text style={styles.play}>Play</Text>
      </View>
      <Image
        style={styles.nicePatternForStepsPage}
        contentFit="cover"
        source={require("../assets/nice-pattern-for-steps-page10.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  exerciseBorder: {
    borderColor: Color.bTCDARKGREEN,
    borderStyle: "solid",
  },
  tipPosition: {
    textAlign: "left",
    color: Color.bTCDARKGREEN,
    left: 28,
    position: "absolute",
  },
  tipHeading: {
    top: 67,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.poppinsBold,
    width: 274,
    fontWeight: "700",
  },
  tipHeading1: {
    top: 102,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    width: 325,
  },
  play: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.openSansBold,
    color: Color.white,
    textAlign: "center",
    width: 88,
    fontWeight: "700",
  },
  seeChallengeButton: {
    marginLeft: 150.75,
    top: 18,
    left: "50%",
    borderRadius: Border.br_39xl,
    backgroundColor: Color.bTCDARKGREEN,
    borderWidth: 1,
    width: 106,
    height: 33,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_80xl,
    paddingVertical: Padding.p_3xs,
    position: "absolute",
  },
  nicePatternForStepsPage: {
    top: -93,
    left: 33,
    width: 435,
    height: 333,
    position: "absolute",
  },
  exercise: {
    flex: 1,
    borderRadius: Border.br_2xl,
    borderWidth: 3,
    height: 197,
    overflow: "hidden",
  },
});

export default Exercise1;
