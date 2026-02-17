import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { device } from '../constants';

function Header() {
  return (
    <View style={styles.container}>
      <Text>Header Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: device.iPhoneNotch ? 54 : 30,
    backgroundColor: '#222',
  },
});

export default Header;