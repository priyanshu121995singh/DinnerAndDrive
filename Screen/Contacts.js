import { StyleSheet, Text, View, ScrollView, TextInput, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import imagePath from './Image'

const Contacts = () => {
  const [Data, setData] = useState([
    {
      Name: "Martin Combs",
      Message: " Hey!I remember when ",
      Time: "7 hrs ago",
      image: imagePath.Boy,
      Dot: imagePath.PinkDot,
      Emote: imagePath.EdiiEmote
    },
    {
      Name: "Beth Drew",
      Message: " Hey!I remember when ",
      Time: "6 hrs ago",
      image: imagePath.Girl,
      Emote: imagePath.EdiiEmote2
    },
    {
      Name: "Sarah Smith",
      Message: " Hey!I remember when ",
      Time: "5 hrs ago",
      image: imagePath.Girl2,
      Dot: imagePath.PinkDot,
      Emote: imagePath.EdiiEmote3
    },
    {
      Name: "Kyle Combs",
      Message: " Hey!I remember when ",
      Time: "4 hrs ago",
      image: imagePath.Boy2
    },
    {
      Name: "Aaron Mars",
      Message: " Hey!I remember when ",
      Time: "3 hrs ago",
      image: imagePath.Girl3
    },
    {
      Name: "Stevie Dent",
      Message: " Hey!I remember when ",
      Time: "2 hrs ago",
      image: imagePath.Boy3
    }
  ])
  const renderItem = ({ item }) => {
    return (
      <View style={{ backgroundColor: "white", paddingVertical: 20, marginTop: 5, flexDirection: "row", paddingHorizontal: 20 }}>
        <View>
          <Image
            source={item.image} />
          <Image
            source={item.Dot}
            style={{ position: "absolute", marginLeft: -9, height: 15, width: 15 }} />
          <Image
            source={item.Emote}
            style={{ position: "absolute", top: -22, left: 14, height: 65, width: 65 }} />
        </View>
        <View style={{ flex: 1,marginLeft:10 }}>
          <Text style={{ fontSize: 17, color: "#304145", fontWeight: "600" }}>
            {item.Name}
          </Text>
          <Text style={{ fontSize: 14, color: "#304145" }}>
            {item.Message}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center",backgroundColor:"red",alignSelf:"flex-start" }}>
          <Text>{item.Time}</Text>
          <TouchableOpacity>
            <Image
              source={imagePath.SideArrow} style={{height:16,width:16,resizeMode:"contain"}}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  return (
    <ScrollView style={{ backgroundColor: "#f8f8f8", flex: 1 }}>
      <View style={{ backgroundColor: "#D9E5F2", marginHorizontal: 20, borderRadius: 20, marginTop: 20 }}>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20 }}>
          <Image
            source={imagePath.Union}
            style={{ height: 15, width: 15, marginTop: 17 }} />
          <TextInput
            placeholder='Search for messages or people…'
            style={{ fontSize: 13 }} />

          <Image
            source={imagePath.Icon}
            style={{ height: 15, width: 20, marginTop: 17 }} />
        </View>


      </View>


      <FlatList
        data={Data}
        renderItem={renderItem} />
      <TouchableOpacity style={{}}>
        <Image
          source={imagePath.AddIcon}
          style={{ height: 100, width: 100, resizeMode: "contain" }} />

      </TouchableOpacity>

    </ScrollView>
  )
}

export default Contacts

const styles = StyleSheet.create({})