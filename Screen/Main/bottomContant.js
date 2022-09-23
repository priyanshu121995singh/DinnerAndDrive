import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const BottomContant = ({text,text1,onPress}) => {
  return (
      <View style={{justifyContent:"center",alignItems:"center",flexDirection:"row",flex:1,marginTop:20,marginBottom:20}}>
  
    <Text style={{fontSize:16,color:"#a3a3a3",alignItems:"center"}}>
    {text}
    </Text>



  <TouchableOpacity onPress={onPress}>
    <Text style={{fontSize:16,color:"#3c82ff"}}>
     {text1}
    </Text>
  </TouchableOpacity>
</View>

  )
}

export default BottomContant

const styles = StyleSheet.create({})