import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LinkSent = ({text,text1}) => {
  return (
    <View>
     <View>
     <Text style={{textAlign:"center" ,fontSize:14,marginTop:10}}>{text}

</Text>
<Text  style={{textAlign:"center"}}>{text1}</Text>
     </View>
    </View>
  )
}

export default LinkSent

const styles = StyleSheet.create({})