import React from 'react'
import { View, Text } from 'react-native'
import Constant from 'expo-constants';

function VideoPlayer() {
  return (
    <View style={{marginTop: Constant.statusBarHeight}}>
        <Text>Video Player</Text>
    </View>
  )
}

export default VideoPlayer
