import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 4,
    paddingTop: 32,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200]
  },
  title: {
    color: colors.gray[500],
    fontFamily: fontFamily.medium,
    fontSize: 16,
    paddingBottom: 12
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingBottom: 4
  },
  text: {
    color: colors.gray[500],
    fontFamily: fontFamily.regular,
    fontSize: 14
  }
});
