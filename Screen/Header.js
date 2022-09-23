import { StyleSheet, Text, View ,StatusBar,Image} from 'react-native'
import React from 'react'
import Header from './Main/Header'
import Images from './Main/Images'
import imagePath from './Image'
import Like from '../Screen/Main/Like'
import Button from '../Screen/Main/Button'
const HeaderScreen = ({navigation}) => {
  return (
    <View>
   <Like/> 
      <StatusBar backgroundColor={"#53565d"}barStyle="light-content"/>
      <View>
     <Image 
     source={imagePath.Header}
     
     style={{height:60,width:400}}/>
      
     </View>
   
     <View style={{justifyContent:"center",alignItems:"center"}}>
     <Image source={imagePath.Image}
     style={{height:60,width:80,marginTop:-60}}/>
    </View>
    <View style={{alignItems:"center",marginTop:50}}>
      <Text style={{color:"#000000",fontSize:21,fontWeight:"500"}}>Your Restaurants Have been</Text>

    </View>
    <View style={{alignItems:"center"}}> 
    <Text style={{color:"#000000",fontSize:21,fontWeight:"500"}}>Curated for you</Text>
    </View>
    <View style={{marginLeft:150,
    marginTop:70}}>
      <Image 
      source={imagePath.Spoon}
      style={{height:113,width:95}}/>
    </View>
    <View style={{marginTop:50}}>
      <Button
      text="Continue"
      onPress={()=>navigation.navigate("MyTabs")}/>
    </View>
    </View>
  )
}

export default HeaderScreen

const styles = StyleSheet.create({
  // title:{
  //   marginTop:250,
  //   alignItems:"center",
  //   flex:1
  // }
})