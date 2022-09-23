
import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ToastAndroid, Alert,ScrollView } from 'react-native'
import Container from './Main/Container'
import Button from '../Screen/Main/Button'
import Images from './Main/Images'
import Header from './Main/Header'
import BottomContant from '../Screen/Main/bottomContant'
import Helper from './lip/Helper'
import { LoginApi } from './lip/ApiUrl'
const Login = ({ navigation }) => {
  const [username, setUserName] = useState("");
  const [Password, setPassword] = useState("");

  const loginApi = () => {
    if (username == "") {
      ToastAndroid.show("Please Enter Email", ToastAndroid.SHORT);

    } else if (Password == "") {
      Alert.alert("", "Please Enter Password")
    } else {

      var data = {
        email: username,
        password: Password,
      }
    Helper.showLoader()
      Helper.makeRequest({ url: LoginApi, method: "POST", data: data }).then((response) => {
        if (response.success == true) {
          Helper.setData('token', response.data.jwt)
          Helper.setData('userdata', response.data.user)

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
  }


  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <Header
        text="Login" />
      <Images />
      <View style={{ marginTop: 30 }}>
        <Container
          value={username}
          setValue={setUserName}
          placeholder="Email / Phone Number"
          onChangeText={(value) => { setUserName(value) }}
        />
        <Container
          value={Password}
          setValue={setPassword}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(value) => { setPassword(value) }}

        />
      </View>


      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
          <Text style={{ textAlign: "center", marginTop: 50, color: "#3c82ff", fontWeight: "500" }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20 }}>
        <Button
          text="Login"
          onPress={loginApi} />
      </View>
      <View>
        <BottomContant
          text="Don’t have an account ?  "
          text1=" Sign Up"
          onPress={() => navigation.navigate("SignUp")} />
      </View>

    </ScrollView>
  )
}

export default Login
const styles = StyleSheet.create({


})