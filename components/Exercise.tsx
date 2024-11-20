import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Exercise = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.exercise, styles.exerciseBorder]}>
      <Text
        style={[styles.tipHeading, styles.tipPosition]}
      >{`Cognitive Reframing `}</Text>
      <Text style={[styles.tipHeading1, styles.tipPosition]}>
        <Text
          style={styles.inputAWorry}
        >{`Input a worry or negative thought, and `}</Text>
        <Text style={styles.nalediTypo}>Naledi</Text>
        <Text style={styles.inputAWorry}>
          {" "}
          will suggest reframed perspectives.
        </Text>
      </Text>
      <Pressable
        style={[styles.playButton, styles.playLayout]}
        onPress={() => navigation.navigate("CognitiveReframingExercise")}
      >
        <View style={[styles.playExercise, styles.playLayout]}>
          <Text style={styles.play}>Play</Text>
        </View>
      </Pressable>
      <Image
        style={styles.nicePatternForStepsPage}
        contentFit="cover"
        source={require("../assets/nice-pattern-for-steps-page9.png")}
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
  playLayout: {
    height: 33,
    width: 106,
    position: "absolute",
  },
  tipHeading: {
    top: 67,
    fontSize: FontSize.size_4xl,
    width: 249,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  inputAWorry: {
    fontFamily: FontFamily.poppinsRegular,
  },
  nalediTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  tipHeading1: {
    top: 102,
    fontSize: FontSize.size_xs,
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
  playExercise: {
    marginLeft: -53,
    top: 0,
    left: "50%",
    borderRadius: Border.br_39xl,
    backgroundColor: Color.bTCDARKGREEN,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_80xl,
    paddingVertical: Padding.p_3xs,
    borderColor: Color.bTCDARKGREEN,
    borderStyle: "solid",
  },
  playButton: {
    top: 18,
    left: 422,
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

export default Exercise;
