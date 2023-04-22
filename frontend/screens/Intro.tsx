import React from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../constants/Theme";
import { services } from "../constants/services";
import Services from "../components/Services";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "./types";

type Props = {};

const styles = StyleSheet.create({
  buttonsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

const Intro = (props: Props) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        paddingVertical: 100,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EC4545",
      }}
    >
      <StatusBar showHideTransition={"slide"} />
      <View>
        <Text
          style={{
            textAlign: "center",
            color: COLORS.white,
            fontSize: SIZES.extraLarge,
            fontFamily: FONTS.bold,
            letterSpacing: 5,
          }}
        >
          Gigs
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: COLORS.white,
            fontSize: SIZES.medium,
            fontFamily: FONTS.semiBold,
            fontStyle: "italic",
          }}
        >
          You can find your dream job here
        </Text>
      </View>
      <SafeAreaView>
        <FlatList
          data={services}
          renderItem={({ item }) => <Services data={item} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.white,
            padding: SIZES.base,
            borderRadius: 5,
          }}
          onPress={() => navigation.navigate(SCREENS.LOGIN_SCREEN as never)}
        >
          <Text
            style={{
              color: "#E13E3E",
              fontFamily: FONTS.semiBold,
            }}
          >
            Start as a condidate
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: COLORS.white,
            borderRadius: 5,
            padding: SIZES.base,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontFamily: FONTS.semiBold,
            }}
          >
            Start as a recruiter
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Intro;
