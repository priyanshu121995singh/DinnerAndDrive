import * as React from 'react';
import Rout from './Screen/Navigation/Rout';
import { StyleSheet, View, ToastAndroid , LogBox} from 'react-native';
import Eddi1 from './Screen/Eddi1';
import Edii from './Screen/Edii';
import Contacts from './Screen/Contacts';
import ProfileEdii from './Screen/ProfileEdii';
import FocusedButton from './Screen/FocusedButton';
import CustomLoader from './Screen/lip/CustomLoader';
import Review from './Screen/Review';
import Focusbuttton from './Screen/focusbuttton';
import Splesh from './Screen/Splesh';
import Test from './Screen/Test'
import Login from './Screen/Login';
import SignUp from './Screen/SignUp';
import Step from './Screen/2step';
import Forgot from './Screen/Forgot';
import Step2 from './Screen/Step2';
import Link from './Screen/Link';
import Change from './Screen/Change';
//import DropDown from './Screen/DropDown';
import Animation from './Screen/Animation';
import {Permission,PERMISSION_TYPE} from "./Screen/lip/AppPermissions"
import MyTabs from './Screen/TabNavigation/MyTab';
LogBox.ignoreAllLogs(true)
function App() {
  Permission.checkPermission(PERMISSION_TYPE.microphone)
  return (
    <View style={{flex:1}}>
      <Change/>
      <CustomLoader />
    </View>

  );
}

export default App;

