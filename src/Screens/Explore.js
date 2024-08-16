import React from 'react'
import { View , Text} from 'react-native'
import Header from '../Components/Header'

const Littlecard=()=>{
    return(
        <View style={{backgroundColor: 'red',width: 180,height: 50,borderRadius: 4}}>
            <Text style={{textAlign:'center', color:'white',fontSize:22,marginTop: 5}}>Hello</Text>
        </View>
    )
}
function Explore() {
  return (
   <View style={{flex:1}}>
    <Header/>
    {/* <Text>Explore screen</Text> */}
    <Littlecard/>
   </View>
  )
}

export default Explore
