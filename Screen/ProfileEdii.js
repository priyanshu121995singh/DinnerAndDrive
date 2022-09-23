import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'
import imagePath from './Image';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const ProfileEdii = () => {
const[selectLabel,setselectLabel]=useState('favoritedEdiis')
const onChangeLabel = (value) => {
  setselectLabel(value)
};
  return (
    <ScrollView>
      <StatusBar />
      <ImageBackground
        source={imagePath.ProfileEdii}
        style={{ height: 200, width: "100%", flex: 1 }}>
        <View style={{ flexDirection: "row", marginTop: 15, marginHorizontal: 20 }}>
          <Image
            source={imagePath.BackArrow} />
          <Text style={{ textAlign: "center", flex: 1, fontSize: 16, color: "#FFFFFF", fontWeight: "bold" }}>
            Profile
          </Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View style={{ backgroundColor: "white", borderRadius: 60, height: 80, width: 80, justifyContent: "center", alignItems: "center", marginTop: 10 }}>
            <TouchableOpacity>
              <Image
                source={imagePath.Boy}
                style={{ height: 70, width: 70, }}
              />
            </TouchableOpacity>

          </View>
          <View>
            <Text style={{ color: "white", textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
              Ron Maitland
            </Text>
            <Text style={{ color: "white", textAlign: "center", fontSize: 12 }}>
              I love my family!
            </Text>
          </View>

        </View>


      </ImageBackground>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly", backgroundColor: "white", paddingVertical: 20 }}>
        <View>
          <Text style={{ color: "#2C3236", fontSize: 26, fontWeight: "bold" }}>
            591
          </Text>
          <Text style={{ textAlign: "center", color: "#889398", fontSize: 9 }}>
            FRIENDS
          </Text>
        </View>

        <View>
          <Text style={{ color: "#2C3236", fontSize: 26, fontWeight: "bold" }}>
            34.1K

          </Text>
          <Text style={{ textAlign: "center", color: "#889398", fontSize: 9 }}>
            LIKES
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 3, backgroundColor: "white", paddingVertical: 20 }}>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ color: "#63787E", fontSize: 11, fontWeight: "700" }}>
            It is a long established fact that a reader will be distracted by the readable content of a page ...
            <Text style={{ color: "#00B4C7" }}>
              See More
            </Text>
          </Text>

        </View>

      </View>
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20, paddingVertical: 20, backgroundColor: "white", marginTop: 3 }}>
        <Image
          source={imagePath.Six}
          style={{ height: hp(5), width: wp(10) }} />
        <Text style={{ fontSize: 14, color: "#4B565D", textAlign: "center", paddingHorizontal: 20, fontWeight: "bold" }}>
          Edii’s sent
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20, paddingVertical: 20, backgroundColor: "white", marginTop: 3 }}>
        <Image
          source={imagePath.Smily}
          style={{ height: hp(5), width: wp(10) }} />
        <Text style={{ fontSize: 12, color: "#4B565D", textAlign: "center", paddingHorizontal: 20, fontWeight: "bold" }}>
          Mood: <Text style={{ fontSize: 12, color: "#73848E" }}>Lorem ipsum dolor sit amet, consectetur</Text>
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20, paddingVertical: 20, backgroundColor: "white", marginTop: 3 }}>
        <Image
          source={imagePath.Toy}
          style={{ height: hp(5), width: wp(10) }} />
        <View style={{ flexDirection: "row", justifyContent: "space-between", flex: 1 }}>
          <Text style={{ fontSize: 12, color: "#4B565D", paddingHorizontal: 20, fontWeight: "bold" }}>
            Send Ron an edii
          </Text>
          <Image
            source={imagePath.SideArrow}
            style={{ height: hp(3), width: wp(8), resizeMode: "contain" }} />
        </View>

      </View>
      <View style={{ flexDirection: "row", marginTop: 7 }} >

        <TouchableOpacity onPress={() => { onChangeLabel('favoritedEdiis') }}style={[styles.FavoriteEddis,{backgroundColor: selectLabel == 'favoritedEdiis' ? "#2AB9D3" : "#E4EFF0" }]}>
          <Text style={[styles.TextfavoriteEddi, { color: selectLabel == 'favoritedEdiis' ? '#FFFFFF' : '#7D989D' }]}>
            Favorited Edii’s
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { onChangeLabel('communityFavorites') }} style={[styles.FavoriteEddis,{backgroundColor: selectLabel == 'communityFavorites' ? "#2AB9D3" : "#E4EFF0"  }]}>
          <Text style={[styles.TextfavoriteEddi, { color: selectLabel == 'communityFavorites' ? '#FFFFFF' : '#7D989D' }]}>
            Community Favorites
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 20, paddingVertical: 40 }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={imagePath.ProfilePhoto}
            style={{ height: hp(6), width: wp(12), resizeMode: "contain" }} />
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={{ color: "#279FB2", fontSize: 14, fontWeight: "bold" }}>
              ProfileName
            </Text>
            <Text style={{ fontSize: 10, color: "#607A7E" }}>
              1 day ago .
              <Text>
                Atlanta, GA
              </Text>
            </Text>
          </View>
        </View>

        <View style={{ top: 5 }}>
          <Text style={{ color: "#627D81", fontSize: 13 }}>
            Quote of the day :)
          </Text>
        </View>
      </View>
      <View style={{}}>
        <Image
          source={imagePath.VideoForEdii}
          style={{ height: hp(30), width: "100%", }} />
      </View>
    </ScrollView>
  )
}

export default ProfileEdii

const styles = StyleSheet.create({
  FavoriteEddis: {
   
    paddingVertical: 20,
    alignContent: "center",
    flex: 1,
  },
  TextfavoriteEddi:{
     textAlign: "center",
      fontWeight: "bold", 
      fontSize: 14, 
      color: "#4B565D" }
})