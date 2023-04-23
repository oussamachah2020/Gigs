import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { assets } from "../constants/assets";
import { COLORS, FONTS, LoginStyle, SIZES } from "../constants/Theme";
import { FontAwesome } from "@expo/vector-icons";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "./types";
import axios from "axios";
import { useBaseUrl } from "../hook/useZustand";

type Props = {};

const PhoneNumber = (props: Props) => {
  const baseUrl = useBaseUrl((state: any) => state.baseUrl);
  const [userPhoneNumber, setUserPhoneNumber] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const RandomNumber = (
    Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
  ).toString();

  const navigation = useNavigation();

  const handleSMS = () => {
    if (userPhoneNumber == "") {
      Toast.show({
        type: "error",
        text1: "Please enter your phone number",
      });
    }

    setIsLoading(true);

    axios
      .post(
        `${baseUrl}/api/sms/`,
        {
          userPhoneNumber,
          RandomNumber,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setIsLoading(false);
        Toast.show({
          type: "success",
          text1: data.msg,
        });
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

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
          Enter You Phone Number
        </Text>
      </View>
      <Text
        style={{
          textAlign: "center",
          fontFamily: FONTS.medium,
        }}
      >
        You will receive a verification number
      </Text>
      <View style={LoginStyle.form}>
        <View style={LoginStyle.inputContainer}>
          <FontAwesome
            name="phone"
            size={24}
            color="#000"
            style={LoginStyle.icon}
          />

          <TextInput
            style={{ textAlign: "center" }}
            placeholder="Phone Number"
            secureTextEntry={false}
            keyboardType="numeric"
            value={userPhoneNumber}
            onChangeText={(value: string) => {
              setUserPhoneNumber(value);
            }}
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
          onPress={handleSMS}
        >
          <Text
            style={{
              color: COLORS.white,
              fontFamily: FONTS.regular,
            }}
          >
            {isLoading ? (
              <ActivityIndicator size="large" color="#fff" />
            ) : (
              "Send"
            )}
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
};

export default PhoneNumber;
