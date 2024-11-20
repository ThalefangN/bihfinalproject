import * as React from "react";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const IncomeTab = () => {
  return (
    <View style={styles.incomeTab}>
      <View style={styles.liftingIcon} />
      <Text style={[styles.text, styles.textFlexBox]}>9829.....#88</Text>
      <Text style={[styles.firstNationalBank, styles.textFlexBox]}>
        FIRST NATIONAL BANK BOTSWANA
      </Text>
      <View style={styles.reviewConnectionWrapper}>
        <Text style={[styles.reviewConnection, styles.textFlexBox]}>
          Review Connection
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "center",
    lineHeight: 24,
  },
  liftingIcon: {
    top: 73,
    left: 36,
    width: 30,
    height: 30,
    overflow: "hidden",
    position: "absolute",
  },
  text: {
    marginLeft: -87.5,
    top: 50,
    left: "50%",
    fontSize: 29,
    width: 175,
    color: Color.bTCWHITE,
    textAlign: "center",
    lineHeight: 24,
    position: "absolute",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
  },
  firstNationalBank: {
    top: 19,
    left: 74,
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    width: 246,
    color: Color.bTCWHITE,
    textAlign: "center",
    lineHeight: 24,
    position: "absolute",
  },
  reviewConnection: {
    fontSize: FontSize.size_base,
    color: Color.cultured,
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textAlign: "center",
    lineHeight: 24,
  },
  reviewConnectionWrapper: {
    top: 77,
    left: 108,
    borderStyle: "solid",
    borderColor: Color.bTCWHITE,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    position: "absolute",
    borderRadius: Border.br_base,
  },
  incomeTab: {
    backgroundColor: Color.mountainMeadow,
    flex: 1,
    width: "100%",
    height: 133,
    borderRadius: Border.br_base,
  },
});

export default IncomeTab;
