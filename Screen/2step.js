import { StyleSheet, AsyncStorage, View, ToastAndroid, ScrollView } from 'react-native'
import React, { useState, useRef } from 'react'
import Header from './Main/Header'
import Container from './Main/Container'
import Button from '../Screen/Main/Button'
import LinkSent from '../Screen/Main/LinkSent'
import Helper from './lip/Helper'
import { verifyotp } from './lip/ApiUrl'
const Step = ({ navigation, route }) => {
  const [code, setcode] = useState();
  const [email, setEmail] = useState(route.params?.email);
  const [token, setToken] = useState(route.params?.token);

  const VerifyOtp = () => {
    var body = {
      token: token,
      otp: code,
      remember: "1",
      deviceId: "asfd12erf34hh",
      email: email,
    }
    Helper.showLoader()
    Helper.makeRequest({url:verifyotp,method:"POST",data:body}).then((response) =>{
     
        if (response.success == true) {
          Helper.setData("userData", response.data.user)
          Helper.setData("token", response.data.jwt)
          navigation.reset({
            index: 0,
            routes: [{ name: 'MyTabs' }],
          });
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
        text="2 Step Verification" />
      <View>
        <LinkSent
          text="Please sign up to enter in a app." />
      </View>
      <View style={{ marginTop: 154 }}>
        <Container
          placeholder="Code"
          value={code}
          keyboardType="numeric"
          onChangeText={(value) => { setcode(value) }} />
      </View>
      <View style={{ marginTop: 190,marginBottom:30 }}>
        <Button
          text="Continue"
          onPress={VerifyOtp} />
      </View>
    </ScrollView>
  )
}

export default Step

const styles = StyleSheet.create({})