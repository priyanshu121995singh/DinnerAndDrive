import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'
import image from '../Image';
const Checkbox = ({text}) => {
    const[check,setcheck]=useState();

const onClick= ()=>{
  setcheck(!check)
}
  return (
    <View>
    <TouchableOpacity onPress={() => { onClick();}}>
    <Image
    
    style={{height:20,
      width:20,
      position:"absolute",
       marginHorizontal:20,
      marginTop:10}}
    source={check ? image.Circle 
                   :image.Dotcircle}
    />
    </TouchableOpacity>
     <Text style={{marginLeft:50,marginTop:10}}>{text}</Text> 
    </View>
  )
}

export default Checkbox

const styles = StyleSheet.create({})