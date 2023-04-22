<<<<<<< HEAD
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  DrawerLayoutAndroid,
  FlatList,
  ScrollView,
  StyleSheet,
=======
import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
>>>>>>> cc1c08d (start backend)
  View,
} from "react-native";
import { assets } from "../constants/assets";
import { dashboardStyle } from "../constants/styles/homeTheme";
import { COLORS, FONTS, LoginStyle, SIZES } from "../constants/Theme";
import Cards from "../components/Cards";
import HomeHeader from "../components/HomeHeader";
<<<<<<< HEAD
import Sidebar from "../components/Sidebar";
import { isLoading } from "expo-font";
=======
>>>>>>> cc1c08d (start backend)

type Props = {};

const cardData = [
  {
    id: 1,
    job_title: "ReactJs Developer",
    company_name: "C2M SYSTEM",
    company_location: "Casablance",
    job_description:
<<<<<<< HEAD
      "Nous somme a la recherhe d'un developpement web qui a une maitrice dans les differents langage de programmation tel que : HTML CSS , PHP , BOOSTRAP , REACT JS , NODEJS et d'autre langage de back-end et front end .",
=======
      "Nous somme a la recherhe d'un developpement web qui a une maitrice dans les differents langage de programmation tel que : HTML CSS , PHP , BOOSTRAP , REACT JS , NODEJS et d'atre langage de back-end et front end .",
>>>>>>> cc1c08d (start backend)
  },
  {
    id: 2,
    job_title: "ReactJs Developer",
    company_name: "C2M SYSTEM",
    company_location: "Casablance",
    job_description:
<<<<<<< HEAD
      "Nous somme a la recherhe d'un developpement web qui a une maitrice dans les differents langage de programmation tel que : HTML CSS , PHP , BOOSTRAP , REACT JS , NODEJS et d'autre langage de back-end et front end .",
=======
      "Nous somme a la recherhe d'un developpement web qui a une maitrice dans les differents langage de programmation tel que : HTML CSS , PHP , BOOSTRAP , REACT JS , NODEJS et d'atre langage de back-end et front end .",
>>>>>>> cc1c08d (start backend)
  },
];

const Home = (props: Props) => {
  const handleSearch = () => {};
<<<<<<< HEAD
  const [open, setOpen] = useState<boolean>(false);

  const handleBarClose = () => {
    setOpen(false);
  };

  const handleBarOpen = () => {
    setOpen(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <View>
        {open ? (
          <View style={{ zIndex: 1 }}>
            <Sidebar handleBarClose={handleBarClose} />
          </View>
        ) : null}
        <FlatList
          data={cardData}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <HomeHeader
              username={"oussama chahidi"}
              handleBarOpen={handleBarOpen}
            />
          }
          renderItem={({ item }) => <Cards data={item} />}
          showsVerticalScrollIndicator={false}
        />
=======
  return (
    <View style={{ flex: 1 }}>
      <View style={dashboardStyle.jobsContainer}>
        <View>
          <FlatList
            data={cardData}
            renderItem={({ item }) => <Cards data={item} />}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={<HomeHeader username={"oussama chahidi"} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
>>>>>>> cc1c08d (start backend)
      </View>
    </View>
  );
};

<<<<<<< HEAD
const styles = StyleSheet.create({
  slideIn: {
    transform: [{ translateX: 0 }],
    transitionProperty: "backgroundColor",
    transitionDuration: 400,
  },
  slideOut: {
    transform: [{ translateX: 500 }],
    transitionDuration: 400,
  },
});

=======
>>>>>>> cc1c08d (start backend)
export default Home;
