import { StyleSheet, Text, View ,Image,ToastAndroid, ScrollView} from 'react-native'
import React, { useState } from 'react'
import Header from './Main/Header'
import Container from './Main/Container'
import Button from '../Screen/Main/Button'
import imagePath from './Image'
import Arrow from './Main/Arrow'
import { NavigationContainer } from '@react-navigation/native'
import LinkSent from '../Screen/Main/LinkSent'
import Helper from './lip/Helper'
import { forgotpassword } from './lip/ApiUrl'
const Forgot = ({navigation}) => {
  const[email,setemail]=useState();
const ForgotApi=()=>{
  var data={
    email: email
  }
  Helper.showLoader()
 Helper.makeRequest({url:forgotpassword,method:"POST",data:data}).then((response) => {
  console.log("------------------>>>>>>>>>",response)
  if(response.success == true){
   Helper.setData('token',response.data.jwt)
   Helper.setData('userdata',response.data.user)
   navigation.navigate('Step2',{token:response.data.token,email:email})
   console.log("------------------>>>>>>>>>",response.data.token)
   Helper.hideLoader()
   Helper.showToast(response.message);
 } else {
   Helper.hideLoader()
   Helper.showToast(response.message);
 }
}).catch(err => {
 Helper.showToast(err);
 Helper.hideLoader()
})
 }
  


  return (
    <ScrollView>
       <Arrow 
       onPress={()=>navigation.navigate("Login")}/>
     <View style={{marginTop:-50}}>
     <Header
     text="Forgot Password"
     />
      
      </View>
     
    <LinkSent
    text="Enter email associated with
   "
    text1=" your account"/>
     <View style={{marginTop:150}}>
<Container 
placeholder="Email"
value={email}
setvalue={setemail}
onChangeText={(value)=>setemail(value)}/>
     </View>
     <View style={{marginTop:180,marginBottom:40}}>
         <Button
         text="SEND LINK"
         onPress={ForgotApi}/>
     </View>
     
    </ScrollView>
  )
}

export default Forgot

const styles = StyleSheet.create({
    
})