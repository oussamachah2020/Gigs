import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from "react-native";
// import { useNavigation } from "react-router-dom";
import { assets } from "../../constants/assets";
import {
  RegisterStyle,
  COLORS,
  FONTS,
  SHADOWS,
  SIZES,
} from "../../constants/Theme";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon } from "react-native-elements";
import React, { useState } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { auth } from "../../../firebase/firebase";
<<<<<<< HEAD
import { FontAwesome } from "@expo/vector-icons";
import { SCREENS } from "../types";
=======
>>>>>>> cc1c08d (start backend)

type RegisterProps = {};

interface formDataType {
  fullName: string;
  email: string;
  password: string;
  password2: string;
}

const Register = (props: RegisterProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<formDataType>({
    fullName: "",
    email: "",
    password: "",
    password2: "",
  });

  const [user, setUser] = useState<undefined>();

  const navigation = useNavigation();
  const createNewAccout = () => {
    for (const field in formData) {
      if (!formData[field as keyof formDataType]) {
        Toast.show({
          type: "error",
          text1: "Please enter your informations",
        });
      } else {
        if (formData.password === formData.password2) {
          auth
            .createUserWithEmailAndPassword(formData.email, formData.password)
            .then((userCredential) => {
              const user = userCredential.user;

              setUser((user) => {
                if (user === null) {
                  return undefined;
                }
              });
            })
            .catch((error) => {
              console.log(error);
            });

          Toast.show({
            type: "success",
            text1: "User registered successfully",
          });

          setFormData((prev) => ({
            ...prev,
            email: "",
            fullName: "",
            password: "",
            password2: "",
          }));
        } else {
          Toast.show({
            type: "error",
            text1: "Passwords not matching !",
          });
        }
      }
    }
  };

  const handleFullNameChange = (fullNameValue: string) => {
    setFormData({ ...formData, fullName: fullNameValue });
  };

  const handleEmailChange = (emailValue: string) => {
    setFormData({ ...formData, email: emailValue });
  };

  const handlePasswordChange = (passwordValue: string) => {
    setFormData({ ...formData, password: passwordValue });
  };

  const handlePassword2Change = (password2Value: string) => {
    setFormData({ ...formData, password2: password2Value });
  };

  return (
    <View>
      <View style={RegisterStyle.header}>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.red,
            borderRadius: 50,
            position: "absolute",
            left: 10,
            padding: 8,
            ...SHADOWS.medium,
          }}
          onPress={() => navigation.navigate(SCREENS.LOGIN_SCREEN as never)}
        >
          <Image
            source={assets.left}
            style={{
              width: 20,
              height: 20,
              position: "relative",
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            fontFamily: FONTS.medium,
            fontSize: SIZES.extraLarge,
          }}
        >
          Sign Up
        </Text>
      </View>
      <View style={RegisterStyle.form}>
        <View style={{ flexDirection: "row" }}>
          <Icon
            name="email"
            size={20}
            style={{ position: "absolute", zIndex: 10 }}
          />
        </View>
        <View style={RegisterStyle.inputContainer}>
          <FontAwesome
            name="user"
            size={24}
            color="#000"
            style={RegisterStyle.icon}
          />
          <TextInput
            style={RegisterStyle.input}
            placeholder="Full Name"
            value={formData.fullName}
            onChangeText={handleFullNameChange}
          />
        </View>

        <View style={RegisterStyle.inputContainer}>
          <FontAwesome
            name="envelope"
            size={24}
            color="#000"
            style={RegisterStyle.icon}
          />
          <TextInput
            style={RegisterStyle.input}
            placeholder="E-mail"
            value={formData.email}
            onChangeText={handleEmailChange}
          />
        </View>

        <View style={RegisterStyle.inputContainer}>
          <FontAwesome
            name="lock"
            size={24}
            color="#000"
            style={RegisterStyle.icon}
          />
          <TextInput
            style={RegisterStyle.input}
            placeholder="Password"
            secureTextEntry={true}
            value={formData.password}
            onChangeText={handlePasswordChange}
          />
        </View>

        <TextInput
          style={RegisterStyle.input}
          placeholder="Password Confirmation"
          secureTextEntry={true}
          value={formData.password2}
          onChangeText={handlePassword2Change}
        />

        <Button
          buttonStyle={{
            backgroundColor: COLORS.red,
            borderColor: "transparent",
            borderRadius: 5,
            paddingHorizontal: 110,
            paddingVertical: 10,
          }}
          title={
            isLoading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              "Create an account"
            )
          }
          onPress={() => {}}
        />
        <Text>
          Already have an account?{" "}
          <Text
            style={{
              color: COLORS.red,
            }}
            onPress={() => navigation.navigate(SCREENS.LOGIN_SCREEN as never)}
          >
            sign in
          </Text>
        </Text>
      </View>
      <View>
        <Image
          source={assets.wave}
          style={{ position: "absolute", top: 0, width: "100%" }}
        />
      </View>
    </View>
  );
};

export default Register;
