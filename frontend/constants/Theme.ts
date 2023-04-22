import { StyleSheet } from "react-native";

export const COLORS = {
  primary: "#001F2D",
  secondary: "#4D626C",

  white: "#FFF",
  gray: "#74858C",
  red: "#E11F1FC2",
  borderColor: "#FF00007A",
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

export const FONTS = {
  bold: "PoppinsBold",
  semiBold: "PoppinsSemiBold",
  medium: "PoppinsMedium",
  regular: "PoppinsRegular",
  light: "PoppinsLight",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 100,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};

export const RegisterStyle = StyleSheet.create({
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    marginVertical: 40,
  },
  input: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: COLORS.borderColor,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    width: "90%",
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  googleButton: {
    borderWidth: 2,
    borderColor: COLORS.red,
    width: "90%",
    padding: SIZES.base,
    borderRadius: SIZES.base,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signUp: {
    paddingVertical: 0,
  },
});

export const LoginStyle = StyleSheet.create({
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 50,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: COLORS.borderColor,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    width: "90%",
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 25,
    marginVertical: 30,
  },
  input: {
    flex: 1,
  },
  googleButton: {
    borderWidth: 2,
    borderColor: COLORS.red,
    width: "90%",
    padding: SIZES.base,
    borderRadius: SIZES.base,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signUp: {
    paddingVertical: 0,
  },
  lottie: {
    width: 100,
    height: 100,
  },
});
