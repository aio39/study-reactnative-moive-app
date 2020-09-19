import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from '../screens/Movies';
import Tv from '../screens/Tv';
import Search from '../screens/Search';
import Favs from '../screens/Favs';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

const Tabs = createBottomTabNavigator();

const getHeaderName = (route) =>
  route?.state?.routeNames[route.state.index] || 'Movies';

// stack.Screen은 각자 navigation & route 이란 prop을 가짐
//  route? -> optional chaining, 처음 로드시에는 존재하지 않으므로 넣어줌
// 처음 로딩 될 때는 undefined 로 반환됨
export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    const name = getHeaderName(route);
    navigation.setOptions({
      title: name,
      headerTitleAlign: 'center',
    });
  }, [route]);
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === 'android' ? 'md-' : 'ios-';
          if (route.name === 'Movies') {
            iconName += 'film';
          } else if (route.name === 'TV') {
            iconName += 'tv';
          } else if (route.name === 'Search') {
            iconName += 'search';
          } else if (route.name === 'Discovery') {
            iconName += 'heart';
          }

          return (
            <Ionicons
              name={iconName}
              color={focused ? 'white' : 'grey'}
              size={30}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: 'black',
          borderTopColor: 'black',
        },
      }}
    >
      <Tabs.Screen name="Movies" component={Movies} />
      <Tabs.Screen name="TV" component={Tv} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Discovery" component={Favs} />
    </Tabs.Navigator>
  );
};
