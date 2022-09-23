import { StyleSheet, Text, View,Image,Animated,Easing, TouchableOpacity, } from 'react-native'
import React,{useState,useEffect} from 'react'
import imagePath from './Image'
const Animation = () => {
       const[state,setState]=useState({rotateValueHolder: new Animated.Value(0)})

  

  const startImageRotateFunction = () => {
    // setState = {
    //     rotateValueHolder: new Animated.Value(0)
    //   };
   Animated.timing(state.rotateValueHolder, {
      toValue:1,
      duration: 3000,
     easing: Easing.linear,
      useNativeDriver: true,
    }).start()
    
  };
  const startImageRotateFunctionStop = () => {
    // setState = {
    //     rotateValueHolder: new Animated.Value(0)
    //   };
   Animated.timing(state.rotateValueHolder, {
      toValue:0,
      duration: 3000,
     //easing: Easing.linear,
      useNativeDriver: true,
    }).start()
    
  };
//   useEffect(() => {
//     startImageRotateFunction();
//   }, []);

  return (
    <View style={{backgroundColor:"white",flex:1}}>
        <View style={{marginTop:20,marginHorizontal:20}}>
            <Text style={{fontSize:25,color:"black",fontWeight:"bold"}}>
                YARDSTIK
            </Text>
        </View>
        <View style={{marginHorizontal:20,marginTop:60}}>
            <Text style={{fontSize:18,color:"black",fontWeight:"bold"}}>
               Choose Your mojo After this
            </Text>
            <Text style={{fontSize:18,color:"black",fontWeight:"bold"}}>
                meeting
            </Text>
        </View>
        <View style={{backgroundColor:"#efefef",justifyContent:"center",width:350,height:350,borderRadius:350/2,marginHorizontal:10}}>
            <Animated.View style={{ transform:
                [
                  {
                    rotate:state.rotateValueHolder.interpolate(
                        {
                          inputRange: [0, 1],
                          outputRange: ['0deg', '360deg'],
                        }
                      )
                  }
                ],}}> 
            <TouchableOpacity onPress={startImageRotateFunction} style={{alignItems:"center",marginTop:-15}}>
    <Image
    source={imagePath.AngryEmoji}
    style={{height:90,width:90}}/>
</TouchableOpacity>
<View style={{alignItems:"center",flexDirection:"row",marginTop:-35,marginHorizontal:40,justifyContent:"space-between"}}>
    <Image
    source={imagePath.OverWorkedEmoji}
    style={{height:60,width:60}}/>
   
    <Image
    source={imagePath.AxiouseEmoji}
    style={{height:50,width:50}}/>
    
   
</View>
<View style={{alignItems:"center",flexDirection:"row",justifyContent:"center",marginTop:25,justifyContent:"space-between",marginHorizontal:5}}>
    <Image
    source={imagePath.ChillEmoji}
    style={{height:50,width:50}}/>
     <Image
    source={imagePath.BoredEmoji}
    style={{height:50,width:50}}/>
</View>
<View style={{alignItems:"center",flexDirection:"row",justifyContent:"center",marginTop:30,justifyContent:"space-between",marginHorizontal:30}}>
    <Image
    source={imagePath.TierdEmoji}
    style={{height:50,width:50}}/>
     <Image
    source={imagePath.ProductiveEmoji}
    style={{height:50,width:50}}/>
</View>
<View style={{alignItems:"center",flexDirection:"row",justifyContent:"center",justifyContent:"space-between",marginHorizontal:95,marginTop:10}}>
    <Image
    source={imagePath.BlessedEmoji}
    style={{height:50,width:50}}/>
     <Image
    source={imagePath.ExitedEmoji}
    style={{height:50,width:50}}/>
</View>
            </Animated.View>

        </View>
      
    </View>
  )
}

export default Animation

const styles = StyleSheet.create({})
// import React,{useEffect,useState} from 'react';
// import {
//   SafeAreaView,
//   View,
//   Animated,
//   Easing,
//   TouchableHighlight,
//   Text,
// } from 'react-native';

// export default App =()=> {
    //const[state,setState]=useState()
//  setState = {
//       rotateValueHolder: new Animated.Value(0)
//     };
//   }
//   useEffect = () => {
//     startImageRotateFunction();
//   }
//   startImageRotateFunction = () => {
//     Animated.loop(Animated.timing(this.state.rotateValueHolder, {
//       toValue: 1,
//       duration: 3000,
//       easing: Easing.linear,
//       useNativeDriver: false,
//     })).start();
//   };

// 
//     return(
//       <SafeAreaView>
//         <View>
//           <Animated.Image
//             style={{
//               width: 200,
//               height: 200,
//               alignSelf:"center",
//               transform:
//                 [
//                   {
//                     rotate: this.state.rotateValueHolder.interpolate(
//                         {
//                           inputRange: [0, 1],
//                           outputRange: ['0deg', '360deg'],
//                         }
//                       )
//                   }
//                 ],
//             }}
//               source={{uri:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',}}
//           />
//           <TouchableHighlight
//             onPress={() => this.startImageRotateFunction()}>
//             <Text style={{textAlign:"center"}}>
//               CLICK HERE
//             </Text>
//           </TouchableHighlight>
//         </View>
//       </SafeAreaView>
//     );
//   
// }