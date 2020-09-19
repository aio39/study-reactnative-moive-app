import React from 'react';
import { Button, Text, View } from 'react-native';

export default ({ navigation }) => {
  return (
    <View>
      <Text>Movies</Text>
      <Button title="Moive" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};

// <Button
// onPress={() => navigation.navigate('Detail')}
// title="Go to Detail"
// ></Button>
