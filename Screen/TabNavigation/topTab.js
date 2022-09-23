import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    ImageBackground,
    StyleSheet,
    TextInput,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import MyDrawer from '../../Navigation/Drawer/index'
import CommonMethods from '../../Common/CommonMethods';
import { useNavigation } from '@react-navigation/native';
import { SERVICE_URL } from '../../Common/ServiceConstants';
import NetInfo from "@react-native-community/netinfo";
import moment from 'moment';
import NoDataFound from '../../Components/NoDataFound';

const Earning = () => {

    const [tabValue, settabValue] = useState(0);
    const navigation = useNavigation();
    const [is_Earning, setEarning] = useState([]);
    const [userData, setUserData] = useState({});
    const [GroupLoader, setGroupLoader] = useState(false);

    const changeTab = (value) => {
        settabValue(value)
    }

    const _TabtBook = () => (
        <View style={{ flex: 1, backgroundColor: '#fff', marginTop: 10 }}>
             <Text>
                hii
             </Text>

        </View>
    );


    const _TabReview = () => (
        <View style={{ flex: 1, backgroundColor: '#fff', marginTop: 10 }}>
         <Text style={styles.textDolor}>$ {item.ers} USD</Text>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#E5E5E5", }}>

            <View style={{ marginHorizontal: 10, paddingVertical: 0 }}>
                <View style={styles.headerView}>
                    <Text style={styles.textAccount}>My Earnings</Text>
                </View>
                <View style={styles.topBdr}></View>
            </View>

            <View style={{ backgroundColor: '#FFF', flex: 1, marginHorizontal: 10, elevation: 20, borderRadius: 10, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                    <TouchableOpacity
                        style={[styles.buttonView, (tabValue == 0) ? styles.changeButton : '']}
                        onPress={() => changeTab(0)}>
                        <Text style={[styles.textAbout, (tabValue == 0) ? styles.changeView : '']}>From Hosted Event Reports</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonView, (tabValue == 1) ? styles.changeButton : '']}

                        onPress={() => changeTab(1)}>
                        <Text style={[styles.textAbout, (tabValue == 1) ? styles.changeView : '']}>From Sales Reports</Text>

                    </TouchableOpacity>
                </View>

                {
                    (tabValue == 0) ?
                        _TabtBook() : null
                }
                {
                    (tabValue == 1) ?
                        _TabReview() : null
                }

            </View>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    textAbout: {
        color: '#000',
        textAlign: 'center',
        backgroundColor: '#F5F5F5',
        paddingVertical: 14,
        borderRadius: 5,
        fontSize: 12,
        fontWeight: 'bold',

    },
    buttonView: {
        flex: 1,
        marginLeft: 5
    },
    changeButton: {
        flex: 1,
        marginRight: 5
    },
    changeView: {
        color: '#fff',
        backgroundColor: '#5396D9',
        width: '100%',
        paddingVertical: 14,
        borderRadius: 5,
        fontSize: 12,
        fontWeight: 'bold',
    },
    headerView: {
        paddingVertical: 10,
    },
    topBdr: {
        height: 2.5,
        backgroundColor: '#5396D9',
        width: '25%',
        borderRadius: 100,
        bottom: 5
    },
    textAccount: {
        color: '#273B4A',
        fontSize: 18,
        fontWeight: '700',
        marginTop: 0
    },
    //
    cardView: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        //height: 110,
        borderWidth: 1,
        borderColor: '#C4C4C4',
        paddingVertical: 15,
        borderBottomWidth: .5
    },
    cardView_2: {
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10
    },
    containText: {
        flex: 1,
        justifyContent: 'center',
    },
    ApprovedText: {
        color: '#363D45',
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        left: 20
    },
    textDolor: {
        textAlign: 'center',
        color: '#363D45',
        fontSize: 10,
        fontWeight: 'bold',
    },
    hasTag: {
        textAlign: 'center',
        color: '#5396D9',
        fontSize: 10,
        fontWeight: 'bold',
    },
    headerTextView: {
        flex: 1,
        justifyContent: 'center'
    },
    headerText: {
        color: '#000',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 10
    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 0,
        backgroundColor: '#fff',
        height: 50
    },
    reqText: {
        color: '#000',
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 10
    },
    cardViewNew: {


        flex: 1, justifyContent: 'center'
    }
});
export default Earning;