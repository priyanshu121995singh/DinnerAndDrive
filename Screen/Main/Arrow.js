import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import imagePath from '../Image'

const Arrow = ({ navigation, onPress, source,style }) => {

  return (
    <View>
      <TouchableOpacity style={{}} onPress={onPress}>
        <View style={styles.imge}>
          <Image
            source={source}
            style={[styles.img,style]} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Arrow

const styles = StyleSheet.create({
  img: {
    height:35,
    width: 35,
  },
  imge: {
    
   
  }
})