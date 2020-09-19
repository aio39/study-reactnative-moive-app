import React from 'react';
import { Button, Text, View } from 'react-native';

export default ({ navigation }) => (
  <View>
    <Text>Home</Text>
    <Button
      onPress={() => navigation.navigate('Detail')}
      title="Go to Detail"
    ></Button>
  </View>
);
