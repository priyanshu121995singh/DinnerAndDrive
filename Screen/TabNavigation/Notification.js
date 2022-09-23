import { StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid, FlatList,PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import RenderList from '../Main/renderList'
import imagePath from '../Image'
import Helper from '../lip/Helper'
import { restaurantslist } from '../lip/ApiUrl'

const Notification = ({ navigation,route }) => {
  const [data, setdata] = useState(route.params?.data);
  const [getData, setGetData] = useState([]);
  const [idList, setIdList] = useState("");
  const proceed = () => {
    alert('');
  };
 console.log("dataaa--------------------------------------------------------",data)
  const oncomment= async () => {
    // We need to ask permission for Android only
    if (Platform.OS === 'android') {
      // Calling the permission function
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
         
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Permission Granted
        proceed();
      } else {
        // Permission Denied
        alert('CAMERA Permission Denied');
      }
    } else {
      proceed();
    }
  };
 
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      RestaruntApi();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
   
  }, [])
 

  const RestaruntApi = () => {

     Helper.showLoader()
    Helper.makeRequest({ url: restaurantslist, method: "GET" }).then((response) => {
      console.log("======>>>>>getApisffsfsfsfrsfsffd111: ", JSON.stringify(response))
     
      if (response.success == true) {
        setGetData(response.data.list)
        setIdList(response.data._id)
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
  const renderItem = ({ item }) => {



    return (
      <View>
        <TouchableOpacity onPress={() => { navigation.navigate('Hotel1', { id: item._id }),oncomment() }}>
          <View style={{
            marginHorizontal: 16, paddingVertical: 50, borderRadius: 16, backgroundColor: "white",
            marginTop: 20
          }}>
            <Image
              source={{ uri: item.image_url }}
              style={{ height: 99, width: 130, borderRadius: 16, position: "absolute" }} />
            <Text style={{ marginLeft: 150, marginTop: -40, fontSize: 18, fontWeight: "800", color: "black" }}>
              {item.name}
            </Text>

          </View>
          <View>
            <Text style={{ marginLeft: 170, marginTop: -60, fontSize: 9, fontWeight: "400", color: "black" }}>
              {item.distance}
            </Text>
          </View>
          <View>
            <Text style={{ marginLeft: 270, marginTop: -60, fontSize: 9, fontWeight: "400", color: "black" }}>
              {item.rating}
            </Text>
          </View>
          <View>
            <Image
              source={imagePath.Star}
              style={{ marginLeft: 290, marginTop: -60, height: 13, width: 13 }} />
          </View>

        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={{ backgroundColor: "#eeeeee", flex: 1 }}>
      <View>
        <Image
          source={imagePath.Header}
          style={{ height: 60, width: 400 }} />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
          <Image
            source={imagePath.Filter}
            style={{ position: "absolute", marginTop: -40, height: 20, width: 20, marginLeft: 310 }} />
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image source={imagePath.Image}
          style={{ height: 60, width: 80, marginTop: -60 }} />
      </View>

      <FlatList
        data={getData}
        keyExtractor={(item, index) => { item._id }}
        renderItem={renderItem}
      />

    </View>
  )
}

export default Notification

const styles = StyleSheet.create({})