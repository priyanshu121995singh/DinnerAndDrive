import { StyleSheet, Text, TextInput, TouchableOpacity, View,ScrollView } from 'react-native'
import React, { useState } from 'react'
import { color } from 'react-native-reanimated';
let arr = [];
const Focusbuttton = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [mobile, setMobile] = useState();
    const renderitem = () => {
   console.log("arrrrarrrr", arr)
   
        return (
           <>
               
                    {arr.map((data) => {
                        console.log("data", data);
                        return (
                           <View>
                             <Text style={{backgroundColor:"red"}}>{data}</Text>
                           </View>
                        )
                        
                    })}
              </>  
               
           
        )
    }
    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.Header}>
                <Text style={styles.HeaderText}>
                    Contact Form
                </Text>
            </View>
            <View style={styles.Wapper}>
                <Text style={styles.Wappertext}>
                    Enter Your Name
                </Text>
                <TextInput
                    value={name}
                    onChangeText={(namedata) => setName(namedata)}
                    placeholder='Priyanshu'
                    placeholderTextColor={"black"}
                    style={styles.Wappertextinput} />
            </View>
            <View style={styles.Wapper}>
                <Text style={styles.Wappertext}>
                    Enter Your Email
                </Text>
                <TextInput
                    value={email}
                    onChangeText={(Emaildata) => setEmail(Emaildata)}
                    placeholder='Priyanshu@gmail.com'
                    placeholderTextColor={"black"}
                    style={styles.Wappertextinput} />
            </View>
            <View style={styles.Wapper}>
                <Text style={styles.Wappertext}>
                    Enter Your Password
                </Text>
                <TextInput
                    placeholder='*********'
                    placeholderTextColor={"black"}
                    style={styles.Wappertextinput}
                    value={password}
                    onChangeText={(Passworddata) => setPassword(Passworddata)} />
            </View>
            <View style={styles.Wapper}>
                <Text style={styles.Wappertext}>
                    Enter Your MobilNumber
                </Text>
                <TextInput
                keyboardType='numeric'
                    placeholder='987654321'
                    placeholderTextColor={"black"}
                    style={styles.Wappertextinput}
                    value={mobile}
                    onChangeText={(Mobiledata) => setMobile(Mobiledata)} />
            </View>
            <TouchableOpacity style={[styles.button, { backgroundColor: !email || !password || !name || !mobile ? '#62D5CC' : "#4FDBF4" }]}
           onPress={()=>{arr.push({name1:name,email1:email,password1:password,mobile1:mobile});setName();setEmail();setMobile();setPassword();renderitem();}}  >
              
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
           
        </ScrollView>
    )
    
}


export default Focusbuttton

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginHorizontal: 20
    },
    Header: {
        marginVertical: 10,
        alignItems: "center"
    },
    HeaderText: {
        color: "black",
        fontSize: 25,
        fontWeight: "bold",
    },
    Wapper: {
        marginVertical: 10
    },
    Wappertext: {
        fontSize: 15,
        color: "black",
        fontWeight: "600"
    },
    Wappertextinput: {
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 10,
        opacity: 0.5,
        marginVertical: 10,
        paddingHorizontal: 20
    },
    button: {
        borderRadius: 40,
        // backgroundColor:"grey",
        marginHorizontal: 40,
        paddingVertical: 20
    },
    buttonText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    }
})