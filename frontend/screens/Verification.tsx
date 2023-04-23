import React from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, FONTS, LoginStyle, SHADOWS, SIZES } from "../constants/Theme";
import { SCREENS } from "./types";
import { assets } from "../constants/assets";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

type Props = {};

function Verification({}: Props) {
  const navigation = useNavigation();

  return (
    <View>
      <View style={LoginStyle.header}>
        {/* <TouchableOpacity
          style={{
            backgroundColor: COLORS.red,
            borderRadius: 50,
            position: "absolute",
            left: 10,
            padding: 8,
            ...SHADOWS.medium,
          }}
          onPress={() =>
            navigation.navigate(SCREENS.INTRODUCTION_SCREEN as never)
          }
        >
          <Image
            source={assets.left}
            style={{
              width: 20,
              height: 20,
              position: "relative",
            }}
          />
        </TouchableOpacity> */}
        <Text
          style={{
            textAlign: "center",
            fontFamily: FONTS.medium,
            fontSize: SIZES.extraLarge,
          }}
        >
          Verification
        </Text>
      </View>
      <Text
        style={{
          textAlign: "center",
          fontFamily: FONTS.medium,
        }}
      >
        Enter the received number
      </Text>
      <View style={LoginStyle.form}>
        <View style={verificationStyle.inputContainer}>
          <FontAwesome
            name="check"
            size={24}
            color="#000"
            style={LoginStyle.icon}
          />

          <TextInput
            style={{ textAlign: "center" }}
            placeholder="Verification Number"
            secureTextEntry={false}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.red,
            borderColor: "transparent",
            // borderWidth: 0,
            borderRadius: 5,
            paddingHorizontal: 150,
            paddingVertical: 10,
          }}
          onPress={() => {}}
        >
          <Text
            style={{
              color: COLORS.white,
              fontFamily: FONTS.regular,
            }}
          >
            Verify
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={assets.wave}
          style={{
            position: "absolute",
            top: 195,
            width: "100%",
          }}
        />
      </View>
    </View>
  );
}

export default Verification;

const verificationStyle = StyleSheet.create({
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
});
