import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderTop from './HeaderTop'
import { NavigationContainer } from '@react-navigation/native'
import MyTopTabs from './MyTopTab'
const TopAndHeader = ({navigation}) => {
  return (
   <> 
   <HeaderTop onPress={()=>navigation.navigate("MyTabs")}/>
  
    <MyTopTabs 
    style={{marginTop:-60}}/>
   
   </>
  )
}

export default TopAndHeader

const styles = StyleSheet.create({})