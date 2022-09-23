import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import Arrow from './Main/Arrow'
import Header from './Main/Header'
import Container from './Main/Container'
import Helper from './lip/Helper'
import { changepassword } from './lip/ApiUrl'
const ChangePassword = ({ navigation, route }) => {
  const [password, setpassword] = useState(route.params?.password);
  const [pass, setpass] = useState();
  const [conform, setconform] = useState();
  const ChangeAPI = () => {
    var body = {
      currentPassword: password,
      newPassword: pass
    }
    if (pass != conform) {
      alert('Password not match.');
    }
    Helper.showLoader()
    Helper.makeRequest({ url: changepassword, method: "POST", data: body }).then((response) => {

    }).then((response) => {
      if (response.success == true) {
        Helper.hideLoader()
        Helper.showToast(response.message);
        navigation.navigate('MyTabs')
      } else {
        Helper.hideLoader()
        Helper.showToast(response.message);
      }
    })
      .catch(err => {
        Helper.showToast(err);
        Helper.hideLoader()
      });

  }


  return (
    <View>
      <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>
        <Arrow
          onPress={() => navigation.navigate("MyTabs")} />
      </View>
      <View style={{ marginTop: -125, marginLeft: 40 }}>
        <Header
          text="Change Password" />
      </View>
      <View style={{ marginTop: 120 }}>
        <Text style={{ fontSize: 17, color: "#000000", marginLeft: 20, marginTop: 20 }}>
          Old Password
        </Text>
        <View style={{ marginHorizontal: 10 }}>
          <Container
            placeholder="John"
            value={password}
            keyboardType="numeric"

            onChangeText={(value) => { setpassword(value) }} />
        </View>
        <View>
          <Text style={{ fontSize: 17, color: "#000000", marginLeft: 20, marginTop: 20 }}>
            New Password
          </Text>
          <View style={{ marginHorizontal: 10 }}>
            <Container
              placeholder="Doe"
              keyboardType="numeric"
              value={pass}
              onChangeText={(value) => { setpass(value) }} />
          </View>
          <View>
            <Text style={{ fontSize: 17, color: "#000000", marginLeft: 20, marginTop: 20 }}>
              Confirm New Password
            </Text>
            <View style={{ marginHorizontal: 10 }}>
              <Container
                placeholder="johnd@gmail.com"
                keyboardType="numeric"
                value={conform}
                onChangeText={(value) => { setconform(value) }}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 90, marginBottom: 40 }}>
        <TouchableOpacity onPress={ChangeAPI}>
          <View style={styles.outer}>
            <Text style={styles.button}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ChangePassword

const styles = StyleSheet.create({
  outer: {
    marginHorizontal: 20,
    backgroundColor: "#35b09f",
    paddingVertical: 20,
    borderRadius: 5
  },
  button: {
    textAlign: "center",
    color: "white",
    fontSize: 17
  }
})