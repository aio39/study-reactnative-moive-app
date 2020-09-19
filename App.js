import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

const cacheImages = (Images) =>
  Images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = async () => {
    const images = cacheImages([
      'https://images.unsplash.com/photo-1599687269705-11dc1b3c3699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
      require('./assets/splash.jpg'),
    ]);
    console.log(images);
  };
  const onFinish = () => setIsReady(true);
  return isReady ? null : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error} //(e) => console.error(e) 와 같음
    />
  );
}
