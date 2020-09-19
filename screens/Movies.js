import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { movieApi } from '../api';

export default () => {
  const [movies, setMovies] = useState({
    nowPlaying: [],
    popular: [],
    upcoming: [],
    nowPlayingError: null,
    popularError: null,
    upcomingError: null,
  }); // 각각 useState를 만들어주면 setState도 각각 해줘야해서 render를 여러번 하게 됨

  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    setMovies({
      nowPlaying,
      popular,
      upcoming,
      nowPlayingError,
      popularError,
      upcomingError,
    });
    // const {
    //   data: { results },
    // } = await movieApi.nowPlaying();
    // console.log(results);  getAnything 함수를 만들어서 반복 최소화
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <Text style={{ color: 'white' }}>{movies.nowPlaying?.length}</Text>
      {/* <Button title="Moive" onPress={() => navigation.navigate('Detail')} /> */}
    </View>
  );
};

// <Button
// onPress={() => navigation.navigate('Detail')}
// title="Go to Detail"
// ></Button>
