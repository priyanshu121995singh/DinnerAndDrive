import * as React from 'react';
import { Alert, Platform, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import Config from './Config';
import DeviceInfo from 'react-native-device-info';


export default class Helper extends React.Component {
    url = "";
   
   
    static device_type = Platform.OS == 'android' ? 'Android' : 'IOS';
    static device_token = "12345";
    static device_id = DeviceInfo.getDeviceId();
    

    static getFormData(obj) {
        let formData = new FormData();
        for (let i in obj) {
            formData.append(i, obj[i]);
        }
        return formData;
    }

    static registerLoader(mainApp) {
        Helper.globalLoader = mainApp;
    }

    static showLoader() {
        Keyboard.dismiss();
        Helper.globalLoader.setState({ loader: true })
    }

    static hideLoader() {
        Helper.globalLoader.setState({ loader: false })
    }

 
    static showToast(msg) {
        Toast.show(msg)
    }


    static async setData(key, val) {
        try {
            let tempval = JSON.stringify(val);
            await AsyncStorage.setItem(key, tempval);
        } catch (error) {
            console.error(error, "AsyncStorage")
        }
    }

    static async getData(key) {
        try {
            let value = await AsyncStorage.getItem(key);
            if (value) {
                let newvalue = JSON.parse(value);
                return newvalue;
            } else {
                return value;
            }
        } catch (error) {
            console.error(error, "AsyncStorage")
        }
    }

    // static async removeItemValue(key) {
    //     try {
    //         await AsyncStorage.removeItem(key)
    //             ;
    //         return true;
    //     } catch (exception) {
    //         return false;
    //     }
    // }

    static async makeRequest({ url, data, method = "POST" }) {
        let finalUrl = Config.baseurl + url;
        console.log(finalUrl, "finalUrl");
        let form;
        let methodnew;
        let token = await this.getData("token");
        console.log("-------token------>>>>>>", token)
        let varheaders;
        if (method == "POSTUPLOAD") {
            methodnew = "POST";
            varheaders = {
                'Content-Type': 'multipart/form-data',
                'Authorization': token
            }
            // form = JSON.stringify(data);
            form = data;
        }

        else if (method == "POST") {
            methodnew = "POST";
            if (token) {
                varheaders = {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": token
                }
            } else {
                varheaders = {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }
            form = JSON.stringify(data);
            // form = data;
        }
        else {
            methodnew = "GET";
            if (token) {
                varheaders = {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": token
                }
            } else {
                varheaders = {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        }
        return fetch(finalUrl, {
            body: form,
            method: methodnew,
            headers: varheaders,
        })
            .then((response) => {
                return response.json()
            })
            .then((responseJson) => {
                if (responseJson.hasOwnProperty('status')) {
                    if (responseJson.error === 401) {
                        Toast.show(responseJson.message);
                    }
                } else
                    return responseJson;
            })
            .catch((error, a) => {
                Toast.show(error);
            });
    }
}