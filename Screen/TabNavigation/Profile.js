import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import image from '../Image';
;
import Helper from '../../Screen/lip/Helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { notificationbutton, profileaccount } from '../lip/ApiUrl';

const Profile = ({ navigation, route }) => {

  const [check, setcheck] = useState(false);
  const [getData, setGetData] = useState("");
  // const[first,setFirst]=useState(route.params?.firstname)
  // const [last,setLast]=useState(route.params?.lastname)
const[firstname,setFirstName]=useState(route.params?.first)
const[lastname,setLastName]=useState(route.params?.last)
  const click = () => {
    setcheck(!check)
  }
  useEffect(() => {
    profileApi()
  }, [])

  const profileApi = () => {
    Helper.showLoader()
    Helper.makeRequest({ url: profileaccount, method: "GET" }).then((response) => {
      console.log("======>>>>>getApi: yrgegrgrygtvgergrgrfhy6h5u7y", response)
      if (response.success == true) {
        setGetData(response.data)
        Helper.hideLoader()
        Helper.showToast(response.message);
      } else {
        Helper.hideLoader()
        Helper.showToast(response.message);
      }
    })
      .catch(err => {
        Helper.showToast(err);
      });

  }




  const NotificationApi = () => {
    var data = {
      notificationValue: check
    }
    Helper.showLoader()
    Helper.makeRequest({ url: notificationbutton, method: "POST", data: data }).then((response) => {
      console.log("0------:    ", response)
      if (response == true) {
        setcheck(!check)
        Helper.hideLoader()
        Helper.showToast(response.message);
      } else {
        Helper.hideLoader()
        Helper.showToast(response.message);
      }
    })
      .catch(err => {
        Helper.showToast(err);
      });

  }




  const logoutClick = () => {
    AsyncStorage.removeItem("token")
    AsyncStorage.removeItem("userData")
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  }

  return (
    <View style={{ backgroundColor: "#eeeeee", flex: 1 }}>
      <ScrollView>
        <View>

          <Image
            source={image.Header}

            style={styles.headerimg} />
        </View>

        <View style={styles.contimg}>
          <Image source={image.Image}
            style={styles.stylimg} />
        </View>
        <View style={styles.maincontainer}>
          <Image
            source={image.Profile}
            style={styles.imagecontainer} />
          <View style={styles.middelcontainer}>
            <Text style={styles.txt1}>
{firstname?.first}{" "}{lastname?.last}
            </Text>
            <Text style={styles.txt2}>
              {getData?.email}
            </Text>
            <TouchableOpacity onPress={() => { logoutClick() }}>
              <View style={styles.signoutcontiner}>
                <Text style={styles.signout}>
                  SignOut
                </Text>

              </View>

            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.maintxtcontainer}>

          <Text style={styles.txt3}>
            Account Settings

          </Text>

          <TouchableOpacity onPress={() => navigation.navigate("AccountSetting", { getData: getData })}>
            <Image source={image.Arrow2}
              style={styles.arrow} />
          </TouchableOpacity>

          <View style={styles.viewback}></View>
          <Text style={styles.txt3}>
            Restaurant History
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("TopAndHeader")}>
            <Image source={image.Arrow2}
              style={styles.arrow} />
          </TouchableOpacity>
          <View style={styles.viewback}></View>
          <Text style={styles.txt3}>
            Change Password
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("ChangePassword")}>
            <Image source={image.Arrow2}
              style={styles.arrow} />
          </TouchableOpacity>
          <View style={styles.viewback}></View>
          <Text style={styles.txt3}>
            Notifications
          </Text>
          <TouchableOpacity onPress={() => { click(), NotificationApi() }} style={{ backgroundColor: "red" }}>
            <Image source={check ? image.On : image.Off}
              style={styles.onoff} />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row",flex:1,alignItems:"center",justifyContent:"center",marginTop:30}}>
          <TouchableOpacity onPress={()=>navigation.navigate("PrivacyPolicy")}>
            <Text style={{right:7,fontSize:20,color:"blue"}}>
PrivacyPolicy
            </Text>
          </TouchableOpacity>
          <Text style={{fontSize:20,color:"blue"}}>
   |
          </Text>
          <TouchableOpacity onPress={()=>navigation.navigate("TermAndCondations")}>
            <Text style={{left:7,fontSize:20,color:"blue"}}>
            TermAndConditions
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  headerimg: {
    height: 60,
    width: 800
  },
  contimg: {
    justifyContent: "center",
    alignItems: "center"
  },
  stylimg: {
    height: 60,
    width: 80,
    marginTop: -60
  },
  maincontainer: {
    marginTop: 30,
    marginTop: 120
  },
  imagecontainer: {
    height: 88,
    width: 88,
    marginLeft: 30
  },
  middelcontainer: {
    marginLeft: 170,
    marginTop: -95
  },
  txt1: {
    color: '#000000',
    fontSize: 26,
    fontWeight: "600"
  },
  txt2: {
    color: "#000000",
    marginTop: 3,
    fontSize: 16
  },
  signoutcontiner: {
    backgroundColor: "#35b09f",
    marginRight: 110,
    marginTop: 10,
    borderRadius: 30
  },
  signout: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center"
  },
  maintxtcontainer: {
    marginTop: 40,
    // backgroundColor: "white",
    marginHorizontal: 20
  },
  txt3: {
    color: "#000000",
    fontSize: 17,
    fontWeight: "700",
    marginTop: 17,
    marginLeft: 30,
    marginBottom: 19
  },
  arrow: {
    height: 20,
    width: 20,
    marginLeft: 290,
    marginTop: -36
  },
  viewback: {
    borderWidth: 1,
    borderColor: "#eeeeee"
  },
  onoff: {
    height: 30,
    width: 45,
    marginLeft: 260,
    marginTop: -43
  }

})