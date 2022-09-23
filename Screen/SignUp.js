import { StyleSheet, Text, View, TouchableOpacity, Image, Platform, Alert, ToastAndroid, Keyboard, ScrollView } from 'react-native'
import React, { useState, createRef } from 'react'
import Header from './Main/Header'
import Images from '../Screen/Main/Images'
import Container from './Main/Container'
import Button from '../Screen/Main/Button'
import imagePath from './Image'
import Checkbox from '../Screen/Main/Checkbox'
import Helper from './lip/Helper'
import { SignUpApi } from './lip/ApiUrl'
import BottomContant from './Main/bottomContant'
const SignUp = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");



  const signupApi = () => {
    var data = {
      email: email,
      password: Password,
      device_token: "fkdkfdkd2929292929",
      device_type: Platform.OS
    }
   Helper.showLoader()
   Helper.makeRequest({url:SignUpApi,method:"POST",data:data}).then((response) => {
    console.log("------------------>>>>>>>>>",response)
   if(response.success == true){
    Helper.setData('token',response.data.jwt)
    Helper.setData('userdata',response.data.user)
    navigation.navigate('Step',{token:response.data.token,email:email})
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
  
  const userEmailInputRef = createRef();
  const userPasswordInputRef = createRef();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <Header
        text="SignUp" />
      <Images />
      <View style={{ marginTop: 30 }}>
        <Container
          placeholder="Email"
          value={email}
          returnKeyType="next"
          onSubmitEditing={() => userPasswordInputRef.current.focus()}
          editable={true}
          onChangeText={(value) => {
            setEmail(value)
          }}
        />
        <Container
          placeholder="Password"
          value={Password}
          editable={true}
          refSet={userPasswordInputRef}
          returnKeyType="done"
          onSubmitEditing={Keyboard.dismiss}
          onChangeText={(value) => {
            setPassword(value)
          }} />
      </View>
      <Checkbox
        text="I agree with Privacy Policy" />

      <View style={{ marginTop: 100 }}>
        <Button
          text="SignUp"
          onPress={signupApi} />
      </View>
      <View>
        <BottomContant
          text="Already have an account?  "
          text1="Login"
          onPress={() => navigation.navigate("Login")} />
      </View>
    </ScrollView>
  )
}

export default SignUp

const styles = StyleSheet.create({})