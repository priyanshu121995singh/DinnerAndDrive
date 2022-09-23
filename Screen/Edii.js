import { StyleSheet, Text, View,Image,ImageBackground,TouchableOpacity, ScrollView ,RefreshControl,FlatList} from 'react-native'
import React,{useState} from 'react'
import imagePath from './Image'
import Swiper from 'react-native-swiper'
import { Permission,PERMISSION_TYPE } from './lip/AppPermissions'
import LinearGradient from 'react-native-linear-gradient'

const Edii = ({navigation}) => {
    Permission.checkPermission(PERMISSION_TYPE.microphone)

    const [DATA,setDATA] = useState([
        {
            Paul_txt:'Nikita',
            I_like:'I like flowers and turtles!',
            Current_Mood:'Current Mood',
            img:imagePath.Emoji1,
            btn:'View Profile',
            btn2:'Request Reveal'
        },
        {
            Paul_txt:'Nikita',
            I_like:'I like flowers and turtles!',
            Current_Mood:'Current Mood',
            img:imagePath.Emoji2,
            btn:'View Profile',
            btn2:'Request Reveal'
        },
        {
            Paul_txt:'Nikita',
            I_like:'I like flowers and turtles!',
            Current_Mood:'Current Mood',
            img:imagePath.Emoji3,
            btn:'View Profile',
            btn2:'Request Reveal'
        },
        {
            Paul_txt:'Nikita',
            I_like:'I like flowers and turtles!',
            Current_Mood:'Current Mood',
            img:imagePath.Emoji4,
            btn:'View Profile',
            btn2:'Request Reveal'
        },
      
    ])
const INFO =([
{
    Name:'Nikita',
    Date:'4 days ago',
    Thought:'Remember when we sledded in the frozen Lake?? So much fun! Bet you don’t know who this is ;)',
},
{
    Name:'Nikita',
    Date:'5 days ago',
    Thought:'Remember when we sledded in the frozen Lake?? So much fun! Bet you don’t know who this is ;)',
},
{
    Name:'Nikita',
    Date:'4 days ago',
    Thought:'Remember when we sledded in the frozen Lake?? So much fun! Bet you don’t know who this is ;)',
},
{
    Name:'Nikita',
    Date:'4 days ago',
    Thought:'Remember when we sledded in the frozen Lake?? So much fun! Bet you don’t know who this is ;)',
}
])
    const renderItem =({item}) => {
        return(
            <View>
            
          
          <View style={styles.box}>
              <View>
      <Image 
      source={imagePath.Toy}
      style={styles.toy}/>
      </View>
      <Text style={styles.txt}>{item.Paul_txt}</Text>
      <Text style={styles.txt1}>{item.I_like}</Text>
      <Text style={styles.txt2}>{item.Current_Mood}</Text>
      <Image 
      source={item.img}
      style={styles.emoji}/>
          </View>
          <View style={styles.boxs}>
      <TouchableOpacity>
          <View style={styles.button}>
              <Text style={styles.txtbtn}>{item.btn}</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity>
          <View style={styles.button1}>
              <Text style={styles.txtbtn1}>{item.btn2}</Text>
          </View>
      </TouchableOpacity> 
      </View>
    
      
      </View>
        )
    }
const [Refresh,setRefresh]=useState(false)
const clickMe =() =>{
    setRefresh(true)
   setDATA([...DATA,{ Paul_txt:'priyanshu',
   I_like:'I Like to',
   Current_Mood:'Suprise',
   btn:'View Profile',
   btn2:'Request Reveal',}])
    setTimeout(()=>{
        setRefresh(false);
      
    },4000
   );  
   console.log('hiiii'); 
}
const renderInfo =({item})=>{
return(
    <View style={{elevation:10,
        backgroundColor:"white",
        marginHorizontal:20,
        borderRadius:20,
        height:168 ,
        width:227,
        marginTop:40,
        marginBottom:30}}>
    <Image source={imagePath.Toy}
    style={{marginHorizontal:20,
    marginTop:20}}></Image>
    <Text style={{
        marginLeft:80,
        marginTop:-45,
        fontSize:14,
        fontWeight:"bold",
    }}>{item.Name}</Text>
    <Text style={{marginLeft:80,
    color:"#879A9F",
    fontSize:12}}>{item.Date}</Text>
     <View style={{borderWidth:1,borderColor:"#EDF2F4",marginTop:20}}></View>
     <Text style={{
         fontSize:12,
         color:"#63787E",
         marginHorizontal:10,
         marginTop:15
     }}>{item.Thought}</Text>
       </View>
)
}
  return (
     
  <View style={{flex:1}}>
      <ScrollView>
      <View style={{backgroundColor:"#FFFFFF" ,paddingVertical:20}}>
         
               
     <Image
     source={imagePath.Sun}
     style={styles.img}
     ></Image>
     <Text style={styles.text1}>Good Morning, Amber!</Text>
     <Text style={styles.text2}>Thursday, July 17</Text>
    <Text style={styles.text3}> How are you feeling?</Text>
    </View>
     <View>
         <TouchableOpacity>
         <Image
         source={imagePath.Emoji1}
         style={styles.img1}/></TouchableOpacity>
          <TouchableOpacity>
         <Image
         source={imagePath.Emoji2}
         style={styles.img2}/></TouchableOpacity>
          <TouchableOpacity>
         <Image
         source={imagePath.Emoji3}
         style={styles.img3}/></TouchableOpacity>
          <TouchableOpacity>
         <Image
         source={imagePath.Emoji4}
         style={styles.img4}/></TouchableOpacity>
          <TouchableOpacity>
         <Image
         source={imagePath.Emoji5}
         style={styles.img5}/></TouchableOpacity>
    </View>
    <TouchableOpacity onPress={()=> navigation.navigate('MoodHistory')}>
    <View style={styles.btn}>
<Text style={styles.btntext}>View Mood History</Text>
<Image source={imagePath.ArrowPath}
style={styles.arrow}></Image>
    </View>
    </TouchableOpacity>
    <Text style={styles.friend}>Featured Friends</Text>  
    <TouchableOpacity onPress={()=>clickMe()}>
        <RefreshControl
        refreshing={Refresh}
        />
        <Image source={imagePath.Refresh}
        style={{height:20, width:20,marginLeft:380 ,marginTop:-20}}/>
    </TouchableOpacity>
    <FlatList
    horizontal={true}
    data={DATA}
    renderItem={renderItem}/>




<View>
    <Text style={{
        marginHorizontal:20,
         marginTop:15,
         fontSize:12,
         fontWeight:"bold",
         color:"#4E6469"}}
         >Today’s Quote</Text>




    </View>
   <LinearGradient colors={["#1E98D5","#00DBDB"]} style={{flex:1/5, marginTop:20}}>
       <Text style={{textAlign:"center",paddingVertical:40,fontSize:15,fontWeight:"bold",color:"white"}}>Keep looking up… that’s the secret of life!</Text>
   </LinearGradient>


   <FlatList
    horizontal={true}
    data={INFO}
    renderItem={renderInfo}
   />





  
  

    </ScrollView>
  
    </View>
    
  )
}

export default Edii

const styles = StyleSheet.create({
    img:{
        marginLeft:12,
        marginTop:30
    },
    text1:{
        marginLeft:70,
        marginTop:-37,
        fontSize:26,
        fontWeight:"bold",
        color:"#4E6469"
    },
    text2:{
        marginLeft:70,
        fontSize:13,
        color:"#9AACB1"
    },
    img1:{
       marginTop:10,
       marginLeft:26,
    
    },
    img2:{
        marginTop:20,
        marginLeft:76,
        marginTop:-36
    },
    img3:{
        marginTop:20,
        marginLeft:126,
        marginTop:-38
    },
    img4:{
        marginTop:20,
        marginLeft:176,
        marginTop:-39
    },
    img5:{
        marginTop:20,
        marginLeft:226,
        marginTop:-39
    },
    text3:{
        marginTop:110,
        marginLeft:19,
        fontSize:14,
        fontWeight:"bold",
        color:"#4E6469",
        position:"absolute"
    },
    btn:{
        backgroundColor:"#5BD8D6",
        paddingVertical:28,
        marginTop:40,

    },
    btntext:{
        textAlign:"center",
        marginTop:30,
        position:"absolute",
        justifyContent:"center",
        alignItems:"center",
       marginLeft:140 ,
       fontWeight:"bold",
       fontSize:13,
       color:"white"
    },
    arrow:{
        marginLeft:380
    },
    friend:{
        marginTop:20,
        marginLeft:20,
        fontWeight:"bold",
        color:"#4E6469"
    },


// Card Design


    box:{
        marginHorizontal:20,
        height:94,
        width:186,
        marginTop:60,
        paddingVertical:30,
        marginLeft:20,
      paddingHorizontal:40,
       borderTopRightRadius:8,
       borderTopLeftRadius:8,
        backgroundColor:"#2AB9D3",
        
    },
    boxs:{
        marginHorizontal:20,
        paddingVertical:50,
        width:186,
        height:150,
        marginLeft:20,
        paddingHorizontal:50,
       borderBottomRightRadius:8,
       borderBottomLeftRadius:8,
        backgroundColor:"white",
    },
    toy:{
        marginTop:-55,
        marginLeft:25,
        height:60,
        width:60
    },
    txt:{
        textAlign:'center',
        fontSize:11,
        color:"white"
    },
    txt1:{
        fontSize:9,
        textAlign:"center",
        color:"white"
    },
    txt2:{
        fontSize:6,
        textAlign:"center",
        marginTop:9,
        color:"white"
    },
    emoji:{
        height:12,
        width:12,
        marginLeft:80,
        marginTop:-10
    },
    //card buttons
    txtbtn:{
        borderColor:"#2AB9D3",
        borderWidth:1,
        marginLeft:-37,
        marginRight:-37,
        textAlign:"center",
        paddingVertical:10,
        marginTop:-30,
        borderRadius:8,
        color:"#2AB9D3",

    },
    txtbtn1:{
        borderColor:"#2AB9D3",
        borderWidth:1,
        marginLeft:-37,
        marginRight:-37,
        textAlign:"center",
        paddingVertical:10,
        marginTop:10,
        borderRadius:8,
        color:"#FFF", 
        backgroundColor:"#2AB9D3"
    }
})