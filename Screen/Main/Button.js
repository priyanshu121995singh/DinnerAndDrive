import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({text,onPress}) => {
  return (
     
    <View>
        
        <TouchableOpacity onPress={onPress}>
        <View style={styles.outer}>
      <Text style={styles.button}>{text}</Text>
      </View>
      </TouchableOpacity>
      
    </View>
     
  )
}

export default Button

const styles = StyleSheet.create({
    outer:{
        marginHorizontal:20,
        backgroundColor:"#3a3e45",
        paddingVertical:20,
        borderRadius:5
    },
    button:{
        textAlign:"center",
        color:"white",
        fontSize:17
    }
})