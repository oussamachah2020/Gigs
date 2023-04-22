import { useFonts } from "expo-font";
import { StyleSheet } from "react-native/types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Intro, Login, Register, Home } from "./frontend/screens";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { SCREENS } from "./frontend/screens/types";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    PoppinsBold: require("./frontend/assets/fonts/Poppins-Bold.ttf"),
    PoppinsSemiBold: require("./frontend/assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("./frontend/assets/fonts/Poppins-Medium.ttf"),
    PoppinsRegular: require("./frontend/assets/fonts/Poppins-Regular.ttf"),
    PoppinsLight: require("./frontend/assets/fonts/Poppins-Light.ttf"),
  });

  if (!loaded) return null;
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
    },
  };

  return (
    <>
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={SCREENS.INTRODUCTION_SCREEN} component={Intro} />
          <Stack.Screen name={SCREENS.LOGIN_SCREEN} component={Login} />
          <Stack.Screen name={SCREENS.REGISTER_SCREEN} component={Register} />
          <Stack.Screen name={SCREENS.HOME_SCREEN} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
}
