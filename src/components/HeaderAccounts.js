import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { device } from '../constants';

function HeaderAccounts() {
  return (
    <View style={styles.container}>
      <Text>Header Accounts Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: device.iPhoneNotch ? 64 : 40,
    backgroundColor: '#222',
  },
});

export default HeaderAccounts;