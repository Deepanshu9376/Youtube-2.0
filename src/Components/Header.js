import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Constant from "expo-constants";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

const mycolor = '#212121';

const Header=() =>{
  const navigation=useNavigation();
  return (
    <View style={styles.mainView}>
      <View style={styles.youtubeIconmain}>
        <AntDesign name="youtube" size={32} color="red" />
        <Text style={styles.youtubetext}>YouTube</Text>
      </View>
      <View style={styles.iconsthree}>
        <MaterialCommunityIcons name="cast-connected" size={24} color="white" />
        <FontAwesome name="bell" size={24} color="white" />
        <FontAwesome name="search" size={24} color="white" onPress={()=>navigation.navigate('search')}/>
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  mainView: {
    marginTop: Constant.statusBarHeight,
    height: 40,
    width: '100%',
    backgroundColor: "white",
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black'
  },
  youtubeIconmain: {
    flexDirection: "row",
    margin: 5,
    marginLeft: 12
  },
  youtubetext: {
    fontSize: 20,
    marginTop: 2,
    marginStart: 6,
    fontWeight:"bold",
    color: 'white'
  },
  iconsthree:{
    flexDirection: 'row',
    marginTop: 9,
    marginStart: 40,
    justifyContent: 'space-around',
    width: 150
  }
});
