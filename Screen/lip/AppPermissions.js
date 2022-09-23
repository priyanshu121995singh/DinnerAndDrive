import {Platform} from 'react-native';
import {request, RESULTS, check, PERMISSIONS} from 'react-native-permissions';

const PLATFORM_MICROPHONE_PERMISSIONS = {
  android: PERMISSIONS.ANDROID.RECORD_AUDIO,
};
const REQUEST_PERMISSION_TYPE = {
  microphone: PLATFORM_MICROPHONE_PERMISSIONS,
};
const PERMISSION_TYPE = {
  microphone: 'microphone',
};
class AppPermission {
  checkPermission = async (type):Promise<boolean> => {
    console.log("AppPermissions checkPermission type",type)
   
    const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS];
    console.log("AppPermissions checkPermission permissions",type)
    if (!permissions) {
      return true
    }
    try {
      const result = await check(permissions)
      console.log("AppPermissions checkPermission result",result)
      if (result === RESULTS.GRANTED) return true
      return this.requestPermission(permissions); //request permission
    } catch (error) {
      console.log("AppPermission checkPermission error",error)
      return false;
    }
  }; 
  requestPermission = async (permissions):Promise<boolean> => {
    console.log("AppPermissions requestPermission permissions",permissions)
    try {
     const result = await request(permissions);
     console.log("AppPermissions requestPermission result",result)
     return result === RESULTS.GRANTED;
    } catch (error) {
        console.log("AppPermissions requestPermission error",error)
        return false;
    }
  };
}

const Permission = new AppPermission();
export {Permission, PERMISSION_TYPE};
