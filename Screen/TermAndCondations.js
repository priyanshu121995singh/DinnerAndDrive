import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React,{useState} from 'react'
import imagePath from './Image'
const TermAndCondations = ({navigation}) => {
    const [comment,setComment]=useState()
    const PrivacyApi =()=>{
        var body={
            slug: comment
          }
          Helper.showLoader()
          Helper.makeRequest({url:PrivecyPolicy,method:"POST",data:body}).then((response) => {
           console.log("------------------>>>>>>>>>",response)
          if(response.success == true){
          
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

    <View style={{flex:1}}>
        {/* <WebView source={{ uri: 'https://reactnative.dev/' }} />; */}
    <TouchableOpacity style={{marginHorizontal:20,marginTop:20}} onPress={()=>navigation.navigate("MyTabs")}>
       <Image
       source={imagePath.BlackArrow}
       style={{height:20,width:20}}/>
    </TouchableOpacity>
    <View style={{justifyContent:"center",alignItems:"center",flex:1,marginHorizontal:20}}>
       <Text style={{fontSize:30,fontWeight:"bold",color:"black"}}>
       TermAndCondations
       </Text>
    {/* </View> */}
   {/* <View style={{flex:1,justifyContent:"center",alignItems:"center",marginHorizontal:""}}> */}
       <Text style={{marginTop:20,color:"black",lineHeight:20,}}>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Dis parturient montes nascetur ridiculus mus. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Faucibus turpis in eu mi bibendum neque egestas congue. Varius morbi enim nunc faucibus a pellentesque. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Sagittis vitae et leo duis. Dolor morbi non arcu risus quis. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Adipiscing enim eu turpis egestas pretium. Lacus sed viverra tellus in hac. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra.
       </Text>
    </View>
   </View>
  )
}

export default TermAndCondations

const styles = StyleSheet.create({})