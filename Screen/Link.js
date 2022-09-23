import { StyleSheet, Text, View, ToastAndroid, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from './Main/Header'
import LinkSent from '../Screen/Main/LinkSent'
import Container from './Main/Container'
import BottomContant from '../Screen/Main/bottomContant'
import Button from '../Screen/Main/Button'
import Helper from './lip/Helper'
import { resetpassword } from './lip/ApiUrl'

const Link = ({ navigation, route }) => {
  const [email, setemail] = useState(route.params?.email);
  const [password, setpassword] = useState();
  const [conform, setconform] = useState();
  console.log("---------: ", email," ",password)
  const ResetPasswordApi = () => {
    var data = {
      email: email,
      password: password
    }
    if (password != conform) {
      alert('Password not match.');
    }
    Helper.showLoader()
    Helper.makeRequest({url:resetpassword,method:"POST",data:data}).then((response)=>{

      if(response.success == true){
       
        navigation.navigate('Login')
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
      <Header
        text="Link Sent" />
      <View>
        <LinkSent
          text="Enter new information below to log in" />
      </View>
      <View style={{ marginTop: 116 }}>
        <Container
          placeholder="Email Address"
          value={email}
          setValue={setemail}
          onChangeText={(value) => { setemail(value) }} />
        <Container
          placeholder="New Password"
          value={password}
          setValue={setpassword}
          onChangeText={(value) => { setpassword(value) }} />
        <Container
          placeholder="Confirm New Password"
          value={conform}
          setValue={setconform}
          onChangeText={(value) => { setconform(value) }} />
      </View>
      <View style={{ marginTop: 70 }}>
        <BottomContant
          text="Didn’t receive the link?"
          text1="Send Code"
        />
      </View>
      <View style={{ marginTop: 30,marginBottom:40 }}>
        <Button
          text="Save"
          onPress={ResetPasswordApi} />
      </View>
    </ScrollView>
  )
}

export default Link

const styles = StyleSheet.create({})