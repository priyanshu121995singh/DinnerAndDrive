import { StyleSheet, Text, View,Image,TouchableOpacity,FlatList, ImageBackground, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import imagePath from './Image'
import SearchBar from 'react-native-searchbar';
import Arrow from '../Screen/Main/Arrow'
import { GetReview } from './lip/ApiUrl';
import Helper from './lip/Helper';

const Review = ({navigation,route}) => {
  useEffect(() => {
    ReviewApi()
}, [])
  const[restaurentid,setrestaurentid]=useState(route.params?.restaurentid)
  const[name,setName]=useState(route.params?.name)
  const[data,setdata]=useState([])
  console.log("====-=-=-=-=-=-=-=-=--==-=-",data)
  const ReviewApi = () => {
    Helper.showLoader()

    Helper.makeRequest({ url:GetReview + `${restaurentid}`, method: "GET" }).then((response) => {
        console.log("======>>>>>getApiGetReviewGetReviewGetReviewGetReview--------: ", JSON.stringify(response))
        //setFirstName(data.response)
        if (response.success == true) {
          setdata(response.data.reviews.reverse())
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
let arrlength = data.length;;
let sumRating = 0;
data.map(x=>{
  sumRating+=x.starrating
})
console.log("renderItemrenderItemrenderItemrenderItem",sumRating)
let percentage = sumRating/arrlength;
   
    const renderItem=({item})=>{
      let date = item.created.split("T");
      // console.log("renderItemrenderItemrenderItemrenderItem",date)
      
return(
    <View style={styles.mainContainer}>
    <Image
    source={{uri:item.image[0]}}
    style={styles.humanimg}/>
    <View style={{marginTop:8}}>
    <Text style={styles.humantxt}>
       {item.userId.firstname+" "+item.userId.lastname}
    </Text>
    </View>
    <View style={{left:260,top:-38}}>
    <Text style={styles.time}>
{date[0]}
    </Text>
    </View>
    <View style={{marginTop:-35}}>
    <Text style={styles.txt2}>
   {item.comment}
    </Text>
    </View>
    <View style={{flexDirection:"row",left:30,marginTop:10}}>
     <Text style={{fontSize:12}}>{item.starrating}</Text>
            <Image
            source={imagePath.Star}
            style={{height:11,width:12,top:3}}/>
            </View>
            </View>
)
    }
    const [search, SetSearch] = useState();
    const onClick = () => {
        SetSearch(!search)
    };
   
  return (
      <View style={{backgroundColor:"#eeeeee",flex:1}}>
    <View>
                <Image
                    source={imagePath.Header}

                    style={styles.headerimg} />

            </View>

            <View style={styles.headerimgcontent}>
              <Text style={{fontSize:20,fontWeight:"bold",color:"white",marginTop:-50}}>
                Review
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Hotel1',{review:percentage.toFixed(1)})}>
                <View>
                    <Image source={imagePath.WhiteArrow}
                        style={styles.whiteArrow} />
                </View>
            </TouchableOpacity>
            <View>
                {search ? <View style={{ marginTop: -65 }}>

                    <TextInput
                        style={styles.textinput}
                        
                    />
                    <TouchableOpacity style={{flex:1,flexDirection:"row-reverse"}}onPress={() => { onClick(); }}>
                        <Image
                            source={imagePath.Cross}
                            style={styles.crossimg} />
                    </TouchableOpacity>


                </View> :
                    <TouchableOpacity onPress={() => { onClick(); }}>
                        <View style={{flex:1,flexDirection:"row-reverse",marginHorizontal:20}}>
                            <Image
                                source={imagePath.Search}
                                style={styles.searchimg} />
                        </View>
                    </TouchableOpacity>}
            </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginTop:30}}> 
          <Text style={{fontSize:20,fontWeight:"bold",color:"black"}}>
        {name.name}
        </Text>
        <View style={{flexDirection:"row",alignItems:"center"}}>
        <Text >{percentage.toFixed(1)}</Text>
        <Image
        source={imagePath.Star}
        style={styles.starimg}/>
        </View>
       
        </View>
     
        <FlatList
 
 data={data}
 renderItem={renderItem}
 />
        </View>
  )
}

export default Review

const styles = StyleSheet.create({
    headerimg:
  {
    height:60,
    width:"100%"
  },
  searchimg:
    {
     justifyContent:"center",
    
      height:20,
      width:20,
    
    },
    favorite:{
    fontSize:20,
     marginTop:40 ,
     marginHorizontal:40,
     color:"#000000"
    },
    favorite2:{
fontSize:14,
    },
  container2:{
    flexDirection:"row",
    marginLeft:280,
    marginTop:-20,
    zIndex:1
  },
  Header:
    {
        marginTop:-35,
        color:"#ffffff",
        fontSize:27,
        fontWeight:"500"
    },
  mainContainer:{
    backgroundColor:"#e6e6e6",
    marginHorizontal:20,
    borderRadius:12,
    paddingVertical:30,
    top:45,
    flex:1,
    marginBottom:20
  },
  humanimg:{
    height:43,
    width:43,
    marginTop:-18,
    borderRadius:50,
    marginHorizontal:20
  },
humantxt:{
    fontSize:12,
    fontWeight:"500",
    color:"black",
    marginLeft:80,
    marginTop:-39
},
txt2:{
    marginHorizontal:40,
    fontSize:10,
    left:40,
    lineHeight:13,
    letterSpacing:-0.1,
    top:15
},
time:{
    fontSize:9
},
crossimg: {
  height: 23,
  width: 24,
  justifyContent:"flex-end",  
  top: -45
},
searchimg: {
 
  marginTop: -35,
  height: 20,
  width: 20
},
textinput: {
  height: 63,
  borderWidth: 1,
  paddingLeft: 20,
width:"100%",
  borderColor: "#009688",
  backgroundColor: "white"
},
headerimg: {
  height: 60,
  width: "100%"
}, headerimgcontent: {
  justifyContent: "center",
  alignItems: "center"
},contentimg: {
  height: 60,
  width: 80,
  marginTop: -60
},  whiteArrow: {
  marginTop: -44,
  marginHorizontal: 10
},
})