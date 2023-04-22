import {
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { assets } from "../../constants/assets";
import {
  LoginStyle,
  COLORS,
  FONTS,
  SHADOWS,
  SIZES,
} from "../../constants/Theme";
import { useNavigation } from "@react-navigation/native";

import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { SCREENS } from "../types";

type Props = {};
interface formDataType {
  email: string;
  password: string;
}

const Login = (props: Props) => {
  const [formData, setFormData] = useState<formDataType>({
    email: "",
    password: "",
  });
  const navigation = useNavigation();

  const [user, setUser] = useState<firebase.default.User>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [visible, setVisible] = useState(false);

  const loginToAccount = () => {
    navigation.navigate(SCREENS.HOME_SCREEN as never);
    // for (const field in formData) {
    //   if (!formData[field as keyof formDataType]) {
    //     Toast.show({
    //       type: "error",
    //       text1: "Please enter your informations",
    //     });
    //   } else {
    //     auth
    //       .signInWithEmailAndPassword(formData.email, formData.password)
    //       .then((userCredential) => {
    //         const user = userCredential.user;
    //         AsyncStorage.setItem("userData", JSON.stringify(user));
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });

    //     setFormData((prev) => ({
    //       ...prev,
    //       email: "",
    //       password: "",
    //     }));
    //   }
    // }
  };

  const handleEmailChange = (emailValue: string) => {
    setFormData({ ...formData, email: emailValue });
  };

  const handlePasswordChange = (passwordValue: string) => {
    setFormData({ ...formData, password: passwordValue });
  };

  return (
    <View>
      <View style={LoginStyle.header}>
        <TouchableOpacity
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
        </TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            fontFamily: FONTS.medium,
            fontSize: SIZES.extraLarge,
          }}
        >
          Sign In
        </Text>
      </View>
      <View style={LoginStyle.form}>
        <View style={LoginStyle.inputContainer}>
          <FontAwesome
            name="envelope"
            size={24}
            color="#000"
            style={LoginStyle.icon}
          />

          <TextInput
            style={LoginStyle.input}
            placeholder="E-mail"
            value={formData.email}
            onChangeText={handleEmailChange}
          />
        </View>

        <View style={LoginStyle.inputContainer}>
          <FontAwesome
            name="lock"
            size={24}
            color="#000"
            style={LoginStyle.icon}
          />

          <TextInput
            style={LoginStyle.input}
            placeholder="Password"
            secureTextEntry={true}
            value={formData.password}
            onChangeText={handlePasswordChange}
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
          onPress={() => {
            setIsLoading(true);
            setInterval(() => {
              setIsLoading(false);
              navigation.navigate(SCREENS.HOME_SCREEN as never);
            }, 3000);
          }}
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
              "Sign in"
            )}
          </Text>
        </TouchableOpacity>

        <Text>
          Don't you have an account?{" "}
          <Text
            onPress={() =>
              navigation.navigate(SCREENS.REGISTER_SCREEN as never)
            }
            style={{ color: COLORS.red, fontFamily: FONTS.medium }}
          >
            sign up
          </Text>
        </Text>
      </View>
      <View
        style={{
          position: "relative",
          left: 18,
        }}
      >
        <TouchableOpacity style={LoginStyle.googleButton}>
          <Image
            source={assets.google}
            style={{ width: 25, height: 25, position: "absolute", left: 10 }}
          />
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              textAlign: "center",
            }}
          >
            Sign in with google
          </Text>
        </TouchableOpacity>
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

export default Login;
