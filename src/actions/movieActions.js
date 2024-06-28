import axios from 'axios';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const ADD_MOVIE = 'ADD_MOVIE';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const TOGGLE_WATCHED = 'TOGGLE_WATCHED';
export const RATE_MOVIE = 'RATE_MOVIE';
export const REVIEW_MOVIE = 'REVIEW_MOVIE';

export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/api/movies');
    dispatch({ type: FETCH_MOVIES, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const addMovie = (movie) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/api/movies', movie);
    dispatch({ type: ADD_MOVIE, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const editMovie = (movie) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:5000/api/movies/${movie._id}`, movie);
    dispatch({ type: EDIT_MOVIE, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const deleteMovie = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/api/movies/${id}`);
    dispatch({ type: DELETE_MOVIE, payload: id });
  } catch (error) {
    console.error(error);
  }
};

export const toggleWatched = (id) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:5000/api/movies/toggle-watched/${id}`);
    dispatch({ type: TOGGLE_WATCHED, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const rateMovie = (id, rating) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:5000/api/movies/rate/${id}`, { rating });
    dispatch({ type: RATE_MOVIE, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const reviewMovie = (id, review) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:5000/api/movies/review/${id}`, { review });
    dispatch({ type: REVIEW_MOVIE, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};
