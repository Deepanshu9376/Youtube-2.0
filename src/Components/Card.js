import React from "react";
import { View, Image, Text, StyleSheet,Dimensions } from "react-native";
import image from "../../assets/image.png";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Card = (props) => {
  return (
    <View style={styles.parentall}>
      <Image source={{uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}} style={{ width: "100%", height: 200 }} />
      <View style={styles.icons}>
        <MaterialIcons name="account-circle" size={40} color="black" />
        <View style={styles.info}>
          <Text style={styles.infoheader} ellipsizeMode="tail" numberOfLines={2}>{props.title}</Text>
          <Text>{props.channel}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  parentall:{
    marginBottom: 10,
  },
  icons: {
    flexDirection: "row",
    marginTop: 5
  },
  info:{
    flexDirection: 'column',
  },
  infoheader:{
    fontWeight: 'bold',
    width: Dimensions.get("screen").width-50

  }
});
