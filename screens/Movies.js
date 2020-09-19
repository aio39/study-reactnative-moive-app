import React from 'react';
import { Button, Text, View } from 'react-native';

export default ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <Text>Movies</Text>
      <Button title="Moive" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};

// <Button
// onPress={() => navigation.navigate('Detail')}
// title="Go to Detail"
// ></Button>
