import axios from 'axios';
import {  setMoviesFilters, showbooks, showcharacters, showmoviequotes } from '../actions';
import { showmovies } from '../actions';

const client = axios.create({
  baseURL: 'https://the-one-api.dev/v2',
});

client.defaults.headers.common['Authorization'] = 'Bearer _XRnEmJq2WuOYvKyOWra';

export const requestBooks = () => async (dispatch) => {
  try {
    const response = await client.get('/book');
    dispatch(showbooks(response.data.docs));
  } catch (err) {
    // logs the error whatever error occured in try block
    console.log(err);
  }
}

export const requestMovies = (prevFilters) => async (dispatch) => {

    try {
      const params = {
        budget: prevFilters.budgetInMillions,
        minutes:prevFilters.runtimeInMinutes,
        sort: `${prevFilters.orderBy}:${prevFilters.order}`
      }
 
  const { data: { docs, ...filters } } = await client.get('/movie', { params });
  dispatch(showmovies( docs ));
  dispatch(setMoviesFilters(filters));
} catch (err) {
  // logs the error whatever error occured in try block
  console.log(err);
}
}

  export const requestMoviesQuotes = (id) => async (dispatch) => {
    console.log(id);
    try {
      const response = await client.get(`/movie/${id}/quote`);
      dispatch(showmoviequotes(response.data.docs));
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }

  export const requestCharacters = () => async (dispatch) => {
    try {
      const response = await client.get('character');
      dispatch(showcharacters(response.data.docs));
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }