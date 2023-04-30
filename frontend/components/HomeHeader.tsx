import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "react-native";
import { assets } from "../constants/assets";
import { COLORS, FONTS, LoginStyle, SIZES } from "../constants/Theme";
import { dashboardStyle } from "../constants/styles/homeTheme";
import Sidebar from "./Sidebar";

type DashboardHeaderProps = {
  username: string | null;
  handleBarOpen: () => void;
};

const HomeHeader = ({ username, handleBarOpen }: DashboardHeaderProps) => {
  return (
    <SafeAreaView style={{ zIndex: 0 }}>
      <View style={dashboardStyle.header}>
        <Text
          style={{
            fontFamily: FONTS.medium,
            textTransform: "uppercase",
            fontSize: SIZES.font,
          }}
        >
          Welcome {username}
        </Text>
        <TouchableOpacity onPress={handleBarOpen}>
          <Image source={assets.menu} style={{ width: 25, height: 30 }} />
        </TouchableOpacity>
      </View>
      <View style={dashboardStyle.searchForm}>
        <TextInput
          style={dashboardStyle.input}
          placeholder="Job title, category"
        />
        <TextInput style={dashboardStyle.input} placeholder="Location" />

        <TouchableOpacity
          style={{
            backgroundColor: COLORS.red,
            width: "100%",
            padding: SIZES.font,
            borderRadius: SIZES.base,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              textAlign: "center",
            }}
          >
            Search
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
            textAlign: "left",
            marginVertical: 3,
          }}
        >
          Jobs List
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeHeader;
