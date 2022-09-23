import { StyleSheet, Text, View,Image,FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import image from '../Image';
;
//import MyTabs from './MyTab';
const Notification1 = ({navigation}) => {
   

    const DATA =([
        {
            Name:'Mosaic',
            Distance:'3.0 km',
            Rating:'5.0',
            image:image.Food,
           onPress:()=> navigation.navigate("Hotel1")
        },
        {
            Name:'Hotel Sweet Dream ',
            Distance:'1.0 km',
            Rating:'5.0',
            image:image.Food1
        },
        {
            Name:'Govindam Retreat',
            Distance:'3.0 km',
            Rating:'0.5',
            image:image.Food2
        },
        {
            Name:'Daniels Oriental Kitchen',
            Distance:'3.1 km',
            Rating:'5.0',
            image:image.Food3
        },
        {
            Name:'The Veranda',
            Distance:'3.4 km',
            Rating:'5.0',
            image:image.Food4
        },
        {
            Name:'Steam',
            Distance:'3.5 km',
            Rating:'5.0',
            image:image.Food5
        },
        {
            Name:'Marble Arch',
            Distance:'4.1  km',
            Rating:'5.0',
            image:image.Food6
        },
        {
            Name:'The Rajput Room – Taste ',
            Distance:'3.7 km',
            Rating:'5.0',
            image:image.Food7
        },
        {
            Name:'Peacock Rooftop',
            Distance:'6.0 km',
            Rating:'5.0',
            image:image.Food8
        },
        {
            Name:' Jaipur Adda- Exotic ',
            Distance:'8.0 km',
            Rating:'5.0',
            image:image.Food9
        },
    ]);

    const renderItem=({item})=>{
        return(
            <View>
          <TouchableOpacity onPress={item.onPress}>
           <View style={{marginHorizontal:16,paddingVertical:50,borderRadius:16,backgroundColor:"white",
       marginTop:20}}>
       <Image
       source={item.image}
       style={{height:99,width:130,borderRadius:16,position:"absolute"}}/>
       <Text style={{marginLeft:150,marginTop:-40,fontSize:18,fontWeight:"800",color:"black"}}>
       {item.Name}
       </Text>
       
           </View>
           <View>
       <Text style={{marginLeft:170,marginTop:-60,fontSize:9,fontWeight:"400",color:"black"}}>
     {item.Distance}
       </Text>
       </View>
       <View>
       <Text style={{marginLeft:270,marginTop:-60,fontSize:9,fontWeight:"400",color:"black"}}>
      {item.Rating}
       </Text>
       </View>
       <View>
           <Image 
           source={image.Star}
           style={{marginLeft:290,marginTop:-60,height:13,width:13}}/>
       </View>
       <View>
           <Text style={{marginLeft:170,marginTop:-40,fontSize:9,fontWeight:"800",color:"black"}}>
           Lorem ipsum dolor sit amet, consectetur 
           </Text>
           
       </View>
       <View>
       <Text style={{marginLeft:170,marginTop:-30,fontSize:9,fontWeight:"800",color:"black"}}>
        adipiscing elit, sed do eiusmod tempor incididunt
           </Text>
       </View>
       </TouchableOpacity>
       </View>
        )
    }
  return (
    <View style={{backgroundColor:"#eeeeee",flex:1}}>
       <View>
      
            <Image 
            source={image.Header}
            
            style={{height:60,width:400}}/>
            </View>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate("Filter")}>
                <Image 
                source={image.Filter}
                style={{position:"absolute",marginTop:-40,height:20,width:20,marginLeft:310}}/>
                </TouchableOpacity>
            </View>
            <View style={{justifyContent:"center",alignItems:"center"}}>
            <Image source={image. Image}
            style={{height:60,width:80,marginTop:-60}}/>
           </View>
<FlatList
    
    data={DATA}
    renderItem={renderItem}/>
   
    </View>
  )
}

export default Notification1

const styles = StyleSheet.create({})