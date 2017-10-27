import React, {Component, cloneElement} from 'react';
import  {
    Dimensions, PixelRatio, Platform, AsyncStorage
} from 'react-native';
const StatusBarManager = require('NativeModules').StatusBarManager;
var DeviceValue = {
    minWidth: 0,
    screenWidth: 0,
    screenHeight: 0,
}
export default class AppDevice {
    /*最细线*/
    static minWidth() {
        if (DeviceValue.minWidth == 0) {
            DeviceValue.minWidth = 1 / PixelRatio.get();
        }
        return DeviceValue.minWidth;
    }

    /*屏幕宽度*/
    static screenWidth() {
        if (DeviceValue.screenWidth == 0) {
            DeviceValue.screenWidth = Dimensions.get('window').width;
        }
        return DeviceValue.screenWidth;
    }

    /*屏幕高度*/
    static screenHeight() {
        if (DeviceValue.screenHeight == 0) {
            DeviceValue.screenHeight = Platform.OS == "ios" ? Dimensions.get('window').height : Dimensions.get('window').height - StatusBarManager.HEIGHT;
        }
        return DeviceValue.screenHeight;
    }

    /*字体大小比例*/
    static getFontScale() {
        if (Platform.OS == 'ios') {
            return 1;
        }
        else {
            return PixelRatio.get() / PixelRatio.getFontScale();
        }
    }
    /*屏幕状态栏高度*/
    static statusBarHeight() {
        return Platform.OS == "ios" ? 20 : StatusBarManager.HEIGHT;
    }

}