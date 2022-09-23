import { StyleSheet, Text, View, StatusBar, FlatList, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import React, { useRef, useState } from 'react'
import CardStack, { Card } from 'react-native-card-stack-swiper'
import imagePath from '../Image'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';



const Like = () => {

  const cardRef = useRef(null);
  const [plus,setplus]=useState(0);
  const [indexGet, setIndexGet] = useState(11)


  return (
    <View >

      <StatusBar hidden={false} />
      <View style={{}}>
        <CardStack initialIndex={indexGet}
          style={styles.content} ref={cardRef}
        >
          <Card style={{height:30}}>
            <Image resizeMode='cover' style={{height:30,width:20}} source={imagePath.Food} />
          </Card>
          <Card >
            <Image resizeMode='cover'  source={imagePath.Food3} />
          </Card>
          <Card >
            <Image resizeMode='cover'  source={imagePath.Food4} />
          </Card>
          <Card >
            <Image resizeMode='cover'  source={imagePath.Food5} />
          </Card>
          <Card >
            <Image resizeMode='cover'  source={imagePath.Food6} />
          </Card>
          <Card >
            <Image resizeMode='cover'  source={imagePath.Food7} />
          </Card>
          <Card >
            <Image resizeMode='cover'  source={imagePath.Food8} />
          </Card>
          <Card >
            <Image resizeMode='cover'  source={imagePath.Food9} />
          </Card>
          <Card >
            <Image resizeMode='cover'  source={imagePath.Food10} />
          </Card>
        </CardStack>
      </View>
      <View style={{ }}>
        {plus != indexGet?
          <View style=
            {{ }}>
            <View  >
              <Pressable onPress={() => {cardRef.current.swipeLeft(setplus(plus + 1));console.log(plus);}}>
                <Image source={imagePath.Like}
                  style={{ }}
                />
              </Pressable >
            </View>
            <View style={{ marginLeft: 140 }}>
              <TouchableOpacity onPress={() => {cardRef.current.swipeRight(setplus(plus + 1));console.log(plus);}}>
                <Image source={imagePath.Dislike}
                  style={{}} />
              </TouchableOpacity>
            </View>
          </View>:console.log(plus)
          }
      </View>
    </View>
  )
}

export default Like

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent:"center",
  //   alignItems:"center"
  // },
  // content: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginLeft: 149,
  //   marginTop: 70
  // },
   card: {
    height:hp(80),
    width:wp(70),
    borderRadius: 15,
  },
  // eye: {
  //   height: '70%',
  //   width: '70%',
  //   borderRadius: 15,
  // },
  // footer: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: 290
  // },
  // bottomButton: {
  //   width: 200,
  //   flexDirection: "row",
  //   justifyContent: "space-between"
  // }
})