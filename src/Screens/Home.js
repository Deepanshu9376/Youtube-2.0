import React from "react";
import { View, Text, ScrollView , FlatList} from "react-native";
import Header from "../Components/Header";
import Card from "../Components/Card";
import Constant from 'expo-constants';
import { useSelector } from "react-redux";

function Home() {
  // const carddata=useSelector(state=>{
  //   return state
  // })

  const carddata = useSelector((state) => state.carddata);
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <FlatList
      data={carddata}
      renderItem={({item})=>{
        return <Card
        videoId={item.id.videoId}
        title={item.snippet.title}
        channel={item.snippet.channelTitle}
        />
      }}
      keyExtractor={(item, index) => item.id.videoId + index.toString()}
      />
    </View>
  );
}

export default Home;
