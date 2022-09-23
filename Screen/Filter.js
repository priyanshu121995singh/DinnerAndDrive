import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import imagePath from './Image'
import Arrow from './Main/Arrow'
import Slider from 'react-native-slider'
import Button from '../Screen/Main/Button'
import Helper from './lip/Helper'
import { Filterapi, GetcatagoriId } from './lip/ApiUrl'
import { SelectMultipleButton, SelectMultipleGroupButton } from 'react-native-selectmultiple-button'
import { value } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes'

const Filter = ({ navigation }) => {
     const [catagoriId, setCatagoriId] = useState([]);

     useEffect(() => {
          GetCatagoriAPI()
     }, [])

     const GetCatagoriAPI = () => {
          Helper.showLoader()
          Helper.makeRequest({ url: GetcatagoriId, method: "GET" }).then((response) => {
               //console.log("======>>>>>getApi-------->>>: ", JSON.stringify(response))
               if (response.success == true) {
                    setCatagoriId(response.data.groupedItems)
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


     const FilterAPI = () => {
          var data = {
               categoryId: [catagoriId]
          }

          Helper.showLoader()
          Helper.makeRequest({ url:Filterapi, method: "POST", data: data }).then((response) => {
              console.log("---------: ", response)
               if (response.success == true) {
                    navigation.navigate('MyTabs')
                    Helper.hideLoader()
                    Helper.showToast(response.message);
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
     // const [color, setcolor] = useState(null)
     // let [select, setselect] = useState(null)
     // let arr1 = [];
     // const selectColor = (categoryId) => {
     //      if (arr1.length > 0) {
     //           if (arr1.includes(categoryId.toString())) {

     //           } else {
     //                arr1.push(categoryId.toString())
     //                console.log("---------->>>>>>>>.", arr1)
     //           }
     //      } else {
     //           arr1.push(categoryId.toString())
     //           console.log("---------->>>>>>>>.111", arr1)
     //      }


     //         setcolor(categoryId)

     // }
     // const data = ([
     //      {
     //           name:"chikken"
     //      },
     //      {
     //           name:"chikken"
     //      },
     //      {
     //           name:"chikken"
     //      },
     //      {
     //           name:"chikken"
     //      },
     //      {
     //           name:"chikken"
     //      },
     //      {
     //           name:"chikken"
     //      },
     //      {
     //           name:"chikken"
     //      },
     // ]);
     // const [foodid,setFoodid]=useState()
    
     let arr = [];
     catagoriId.map(data => {
          let a = 0;
          data.foodItems.map(item => {
               ++a;
               if (a == 1) {
                  
                    arr.push({ value: item.food_name + item.categoryId , item: item.categoryId });
               }
          })
     })
     // console.log("###########################arrarrarrarr",JSON.stringify( catagoriId))
     // const renderitem = ({ item, index }) => {
     //      console.log("###########################",catagoriId)
     //      {
     //      //    arr1.map(x=>{
     //      //      return(
     //      //           {}
     //      //      )
     //      //    })
     //           // if (arr1.length > 0) {
     //           //       console.log("------include11");
     //           //           if (arr1.includes(item.categoryId.toString())) {
     //           //                console.log("------include");
     //           //                return (
     //           //                     <TouchableOpacity style={{ paddingHorizontal: 20, marginTop: 10, borderRadius: 10, paddingVertical: 20, marginHorizontal: 30, flex: 1, alignContent: "center", backgroundColor: "white" }} onPress={() => { selectColor(item.categoryId) }}>

     //           //                          <Text style={{ textAlign: "center", flex: 1, fontSize: 15, color: "black", fontWeight: "500" }}>
     //           //                               {item.food_name}
     //           //                          </Text>

     //           //                     </TouchableOpacity>
     //           //                )
     //           //           }

     //           // } else {
     //                return (
     //                     <TouchableOpacity style={{ paddingHorizontal: 20, marginTop: 10, borderRadius: 10, paddingVertical: 20, marginHorizontal: 30, flex: 1, alignContent: "center", backgroundColor:color == item.categoryId? "lightblue":"white" }} onPress={() => { selectColor(item.categoryId) }}>

     //                          <Text style={{ textAlign: "center", flex: 1, fontSize: 15, color: "black", fontWeight: "500" }}>
     //                               {item.food_name}
     //                          </Text>

     //                     </TouchableOpacity>
     //                )
     //           }
     //      // }

     // }

     const [range, setrange] = useState();

     return (
          <ScrollView>
               <View>

                    <ImageBackground
                         source={imagePath.Header}

                         style={{ height: 60, width: "100%" }}>

                         <View style={{ flexDirection: "row", justifyContent: "center", top: 10 }}>
                              <TouchableOpacity onPress={() => navigation.navigate("MyTabs")}>
                                   <Image source={imagePath.WhiteArrow}
                                   />
                              </TouchableOpacity>
                              <Text style={{ fontSize: 27, color: '#ffffff', fontWeight: "600", textAlign: "center", flex: 1 }}>Filter</Text>
                         </View>
                    </ImageBackground>
               </View>
               {/* //1 
   
   <TouchableOpacity onPress={()=>{if(color == 'black' && bgcolor == 'white')
   {setcolor('white');setbgcolor('#33d5bb')}
   else if(color == 'white' && bgcolor == '#33d5bb')
   {setcolor('black');setbgcolor('white')}}}>
     <View style={{marginRight:210,marginLeft:30,borderRadius:10,paddingVertical:10,backgroundColor:bgcolor,marginTop:40}}>
<Text style={{textAlign:"center",fontSize:18,color:color,fontWeight:"500"}}>Top Rated</Text>
     </View>
     </TouchableOpacity>
     {/* 2 
     <TouchableOpacity onPress={()=>
          {if(color1 == 'black' && bgcolor1 == 'white')
          {setcolor1('white');setbgcolor1('#33d5bb')}
          else if(color1 == 'white' && bgcolor1 == '#33d5bb')
          {setcolor1('black');setbgcolor1('white')}}} >
     <View style={{marginRight:30,marginLeft:210,borderRadius:10,paddingVertical:10,backgroundColor:bgcolor1,marginTop:-47}}>
<Text style={{textAlign:"center",fontSize:18,color:color1,fontWeight:"500"}}>Best View</Text>
     </View>
     </TouchableOpacity>
    


    {/* 3 
    <TouchableOpacity onPress={()=>
          {if(color2 == 'black' && bgcolor2 == 'white')
          {setcolor2('white');setbgcolor2('#33d5bb')}
          else if(color2 == 'white' && bgcolor2 == '#33d5bb')
          {setcolor2('black');setbgcolor2('white')}}} >
     <View style={{marginRight:210,marginLeft:30,borderRadius:10,paddingVertical:10,backgroundColor:bgcolor2,marginTop:40}}>
<Text style={{textAlign:"center",fontSize:18,color:color2,fontWeight:"500"}}> Best Menu</Text>
     </View>
     </TouchableOpacity>
     {/* 4 
     <TouchableOpacity onPress={()=>
          {if(color3 == 'black' && bgcolor3 == 'white')
          {setcolor3('white');setbgcolor3('#33d5bb')}
          else if(color3 == 'white' && bgcolor3 == '#33d5bb')
          {setcolor3('black');setbgcolor3('white')}}} >
     <View style={{marginRight:210,marginLeft:30,borderRadius:10,paddingVertical:10,backgroundColor:bgcolor3,marginTop:40}}>
<Text style={{textAlign:"center",fontSize:18,color:color3,fontWeight:"500"}}> Service</Text>
     </View>
     </TouchableOpacity>




     {/* left 
     <TouchableOpacity onPress={()=>
          {if(color4 == 'black' && bgcolor4 == 'white')
          {setcolor4('white');setbgcolor4('#33d5bb')}
          else if(color4 == 'white' && bgcolor4 == '#33d5bb')
          {setcolor4('black');setbgcolor4('white')}}} >
     <View style={{marginRight:30,marginLeft:210,borderRadius:10,paddingVertical:10,backgroundColor:bgcolor4,marginTop:-47}}>
<Text style={{textAlign:"center",fontSize:18,color:color4,fontWeight:"500"}}>Food Quality</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>
          {if(color5 == 'black' && bgcolor5 == 'white')
          {setcolor5('white');setbgcolor5('#33d5bb')}
          else if(color5 == 'white' && bgcolor5 == '#33d5bb')
          {setcolor5('black');setbgcolor5('white')}}} >
     <View style={{marginRight:30,marginLeft:210,borderRadius:10,paddingVertical:10,backgroundColor:bgcolor5,marginTop:-131}}>
<Text style={{textAlign:"center",fontSize:18,color:color5,fontWeight:"500"}}>WiFi</Text>
     </View>
     </TouchableOpacity>*/}

               {/* <View>
                         <FlatList
                              data={arr}
                              // style={{ width: "100%" }}
                              numColumns={2}
                              // showsVerticalScrollIndicator={false}
                              // contentContainerStyle={{ marginHorizontal: 20 }}
                              renderItem={renderitem}
                         />
                    </View> */}
               <View style={{ marginHorizontal: 30 }}>
                    <SelectMultipleGroupButton
                         multiple={true}
                         group={arr}

                         // defaultSelectedIndexes={[0]}
                         textStyle={{ textAlign: "center", fontSize: 15, color: "black", fontWeight: "500", paddingHorizontal: 15 }}
                         buttonViewStyle={{ marginTop: 10, borderRadius: 10, alignContent: "center", backgroundColor: "white" }}
                         highLightStyle={{
                              borderColor: 'transparent', textColor: 'black', backgroundColor: 'white',
                              borderTintColor: 'transparent', textTintColor: 'black', backgroundTintColor: 'skyblue'
                         }}
                         singleTap={(value) => console.log("-----arr_idarr_idarr_id", value )}
                         onSelectedValuesChange={(selectedValues) => console.log("-----selectedValues: ", selectedValues)}
                         containerViewStyle={{ flexDirection: "row", height: 550, width: "100%", justifyContent: 'space-between' }}
                    />
               </View>



               <View >
                    <Text style={{ fontSize: 22, color: "#000000", fontWeight: "600", marginLeft: 40, marginTop: 40 }}>Distance</Text>
               </View>
               <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20, marginTop: 30 }}>
                    <Text>1 mile</Text>
                    <Text>200 mile</Text>
               </View>
               <View style={{ marginTop: 2 }}>

                    <Slider
                         marginLeft={30}
                         marginRight={30}
                         value={200}
                         minimumValue={1}
                         maximumValue={200}
                         trackStyle={styles.track}
                         thumbStyle={styles.thumb}
                         minimumTrackTintColor='white'
                         onValueChange={(value) => setrange(value)}
                    />

               </View>
               <View style={{ marginLeft: 180 }}>
                    <Text style={{ color: "#000000", fontSize: 10 }}>
                         UpTo {Math.floor(range * 1)} miles
                    </Text>
               </View>

               <View style={{ marginTop: 120 }}>
                    <Button
                         text="Save"
                         onPress={FilterAPI} />
               </View>
          </ScrollView>
     )
}

export default Filter



const styles = StyleSheet.create({
     track: {
          height: 10,
          borderRadius: 4,
          backgroundColor: 'white',

     },
     thumb: {
          width: 20,
          height: 20,
          backgroundColor: "#4864db",
          borderColor: '#4864db',
          borderWidth: 5,
          borderRadius: 10,

     }
})
