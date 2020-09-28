import React from 'react';
import styled from 'styled-components/native';
import HorizontalSlider from '../../components/HorizontalSlider';
import ScrollContainer from '../../components/ScrollContainer';
import Input from '../../components/Search/Input';
import Vertical from '../../components/Vertical';

const Container = styled.View`
  background-color: black;
  width: 100%;
  height: 100%;
`;

const Text = styled.Text``;

export default ({ movies, shows, keyword, onChange, onSubmit }) => (
  <ScrollContainer
    refreshFn={onSubmit}
    loading={false}
    contentContainerStyle={{ paddingTop: 50 }}
  >
    <Input
      placeholder={'Write a keyword'}
      value={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
    />
    {movies.length !== 0 && (
      <HorizontalSlider title={'Movie Results'}>
        {movies.map((movie) => (
          <Vertical
            id={movie.id}
            key={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            votes={movie.vote_average || movie.backdrop_path}
          />
        ))}
      </HorizontalSlider>
    )}
    {shows.length !== 0 && (
      <HorizontalSlider title={'TV Results'}>
        {shows.map((show) => (
          <Vertical
            id={show.id}
            key={show.id}
            poster={show.poster_path || show.backgrop_path}
            title={show.name}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSlider>
    )}
  </ScrollContainer>
);
