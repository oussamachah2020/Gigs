import { StyleSheet } from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES } from "../Theme";

export const dashboardStyle = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
    // marginHorizontal: 20,
    width: "100%",
    zIndex: -1,
  },
  searchForm: {
    marginVertical: 30,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 15,
    fontFamily: FONTS.medium,
    zIndex: 0,
    marginHorizontal: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: COLORS.borderColor,
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: SIZES.base,
    width: "100%",
  },
});

export const CardStyle = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: COLORS.red,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  cardHeader: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  applyButton: {
    backgroundColor: "#EA5151",
    borderRadius: 3,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
});
