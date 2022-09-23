import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import imagePath from './Image'
import LinearGradient from 'react-native-linear-gradient'

const Eddi1 = () => {

    const [Data, setData] = useState([
        {
            Paul_txt: 'Nikita',
            I_like: 'I like flowers and turtles!',
            Current_Mood: 'Current Mood',
            img: imagePath.Emoji1,
            btn: 'View Profile',
            btn2: 'Request Reveal'
        },
        {
            Paul_txt: 'Nikita',
            I_like: 'I like flowers and turtles!',
            Current_Mood: 'Current Mood',
            img: imagePath.Emoji1,
            btn: 'View Profile',
            btn2: 'Request Reveal'
        },
        {
            Paul_txt: 'Nikita',
            I_like: 'I like flowers and turtles!',
            Current_Mood: 'Current Mood',
            img: imagePath.Emoji1,
            btn: 'View Profile',
            btn2: 'Request Reveal'
        },
    ])



    const [DATA,setDATA]=useState([
        {
            name:'Nikita',
            date:"5 days ago",
            description:" Remember when we sledded"
        },
        {
            name:'Nikita',
            date:"5 days ago",
            description:" Remember when we sledded in "
        },
        {
            name:'Nikita',
            date:"5 days ago",
            description:" Remember when we sledded in the frozen "
        },
        {
            name:'Nikita',
            date:"5 days ago",
            description:" Remember when we sledded in the frozen Lake??"
        }
    ])

    const renderItem = ({ item }) => {
        return (
            <View style={{ backgroundColor: "white", borderRadius: 10, elevation: 5, margin: 5, marginTop: 20 }}>
                <View style={{ backgroundColor: "#2AB9D3", height: 100, width: 180, borderTopLeftRadius: 10, borderTopRightRadius: 10, alignItems: "center", }}>
                    <View style={{ marginTop: -20 }}>
                        <Image
                            source={imagePath.Toy}
                            style={{ height: 40, width: 40, resizeMode: "contain" }} />
                    </View>
                    <Text style={{ fontSize: 11, color: "white", marginTop: 6 }}>
                        {item.Paul_txt}
                    </Text>
                    <Text style={{ fontSize: 9, color: "white" }} >
                        {item.I_like}
                    </Text>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <Text style={{ fontSize: 10, color: "white" }}>
                            {item.Current_Mood}
                        </Text>
                        <Image
                            source={item.img}
                            style={{ height: 15, width: 15, }} />
                    </View>
                </View>
                <View style={{
                    paddingVertical: 6, borderWidth: 1, marginHorizontal: 0,
                    borderRadius: 7, borderColor: "#2AB9D3", marginTop: 15, marginHorizontal: 15
                }}>
                    <Text style={{ textAlign: "center", fontSize: 11, color: "#2AB9D3" }}>
                        View Profile
                    </Text>
                </View>
                <View style={{
                    paddingVertical: 6, backgroundColor: "#2AB9D3",
                    marginTop: 10, borderRadius: 7, borderColor: "#2AB9D3", marginBottom: 15, marginHorizontal: 15
                }}>
                    <Text style={{ textAlign: "center", fontSize: 11, color: "white" }}>
                        Send Edii
                    </Text>
                </View>
            </View>
        )
    }
    const renderRecent = ({item})=>{
        return(
           
            <View style={{backgroundColor: "#FFFFFF", borderRadius: 10, elevation: 5, margin: 5, marginTop: 20,paddingVertical:40 ,marginHorizontal:20 }}>
         
                    <View style={{ 
       top:-20,
       flexDirection:"row",
       alignItems:"center",
       width:"40%",height:100 ,
        marginHorizontal:20}}>
        
       
            <Image
                        source={imagePath.Toy}
                        style={{ height: 60, width: 60 }} />
                        <View style={{ marginLeft:20}}>
                        <Text style={{color:"#63787E",fontSize:12,color:"#4E6469",fontWeight:"bold"}}>
                      {item.name}
                    </Text>
                    <Text style={{color:"#879A9F",fontSize:11}}>
                       {item.date}
                    </Text>
                        </View>
                        <View >

<Image 
source={imagePath.Emote}
style={{height:70,width:70}}/>
  
</View>
                 
                  
                    </View>
                  
                    <View style={{ borderWidth: 1, borderColor: "#97B8C329" }}>

                    </View>
                    <View style={{justifyContent:"flex-start"}}>
                    <Text style={{textAlign:"auto",marginHorizontal:20,lineHeight:15,marginTop:10,fontSize:12,color:"#63787E"}}>
                       {item.description}
                    </Text>
                    </View>
                   
                </View>
          
        )
    }

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.whiteContainerCss}>
                <Image
                    source={imagePath.Sun}
                    style={styles.whiteContainerImageCss} />
                <View>
                    <Text style={styles.whiteContainerInnerText}>Good Morning, Amber!</Text>
                    <Text style={styles.whiteContainerInnerText1}>Thursday, July 17</Text>
                </View>
            </View>
            <View style={styles.fellingCss}>
                <Text style={styles.fellingTextCss}>
                    How are you feeling?
                </Text>
                <View style={styles.fellingImageContainerCss}>
                    <Image
                        source={imagePath.Emoji1}
                        style={styles.CommonEmojiFellingCss} />
                    <Image
                        source={imagePath.Emoji2}
                        style={styles.CommonEmojiFellingCss} />
                    <Image
                        source={imagePath.Emoji3}
                        style={styles.CommonEmojiFellingCss} />
                    <Image
                        source={imagePath.Emoji4}
                        style={styles.CommonEmojiFellingCss} />
                </View>

            </View>
            <View style={{ backgroundColor: "#5BD8D6", marginTop: 20, paddingVertical: 20, width: "100%", flexDirection: "row", justifyContent: "center", }}>
                <Text style={{ color: "white", fontWeight: "700", flex: 1, textAlign: "center" }}>View Mood History</Text>
                <TouchableOpacity>
                    <Image source={imagePath.ArrowPath}
                        style={{}} />
                </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 20, marginTop: 30, flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ color: "#4E6469", fontWeight: "bold", fontSize: 12 }}>Featured Friends</Text>
                <Image
                    source={imagePath.Refresh}
                    style={{ height: 30, width: 30 }} />
            </View>
            <View style={{}}>
                <FlatList
                    horizontal={true}
                    data={Data}
                    renderItem={renderItem} />
            </View>
            <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                <Text style={{ fontSize: 12, color: "#4E6469", fontWeight: "bold" }}>
                    Today’s Quote
                </Text>
            </View>
            <View style={{ backgroundColor: "#5BD8D6", marginTop: 20, paddingVertical: 50, width: "100%", flexDirection: "row", justifyContent: "center", }}>
                <Text style={{ color: "white", fontWeight: "700", flex: 1, textAlign: "center" }}>Keep looking up… that’s the secret of life!</Text>

            </View>

            <View style={{ marginTop: 20, marginBottom: 20, marginHorizontal: 20 }}>
                <Text style={{ fontSize: 12, color: "#4E6469", fontWeight: "bold" }}>
                    Recent Edii’s
                </Text>
              
            </View>
            <View style={{marginBottom:140}}>
            <FlatList
                    horizontal={true}
                    data={DATA}
                    renderItem={renderRecent} />
           
</View>
        </ScrollView>
    )
}

export default Eddi1

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    whiteContainerCss: {
        backgroundColor: "white",
        height: "15%",
        width: "100%",
        flexDirection: "row",
        alignItems: "center"
    },
    whiteContainerImageCss: {
        marginHorizontal: 20,
        resizeMode: "contain"
    },
    whiteContainerInnerText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#4E6469"
    },
    whiteContainerInnerText1: {
        fontSize: 13,
        color: "#9AACB1"
    },
    fellingCss: {
        marginHorizontal: 20
    },
    fellingTextCss: {
        fontSize: 12,
        color: "#4E6469",
        fontWeight: "bold",
        marginTop: 20
    },
    CommonEmojiFellingCss: {
        height: 38,
        width: 38,
        marginTop: 10,
        margin: 10
    },
    fellingImageContainerCss: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    }
})