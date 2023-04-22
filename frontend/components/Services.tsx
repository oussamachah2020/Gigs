import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants/Theme";

const style = StyleSheet.create({
  cardsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    marginVertical: SIZES.extraLarge,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.extraLarge,
    padding: SIZES.base,
  },
});

type ServicesProps = {
  data: {
    id: string;
    image: string;
    caption: string;
  };
};

const Services = ({ data }: ServicesProps) => {
  return (
    <View
      style={{
        marginTop: 50,
      }}
      key={data.id}
    >
      <View style={style.cardsContainer}>
        <View style={style.card}>
          <Image
            source={data.image}
            resizeMode="contain"
            style={{ width: 40, height: 40 }}
          />
        </View>
        <Text
          style={{
            color: COLORS.white,
            fontFamily: FONTS.medium,
            width: 280,
          }}
        >
          {data.caption}
        </Text>
      </View>
    </View>
  );
};

export default Services;
