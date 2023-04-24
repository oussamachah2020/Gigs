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
import axios from "axios";
import useAuthStore, { useBearStore } from "../hook/useZustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

interface AuthStoreState {
  token: string;
  setToken: (token: string) => void;
}

interface loggedInUserData {
  fullName: string;
  email: string;
}

const Home = (props: Props) => {
  const [user, setUser] = useState<loggedInUserData>();
  const [token, setToken] = useState<string | undefined>("");

  const getUserToken = async () => {
    await AsyncStorage.getItem("userToken")
      .then((token) => {
        return setToken(JSON.parse(token!));
      })
      .catch((error) => {
        // handle errors here
        console.log(error);
      });
  };

  console.log("The token", token);
  getUserToken();

  const handleSearch = () => {};
  const [open, setOpen] = useState<boolean>(false);

  const handleBarClose = () => {
    setOpen(false);
  };

  const handleBarOpen = () => {
    setOpen(true);
  };

  const getUserData = async () => {
    await axios
      .get("http://192.168.100.4:6000/api/candidate/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setUser(data);
        // console.log(data.email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserData();
    console.log("user data >>>>>>> ", user?.email);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View>
        {open ? (
          <View style={{ zIndex: 1 }}>
            <Sidebar
              handleBarClose={handleBarClose}
              username={user?.fullName}
            />
          </View>
        ) : null}
        <FlatList
          data={cardData}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <HomeHeader
              username={user?.fullName}
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
