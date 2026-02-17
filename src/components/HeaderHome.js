import * as React from 'react';
import { View, Text } from 'react-native';

function HeaderHome({ show }) {
  return (
    <View>
      <Text>Header Home Component (show={String(show)})</Text>
    </View>
  );
}

export default HeaderHome;