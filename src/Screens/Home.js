import React from "react";
import { View, Text, ScrollView } from "react-native";
import Header from "../Components/Header";
import Card from "../Components/Card";
import Constant from 'expo-constants';
import { useSelector } from "react-redux";

function Home() {
  const carddata=useSelector(state=>{
    return state
  })
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView>
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
}

export default Home;
