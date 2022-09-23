 import { StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid, FlatList } from 'react-native'
  import React, { useEffect, useState } from 'react'
  import RenderList from '../Main/renderList'
  import imagePath from '../Image'
  import Helper from '../lip/Helper'
  import { GoingHere, restaurantslist } from '../lip/ApiUrl'
  // import { StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid, FlatList } from 'react-native'
  // import React, { useEffect, useState } from 'react'
  // import RenderList from '../Main/renderList'
  // import imagePath from '../Image'
  // import Helper from '../lip/Helper'
  // import { restaurantslist } from '../lip/ApiUrl'
  const GoingHeres = ({navigation}) => {
    const [getData, setGetData] = useState([]);
    const [idList, setIdList] = useState("");
  
  
  
    useEffect(() => {
      GoingHereApi();
    }, [])
    const GoingHereApi=()=>{
      Helper.showLoader()
     
      Helper.makeRequest({url:GoingHere,method:"GET"}).then((response)=>{
console.log("======>>>>> GoingHereApi GoingHereApi GoingHereApi GoingHereApi--------: ", JSON.stringify(response))
if (response.success == true) {
Helper.hideLoader()
Helper.showToast(response.message);
} else {
Helper.hideLoader()
Helper.showToast(response.message);
}
})
.catch((error) => {
Helper.showToast(error);
});  
  }
 

// const Notification = ({ navigation, onPress }) => {
  // const [getData, setGetData] = useState([]);
  // const [idList, setIdList] = useState("");



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
      console.log("======>>>>>responseresponse: ", JSON.stringify(response))
     
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


    {if(item.is_going){
    return (
    
      <View>
       
      <TouchableOpacity onPress={() => { navigation.navigate('Hotel1', { id: item._id }) }}>
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
  }}
  }

  return (
    <View style={{ backgroundColor: "#eeeeee", flex: 1 }}>
     
   
     

      <FlatList
        data={getData}
        keyExtractor={(item, index) => { item._id }}
        renderItem={renderItem}
      />

    </View>
  )
}

// export default Notification

// const styles = StyleSheet.create({})
    // const RestaruntApi = () => {
    //    Helper.showLoader()
    //   Helper.makeRequest({ url: restaurantslist, method: "GET" }).then((response) => {
    //     console.log("======>>>>>getApisffsfsfsfrsfsffd111: ", JSON.stringify(response))
       
    //     if (response.success == true) {
    //       setGetData(response.data.list)
    //       setIdList(response.data._id)
    //       Helper.hideLoader()
    //       Helper.showToast(response.message);
    //     } else {
    //       Helper.hideLoader()
    //       Helper.showToast(response.message);
    //     }
    //   })
    //     .catch(err => {
    //       Helper.showToast(err);
    //     });
  
    // }
  //  const renderItem = ({ item }) => {
  
  
  
  //    return (
  //      <View>
  //        <TouchableOpacity onPress={() => { navigation.navigate('Hotel1', { id: item._id }) }}>
  //          <View style={{
  //            marginHorizontal: 16, paddingVertical: 50, borderRadius: 16, backgroundColor: "white",
  //            marginTop: 20
  //          }}>
  //            <Image
  //              source={{ uri: item.image_url }}
  //              style={{ height: 99, width: 130, borderRadius: 16, position: "absolute" }} />
  //            <Text style={{ marginLeft: 150, marginTop: -40, fontSize: 18, fontWeight: "800", color: "black" }}>
  //              {item.name}
  //            </Text>
  
  //          </View>
  //          <View>
  //            <Text style={{ marginLeft: 170, marginTop: -60, fontSize: 9, fontWeight: "400", color: "black" }}>
  //              {item.distance}
  //            </Text>
  //          </View>
  //          <View>
  //            <Text style={{ marginLeft: 270, marginTop: -60, fontSize: 9, fontWeight: "400", color: "black" }}>
  //              {item.rating}
  //            </Text>
  //          </View>
  //          <View>
  //            <Image
  //              source={imagePath.Star}
  //              style={{ marginLeft: 290, marginTop: -60, height: 13, width: 13 }} />
  //          </View>
  
  //        </TouchableOpacity>
  //      </View>
  //    )
  //  }
  
    // return (
    //    <View style={{ backgroundColor: "#eeeeee", flex: 1 }}>
      
    //      {/* {/* <View>
    //      <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
    //        <Image */}
    //   {/*        source={imagePath.Filter}
    //          style={{ position: "absolute", marginTop: -40, height: 20, width: 20, marginLeft: 310 }} />
    //      </TouchableOpacity>
    //    </View> */}
    //    {/* <View style={{ justifyContent: "center", alignItems: "center" }}>
    //      <Image source={imagePath.Image}
    //        style={{ height: 60, width: 80, marginTop: -60 }} />
    //    </View>
  
    //    <FlatList
    //      data={getData}
    //      keyExtractor={(item, index) => { item._id }}
    //      renderItem={renderItem}
    //    />  */}
  
    //   </View>
    // )
  
  
 
export default GoingHeres

const styles = StyleSheet.create({})