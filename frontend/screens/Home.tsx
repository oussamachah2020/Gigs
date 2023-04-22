import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { assets } from "../constants/assets";
import { dashboardStyle } from "../constants/styles/homeTheme";
import { COLORS, FONTS, LoginStyle, SIZES } from "../constants/Theme";
import Cards from "../components/Cards";
import HomeHeader from "../components/HomeHeader";
import Sidebar from "../components/Sidebar";

type Props = {};

const cardData = [
  {
    id: 1,
    job_title: "ReactJs Developer",
    company_name: "C2M SYSTEM",
    company_location: "Casablance",
    job_description:
      "Nous somme a la recherhe d'un developpement web qui a une maitrice dans les differents langage de programmation tel que : HTML CSS , PHP , BOOSTRAP , REACT JS , NODEJS et d'autre langage de back-end et front end .",
  },
  {
    id: 2,
    job_title: "ReactJs Developer",
    company_name: "C2M SYSTEM",
    company_location: "Casablance",
    job_description:
      "Nous somme a la recherhe d'un developpement web qui a une maitrice dans les differents langage de programmation tel que : HTML CSS , PHP , BOOSTRAP , REACT JS , NODEJS et d'atre langage de back-end et front end .",
  },
];

const Home = (props: Props) => {
  const handleSearch = () => {};
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
      </View>
    </View>
  );
};

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

export default Home;
