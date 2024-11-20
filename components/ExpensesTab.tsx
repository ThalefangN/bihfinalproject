import React, { useMemo } from "react";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

export type ExpensesTabType = {
  toiletries?: string;

  /** Style props */
  expensesTabLeft?: number | string;
  toiletriesLeft?: number | string;
  toiletriesWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ExpensesTab = ({
  expensesTabLeft,
  toiletries,
  toiletriesLeft,
  toiletriesWidth,
}: ExpensesTabType) => {
  const expensesTabStyle = useMemo(() => {
    return {
      ...getStyleValue("left", expensesTabLeft),
    };
  }, [expensesTabLeft]);

  const toiletriesStyle = useMemo(() => {
    return {
      ...getStyleValue("left", toiletriesLeft),
      ...getStyleValue("width", toiletriesWidth),
    };
  }, [toiletriesLeft, toiletriesWidth]);

  return (
    <View style={[styles.expensesTab, expensesTabStyle]}>
      <View style={[styles.liftingIcon, styles.iconPosition]} />
      <Text style={styles.p50OutOf}>P50 out of P100</Text>
      <Text style={[styles.toiletries, styles.toiletriesTypo, toiletriesStyle]}>
        {toiletries}
      </Text>
      <Text
        style={[styles.youHaveUsed, styles.toiletriesTypo]}
      >{`You have used `}</Text>
      <Image
        style={styles.expensesTabChild}
        contentFit="cover"
        source={require("../assets/group-161.png")}
      />
      <Image
        style={[styles.notosoapIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/notosoap.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  toiletriesTypo: {
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
    top: 73,
    overflow: "hidden",
  },
  p50OutOf: {
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
  toiletries: {
    top: 20,
    fontSize: FontSize.size_lg,
    width: 92,
  },
  youHaveUsed: {
    top: 50,
    fontSize: FontSize.size_xs,
    width: 91,
  },
  expensesTabChild: {
    top: 15,
    left: 146,
    width: 32,
    height: 32,
    position: "absolute",
  },
  notosoapIcon: {
    top: 22,
    left: 148,
    width: 18,
    height: 18,
  },
  expensesTab: {
    borderRadius: Border.br_base,
    backgroundColor: Color.colorSilver,
    flex: 1,
    width: "100%",
    height: 123,
  },
});

export default ExpensesTab;
