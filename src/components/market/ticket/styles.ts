import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 12,
    gap: 10,
    backgroundColor: colors.red.light,
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[600],
  },
  coupon: {
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: colors.gray[600],
  }
});
