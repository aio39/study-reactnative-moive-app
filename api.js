import axios from 'axios';

const TMDB_KEY = 'a8476ef9f64c7e991d23b3b745c620e7';

const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      api_key: TMDB_KEY,
    },
  });

const getAnything = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data, // 일부 request의 object에는 results가 list로 반환 안 되는 경우
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (e) {
    return [null, e];
  }
};

export const movieApi = {
  nowPlaying: () => getAnything('/movie/now_playing'),
  popular: () => getAnything('/movie/popular'),
  upcoming: () => getAnything('/movie/upcoming', { region: 'kr' }),
  search: (query) => getAnything('/search/movie', { query }),
  movie: (id) => getAnything(`/movie/${id}`),
  discover: () => getAnything('/discover/movie'),
};

export const tvApi = {
  today: () => getAnything('/tv/airing_today'),
  thisWeek: () => getAnything('/tv/on_the_air'),
  topRated: () => getAnything('/tv/top_rated'),
  popular: () => getAnything('/tv/popular'),
  search: (query) => getAnything('/search/tv', { query }),
  show: (id) => getAnything(`/tv/${id}`),
};

export const apiImage = (path) =>
  path
    ? `https://image.tmdb.org/t/p/w500${path}`
    : 'https://images.unsplash.com/photo-1486693326701-1ea88c6e2af3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80';
