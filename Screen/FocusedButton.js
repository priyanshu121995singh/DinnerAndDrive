import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState}from 'react'

const FocusedButton = () => {
    const[select,Setselect]=useState('RedBox');
   const  OnClickChange=(value)=>{
Setselect(value);
    }
  return (
    <View style={styles.mainContainer}>
     <View style={styles.ButtonView}>
        <TouchableOpacity style={[styles.Button,{backgroundColor:select == 'RedBox'?"red":"grey"}]} onPress={()=>{  OnClickChange('RedBox')}}>
        <Text style={[styles.BtnText]}>
            RedBox
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.Button,{backgroundColor:select == 'YellowBox'?"yellow":"grey"}]} onPress={()=>{  OnClickChange('YellowBox')}}>
        <Text style={styles.BtnText}>
            YellowBox
        </Text>
        </TouchableOpacity>
      
     </View>
    </View>
  )
}

export default FocusedButton

const styles = StyleSheet.create({
   mainContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
   },
   ButtonView:{
   flexDirection:"row"
  
   },
   Button:{
   flex:1,
   paddingVertical:20
   },
   BtnText:{
    textAlign:"center",
    fontSize:20,
    fontWeight:"bold",
    color:"white"
   }
})