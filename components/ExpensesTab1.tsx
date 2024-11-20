import * as React from "react";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ExpensesTab1 = () => {
  return (
    <View style={styles.expensesTab}>
      <View style={styles.liftingIcon} />
      <Text style={styles.p400OutOf}>P400 out of P800</Text>
      <Text style={[styles.food, styles.foodTypo]}>{`Food `}</Text>
      <Text
        style={[styles.youHaveUsed, styles.foodTypo]}
      >{`You have used `}</Text>
      <Image
        style={styles.expensesTabChild}
        contentFit="cover"
        source={require("../assets/group-16.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  foodTypo: {
    color: Color.pRIMARYFONT,
    fontFamily: FontFamily.openSansBold,
    left: 21,
    textAlign: "center",
    fontWeight: "700",
    lineHeight: 24,
    position: "absolute",
  },
  liftingIcon: {
    left: 36,
    width: 30,
    height: 30,
    overflow: "hidden",
    top: 73,
    position: "absolute",
  },
  p400OutOf: {
    left: 23,
    fontSize: FontSize.size_mini,
    fontStyle: "italic",
    fontFamily: FontFamily.openSansBoldItalic,
    color: Color.mountainMeadow,
    width: 118,
    textAlign: "center",
    fontWeight: "700",
    lineHeight: 24,
    top: 73,
    position: "absolute",
  },
  food: {
    top: 20,
    fontSize: FontSize.size_lg,
    width: 49,
  },
  youHaveUsed: {
    top: 50,
    fontSize: FontSize.size_xs,
    width: 91,
  },
  expensesTabChild: {
    top: 13,
    left: 146,
    width: 34,
    height: 35,
    position: "absolute",
  },
  expensesTab: {
    borderRadius: Border.br_base,
    backgroundColor: Color.colorSilver,
    flex: 1,
    width: "100%",
    height: 123,
  },
});

export default ExpensesTab1;
