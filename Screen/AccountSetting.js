import { StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Arrow from './Main/Arrow'
import Header from './Main/Header'
import Container from './Main/Container'
import Slider from 'react-native-slider'
import ImagePicker from 'react-native-image-crop-picker';
import imagePath from './Image'
import Helper from './lip/Helper'
import { SetLikes, updateprofile } from './lip/ApiUrl'

const AccountSetting = ({ navigation,route }) => {
    useEffect(() => {
        SetLikesApi
      }, []);
    const [first, setFirst] = useState();
    const [Last, setLast] = useState();
    const [Email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [Radius, setRadius] = useState(0);
    const [Pre, setPre] = useState();
    const [getData, setgetData] = useState(route.params?.getData);

    const profileUpdateApi = () => {
        var data = {
            firstname: first,
            lastname: Last,
            email: Email,
            mobile: mobile,
            radius: Radius,
            predetermine: Pre
        }
console.log("coolcoolcoolccooool",data)
        Helper.showLoader()
        Helper.makeRequest({ url: updateprofile, method: "POST", data: data }).then((response) => {
            console.log("---------: ", response.data.user.likeCount )
            if (response.success == true) {
            //navigation.navigate('MyTabs',{firstname:first,lastname:Last})
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
    const [likecount,setlikeCount]=useState()
    console.log("SetLikesApiSetLikesApiSetLikesApiSetLikesApiSetLikesApi",likecount)
    const SetLikesApi = () => {
        var data = {
            likeCount: likecount
        }

        Helper.showLoader()
        Helper.makeRequest({ url:SetLikes, method: "POST", data: data }).then((response) => {
            console.log("---------:11  ", response.data.user.likeCount)
            // setlikeCount(response.data.user)
            if (response.success == true) {
               
            navigation.navigate('MyTabs',{firstname:first,lastname:Last})
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


    const [image, setImage] = useState();

    const ChangePhoto = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setImage(image.path);
        });
    }

    // const Changecamera = () => {
    //     ImagePicker.openCamera({
    //         width: 300,
    //         height: 400,
    //         cropping: true
    //     }).then(image => {
    //         setImage(image.path);
    //     });
    // }

    return (
        <View>
            <ScrollView>
                <View style={{ marginTop: 20 }}>
                    <Arrow
                        onPress={() => navigation.navigate("MyTabs")} />
                </View>
                <View style={{ marginTop: -125, marginLeft: 40 }}>
                    <Header
                        text="Account Settings" />
                </View>
                <View style={{ alignSelf: 'center', marginTop: 30 }}>

                    <Image
                        source={image ? { uri: image } : imagePath.Profile}
                        style={{ height: 50, width: 50, borderRadius: 30 }} />

                </View>
                <TouchableOpacity onPress={ChangePhoto}
                >
                    <View style={{ backgroundColor: "#35b09f", borderRadius: 8, paddingVertical: 5, width: '25%', alignSelf: 'center', marginBottom: 30 }}>
                        <Text style={{ color: "#ffffff", fontSize: 13, textAlign: "center" }}>
                            Change Photo
                        </Text>

                    </View>
                </TouchableOpacity>

                <View>
                    <Text style={{ fontSize: 17, color: "#000000", marginLeft: 20, marginTop: 20 }}>
                        First Name
                    </Text>
                    <View style={{ marginHorizontal: 10 }}>
                        <Container
                            placeholder="John"
                            value={first}
                            onChangeText={(value) => { setFirst(value) }}
                        />
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 17, color: "#000000", marginLeft: 20, marginTop: 20 }}>
                        Last Name
                    </Text>
                    <View style={{ marginHorizontal: 10 }}>
                        <Container
                            placeholder="Doe"
                            value={Last}
                            onChangeText={(value) => { setLast(value) }} />
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 17, color: "#000000", marginLeft: 20, marginTop: 20 }}>
                        Email Address
                    </Text>
                    <View style={{ marginHorizontal: 10 }}>
                        <Container
                            placeholder="johnd@gmail.com"
                            value={getData?.email}
                            onChangeText={(value) => { setEmail(value) }} />
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 17, color: "#000000", marginLeft: 20, marginTop: 20 }}>
                        Phone Number
                    </Text>
                    <View style={{ marginHorizontal: 10 }}>
                        <Container
                            placeholder="(365)234-1727"
                            value={mobile}
                            onChangeText={(value) => { setMobile(value) }} />
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 17, color: "#000000", marginLeft: 20, marginTop: 20 }}>
                        Radius
                    </Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20, marginTop: 30 }}>
                        <Text>1 mile</Text>
                        <Text>200 mile</Text>
                    </View>
                    <View style={{ marginTop: 2 }}>

                        <Slider
                            marginLeft={30}
                            marginRight={30}
                            value={Radius}
                            minimumValue={1}
                            maximumValue={200}
                            trackStyle={styles.track}
                            thumbStyle={styles.thumb}
                            minimumTrackTintColor='white'
                            onValueChange={(value) => setRadius(value)}
                        />

                    </View>
                    <View style={{ marginLeft: 180 }}>
                        <Text style={{ color: "#000000", fontSize: 10 }}>
                            UpTo {Math.floor(Radius * 1)} miles
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 17, color: "#000000", marginLeft: 20, marginTop: 20 }}>
                        Pre Determined Number of Likes
                    </Text>
                    <View style={{ marginTop: 20 }}>
                        <Container
                            placeholder="10"
                            value={Pre}
                            onChangeText={(value) => { setPre(value) }} />
                    </View>
                </View>
                <View style={{ marginTop: 40, marginBottom: 40 }}>
                    <TouchableOpacity onPress={profileUpdateApi}>
                        <View style={styles.outer}>
                            <Text style={styles.button}>Save</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

    )
}

export default AccountSetting;

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

    },
    outer: {
        marginHorizontal: 20,
        backgroundColor: "#35b09f",
        paddingVertical: 20,
        borderRadius: 5
    },
    button: {
        textAlign: "center",
        color: "white",
        fontSize: 17
    }
})