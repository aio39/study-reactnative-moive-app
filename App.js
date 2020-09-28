import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import Stack from './navigation/Stack';

const cacheImages = (Images) =>
  Images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFonts = (fonts) =>
  fonts.map((font) => [
    Font.loadAsync(font),
    Font.loadAsync(font),
    Font.loadAsync(font),
  ]);

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = () => {
    // startAsync (function) -- A function that returns a Promise, and the Promise should resolve when the app is done loading required data and assets.
    const images = cacheImages([
      'https://images.unsplash.com/photo-1486693326701-1ea88c6e2af3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      require('./assets/splash.jpg'),
    ]);
    // console.log(images);
    const fonts = cacheFonts([Ionicons.font]);
    // console.log(fonts);
    return Promise.all([...images, ...fonts]);
  };
  const onFinish = () => setIsReady(true);
  return isReady ? (
    <>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
      <StatusBar barStyle="light-content" />
    </>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error} //(e) => console.error(e) 와 같음
    />
  );
}
