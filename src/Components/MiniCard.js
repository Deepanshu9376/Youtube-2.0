import React from 'react';
import { View, Image, Text, StyleSheet,Dimensions } from "react-native";
import image from "../../assets/image.png";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

function MiniCard(props) {
  return (
    <View style={styles.parentall}>
    <Image source={{uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}} style={styles.imagecss} />
    <View style={styles.icons}>
        <Text style={styles.infoheader} ellipsizeMode="tail" numberOfLines={3}>{props.title}</Text>
        <Text style={styles.subtitle}>{props.channel}</Text>
    </View>
  </View>
  )
}

export default MiniCard

const styles = StyleSheet.create({
    parentall:{
        flexDirection: 'row',
        margin: 15,
        marginBottom: 0
    },
    imagecss:{
        width: "45%", height: 100
    },
    icons: {
      flexDirection: "column",
      marginTop: 5,
      paddingLeft: 7
    },
    info:{
      flexDirection: 'column',
    },
    infoheader:{
      fontWeight: 'bold',
      width: Dimensions.get("screen").width/2
    },
    subtitle:{
        fontSize: 12
    }
  });
  