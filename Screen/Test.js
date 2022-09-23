import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
const Test = () => {
  const [value,setValue] = useState(0);
  return (
    <View style={{flex:1}}> 
    {value==0?  
     <View style={{alignItems:"center",justifyContent:"center"
     ,flex:1,}}>
      
        
         
         <TouchableOpacity onPress={()=>{if(value==0){console.log("tyd7idyonfjuikydvalue=0");setValue(value+1) }}} style={{ backgroundColor:"red",marginBottom:10,paddingHorizontal:30,paddingVertical:10,borderRadius:10}}>
      <Text style={{color:"white",fontWeight:"bold",fontSize:20}}>Login</Text>
      </TouchableOpacity>
      </View> 
    :  <View style={{alignItems:"center",justifyContent:"center"
    ,flex:1,}}>
       <TouchableOpacity onPress={()=>{if(value==1){console.log("tyd7idyonfjuikydvalue=1");setValue(value-1);}}} style={{backgroundColor:"blue",marginBottom:10,paddingHorizontal:30,paddingVertical:10,borderRadius:10}}>
    <Text style={{color:"white",fontWeight:"bold",fontSize:20}}>LoggedOut</Text>
    </TouchableOpacity>
    </View> 
    }
    </View>
  )
}

export default Test

const styles = StyleSheet.create({})