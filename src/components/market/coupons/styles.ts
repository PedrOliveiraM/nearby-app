import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingBottom: 16,
  },
  title: {
    color: colors.gray[500],
    fontFamily: fontFamily.medium,
    fontSize: 16,
  },
  subTitle: {
    color: colors.gray[500],
    fontFamily: fontFamily.regular,
    fontSize: 14,
    textAlign: "center",
    padding: 20
  },
  containerCoupons: {
    paddingVertical: 12,
    gap: 4
  },
  code: {
    color: colors.gray[600],
    fontFamily: fontFamily.bold,
    fontSize: 16,
    textTransform: "uppercase"
  },
  containerTicket: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 12,
    gap: 10,
    backgroundColor: colors.green.soft,
    borderRadius: 8
  }
});
