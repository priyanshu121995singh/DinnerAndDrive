import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splesh from '../../Screen/Splesh';
import SignUp from '../../Screen/SignUp';
import Forgot from '../../Screen/Forgot';
import Step2 from '../../Screen/Step2';
import Like from '../Main/Like';
import Link from '../../Screen/Link';
import Filter from '../../Screen/Filter';
import Step from '../../Screen/2step';
import HeaderScreen from '../../Screen/Header';
import MyTabs from '../../Screen/TabNavigation/MyTab';
import AccountSetting from '../../Screen/AccountSetting';
import ChangePassword from '../../Screen/ChangePassword';
import Hotel1 from '../../Screen/Hotel1';
import Review from '../../Screen/Review';
import MyTopTabs from '../../Screen/Top_Tab/MyTopTab';
import RestaurentHistory from '../../Screen/RestaurentHistory';
import Login from '../../Screen/Login';
import TopAndHeader from '../Top_Tab/TopAndHeader';
import PrivacyPolicy from '../PrivacyPolicy';
import TermAndCondations from '../TermAndCondations';
import Change from '../Change';
const Stack = createNativeStackNavigator();

function Rout() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Change"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splesh" component={Splesh} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Step2" component={Step2} />
        <Stack.Screen name="Link" component={Link} />
        <Stack.Screen name="Step" component={Step} />
        <Stack.Screen name="HeaderScreen" component={HeaderScreen} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="AccountSetting" component={AccountSetting} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="Review" component={Review} />
        <Stack.Screen name="Hotel1" component={Hotel1} />
        <Stack.Screen name="RestaurentHistory" component={RestaurentHistory} />
        <Stack.Screen name="MyTopTabs" component={MyTopTabs} />
        <Stack.Screen name="TopAndHeader" component={TopAndHeader} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="TermAndCondations" component={TermAndCondations} />
        <Stack.Screen name="Like" component={Like} />
        <Stack.Screen name='Change' component={Change}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Rout;
