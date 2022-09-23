import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import image from '../Image';

const Images = () => {
  return (
    <View style={{justifyContent:"center",alignItems:"center"}}>
    <Image
    source={image.Login}
    style={styles.img}/>
  </View>
  )
}

export default Images

const styles = StyleSheet.create({
    img:{
        marginTop:40,
       
        height:108,
        width:106
      },
})