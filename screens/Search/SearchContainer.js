import React, { useState } from 'react';
import { movieApi, tvApi } from '../../api';
import SearchPresenter from './SearchPresent';

export default () => {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState({
    movies: [],
    shows: [],
    movieError: null,
    showsError: null,
  });
  const onChange = (text) => setKeyword(text);
  const serach = async () => {
    if (keyword === '') {
      return;
    }

    const [movies, movieError] = await movieApi.search(keyword);
    const [shows, showsError] = await tvApi.search(keyword);
    setResults({
      movies,
      shows,
      movieError,
      showsError,
    });
  };

  return (
    <SearchPresenter
      {...results}
      onChange={onChange}
      onSubmit={serach}
      keyword={keyword}
    />
  );
};
