import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({text}) => {
  return (
    <View>
      <Text style={styles.login}>{text}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    login:{
        fontSize:30,
        color:"#000000",
        textAlign:"center",
        marginTop:95,
        fontWeight:"bold"
      },
})