import * as React from 'react';
import { View, Text } from 'react-native';

function ShowScroller({ dataset, type }) {
  return (
    <View>
      <Text>Show Scroller Component</Text>
      <Text>Dataset: {dataset}</Text>
      <Text>Type: {type}</Text>
    </View>
  );
}

export default ShowScroller;