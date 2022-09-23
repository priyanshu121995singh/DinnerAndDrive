import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Arrow from '../Main/Arrow'
import imagePath from '../Image'
const HeaderTop = ({navigation,onPress}) => {
  return (
    <View style={{ backgroundColor:"white"}}>
    
     <View style={{marginTop:40}}>
      <Arrow
    source={imagePath.BlackArrow}
    onPress={onPress}
    style={{height:30,width:30}}/>
      </View>
  <View style={{marginTop:-30}}>
  <Text style={{textAlign:"center",fontSize:25,fontWeight:"bold",marginVertical:20,color:"black"}}>Restaurant History</Text>
  </View>
      
     
    </View>
  )
}

export default HeaderTop;

const styles = StyleSheet.create({})