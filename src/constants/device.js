// src/constants/device.js

import { Platform, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

// crude notch detection (safe default)
let iPhoneNotch = false;
if (Platform.OS === 'ios') {
  // iPhone X and newer have height >= 812 or width >= 812
  if (height >= 812 || width >= 812) {
    iPhoneNotch = true;
  }
}

export const device = {
  iPhoneNotch,
  isAndroid: Platform.OS === 'android',
  isIOS: Platform.OS === 'ios',
  screenHeight: height,
  screenWidth: width,
};