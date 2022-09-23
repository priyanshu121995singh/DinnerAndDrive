import React from 'react';
import { StyleSheet, View, ActivityIndicator, Dimensions } from 'react-native';
import Helper from './Helper';

const heightScreen = Dimensions.get("screen").height;
const widthScreen = Dimensions.get("screen").width;
export default class CustomLoader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
        };
    }


    componentDidMount() {
        Helper.registerLoader(this);
    }

    render() {
        return this.state.loader ? (
            <View style={styles.mainView}>
                <ActivityIndicator animating={true} size="large" color="#fff" style={{ opacity: 1 }} />
            </View>
        ) : null
    }
}

const styles = StyleSheet.create({
    mainView: {
        position: 'absolute', zIndex: 1, width: widthScreen / 1, height: heightScreen / 1, alignItems: 'center',
        justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.6)',
    },
});