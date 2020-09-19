import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from '../screens/Movies';
import Tv from '../screens/Tv';
import Search from '../screens/Search';
import Favs from '../screens/Favs';

const Tabs = createBottomTabNavigator();

const getHeaderName = (route) =>
  route?.state?.routeNames[route.state.index] || 'Movies';

// stack.Screen은 각자 navigation & route 이란 prop을 가짐
//  route? -> optional chaining, 처음 로드시에는 존재하지 않으므로 넣어줌
// 처음 로딩 될 때는 undefined 로 반환됨
export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getHeaderName(route),
    });
  }, [route]);
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Movies" component={Movies} />
      <Tabs.Screen name="Tv" component={Tv} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Favorite" component={Favs} />
    </Tabs.Navigator>
  );
};
