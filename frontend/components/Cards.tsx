import React from "react";
import { Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants/Theme";
import { CardStyle, dashboardStyle } from "../constants/styles/homeTheme";

type CardProps = {
  data: {
    id: number;
    job_title: string;
    company_name: string;
    company_location: string;
    job_description: string;
  };
};

const Cards = ({ data }: CardProps) => {
  return (
    <View key={data.id} style={CardStyle.card}>
      <View style={CardStyle.cardHeader}>
        <Text
          style={{
            fontFamily: FONTS.medium,
          }}
        >
          {data.job_title}
        </Text>
        <TouchableOpacity style={CardStyle.applyButton}>
          <Text style={{ color: COLORS.white, fontFamily: FONTS.semiBold }}>
            Apply
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontFamily: FONTS.regular,
        }}
      >
        {data.company_name}
      </Text>
      <View
        style={{
          marginVertical: 15,
        }}
      >
        <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.medium }}>
          Job description
        </Text>
        <Text style={{ fontFamily: FONTS.regular }}>
          {data.job_description}
        </Text>
      </View>
    </View>
  );
};

export default Cards;
