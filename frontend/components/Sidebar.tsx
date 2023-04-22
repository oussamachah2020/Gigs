import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { COLORS, FONTS, SHADOWS } from "../constants/Theme";
import { TouchableOpacity } from "react-native";
import { Animated } from "react-native";

type SideBarProps = {
  handleBarClose: () => void;
};

type sidebarItemsType = {
  icon: string; // assuming the image file path is a string
  title: string;
}[];

const Sidebar = ({ handleBarClose }: SideBarProps) => {
  const sidebarItems: sidebarItemsType = [
    {
      icon: require("../assets/sideBarIcons/Dashbord.png"),
      title: "Dashboard",
    },
    {
      icon: require("../assets/sideBarIcons/Profile.png"),
      title: "Profile",
    },
    {
      icon: require("../assets/sideBarIcons/Terms.png"),
      title: "Terms and Policies",
    },
    {
      icon: require("../assets/sideBarIcons/LastOffers.png"),
      title: "Last Offers",
    },
    {
      icon: require("../assets/sideBarIcons/HelpCenter.png"),
      title: "Help Center",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, zIndex: 10000 }}>
      <Animated.View style={styles.sideBarContainer}>
        <Image
          source={require("../assets/sideBarIcons/SideWave.png")}
          resizeMode="contain"
          style={{
            position: "absolute",
            right: 0,
          }}
        />
        <View style={styles.userInformation}>
          <Image
            source={require("../assets/sideBarIcons/profile_pic.png")}
            resizeMode="contain"
          />
          <Text
            style={{
              fontFamily: FONTS.medium,
              paddingLeft: 10,
            }}
          >
            Oussama Chahidi
          </Text>
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 0,
            }}
            onPress={handleBarClose}
          >
            <Image
              source={require("../assets/sideBarIcons/Close.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.itemsContainer}>
          {sidebarItems.map((item, index) => (
            <View key={index} style={styles.listItemsContainer}>
              <TouchableOpacity style={styles.linkStyle}>
                <Image source={item.icon} resizeMode="contain" />
                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    marginLeft: 10,
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity style={styles.logoutBtn}>
            <Image
              source={require("../assets/sideBarIcons/LogOut.png")}
              resizeMode="contain"
            />
            <Text style={{ marginLeft: 10 }}>Logout</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideBarContainer: {
    backgroundColor: COLORS.white,
    ...SHADOWS.dark,
    width: 282,
    height: 789,
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
  },
  itemsContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: "30%",
    margin: 20,
  },
  listItemsContainer: {
    margin: 5,
    padding: 10,
  },
  userInformation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 20,
  },
  linkStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logoutBtn: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    position: "absolute",
    top: 480,
  },
});

export default Sidebar;
