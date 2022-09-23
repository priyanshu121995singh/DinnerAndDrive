import { StyleSheet, Text, View, TouchableOpacity ,ToastAndroid, ScrollView} from 'react-native'
import React, { useState } from 'react'
import Arrow from './Main/Arrow'
import Header from './Main/Header'
import Container from './Main/Container'
import Checkbox from '../Screen/Main/Checkbox'
import Button from '../Screen/Main/Button'
import BottomContant from '../Screen/Main/bottomContant'
import LinkSent from '../Screen/Main/LinkSent'
import Helper from './lip/Helper'
import { verifyotp } from './lip/ApiUrl'


const Step2 = ({ navigation,route }) => {
  
const [code, setcode] = useState();
 const[email,setemail]=useState(route.params?.email)
 const [token,setToken]=useState(route.params?.token)
 const[type,settype]=useState()

 console.log("---------: ", email+""+token)
 
  const VerifyOtp = () => {
     var body={
       token: token,
      email: email,
     otp:code,
     remember: "1",
     deviceId: "asfd12erf34",
     }
    Helper.showLoader()
    Helper.makeRequest({url:verifyotp,method:"POST",data:body}).then((response) =>{
      if(response.success == true){
      

          navigation.navigate("Link",{email:email})
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
        onPress={() => navigation.navigate("Forgot")} />
      <View>
        <Header
          text="2 Step Verification" />
      </View>
      <LinkSent
        text="A text message with a 6-digit verification code "
        text1={"was just sent to person " +email }/>
      <View style={{ marginTop: 133 }}>
        <Container
          placeholder="Code"
          value={code}
          onChangeText={(value) => { setcode(value) }} />
      </View>
      <View>
        <Checkbox
          text="I agree with Privacy Policy" />
      </View>
      <View>
        <View style={{ marginTop: 90 }}>
          <BottomContant
            text="Didn’t receive an email?"
            text1="Resend Code" />
        </View>
        <View style={{ marginTop: 30 ,marginBottom:40}}>
          <Button
            text="Continue"
            onPress={VerifyOtp} />
        </View>
      </View>
    </ScrollView>
  )
  }

export default Step2

