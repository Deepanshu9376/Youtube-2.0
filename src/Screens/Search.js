import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TextInput, View ,StyleSheet, ScrollView,FlatList,ActivityIndicator} from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MiniCard from "../Components/MiniCard";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyBEZ10oohBj9sEh_B4rjLXwsjlTX_-I5Ng

function Search() {
    const [value,setValue]=useState("");
    // const [minicard,setminicard]=useState([]);
    const dispatch=useDispatch();
    const minicard = useSelector((state) => state.minicard);
    const [loading,setLoading]=useState(false);
    const fetchData=()=>{
      setLoading(true)
      fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${value}&type=video&key=AIzaSyBEZ10oohBj9sEh_B4rjLXwsjlTX_-I5Ng`).then(res=>res.json()).then(data=>{
        // console.log(data)
        setLoading(false)
        // setminicard(data.items);
        dispatch({type:"add",payload: data.items})
      })
    }
    const navigation=useNavigation();
  return (
    <View style={{flex: 1, marginTop: 40}}>
      <View style={styles.uper}>
        <Ionicons name="arrow-back-sharp" onPress={()=>navigation.goBack()} size={24} color="black" />
        <TextInput value={value} style={styles.textip} placeholder="Search Youtube" onChangeText={(text)=>setValue(text)}/>
        <FontAwesome name="microphone" size={24} color="black" style={styles.mic} />
        <Ionicons name="send" size={20} color="black" onPress={()=>fetchData()} />
      </View>
     {loading?<ActivityIndicator size="large" color={"red"}/>:null}
      <FlatList 
      data={minicard}
      renderItem={({item})=>{
        return <MiniCard
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

export default Search;
const styles=StyleSheet.create({
    uper:{
        padding: 2,
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    textip:{
      width: "75%",
      backgroundColor: "#e6e6e6",
      borderRadius: 20,
      paddingLeft: 20
    },
    mic:{
      marginLeft: "200px"
    }
})
