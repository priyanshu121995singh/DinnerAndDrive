import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React, { useEffect } from 'react'
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import image from './Image'
import Helper from './lip/Helper'

const Splesh = ({ navigation }) => {
  useEffect(() => {
    Helper.getData('userdata').then(userData => {
      if (!userData) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'MyTabs' }],
        });
      }
    })
  }, [])

  return (
    <ImageBackground style={{ flex: 1 ,justifyContent:"center",alignItems:"center"}} source={image.First}>
      <Image
        source={image.Second}
        style={styles.Image} />
    </ImageBackground>

  )
}

export default Splesh

const styles = StyleSheet.create({
  Image: {
    flex:1,
    height: 175,
    width: 269,
  
    position: "absolute"
  }
})