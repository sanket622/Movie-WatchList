// src/components/MovieList.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  deleteMovie,
  toggleWatched,
  rateMovie,
  reviewMovie,
} from "../actions/movieActions";
import MovieListItem from "./MovieListItem";

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      dispatch(deleteMovie(id));
    }
  };

  const handleToggleWatched = (id) => {
    dispatch(toggleWatched(id));
  };

  const handleRate = (id, rating) => {
    dispatch(rateMovie(id, rating));
  };

  const handleReview = (id, review) => {
    dispatch(reviewMovie(id, review));
  };

  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <MovieListItem
            key={movie._id}
            movie={movie}
            onDelete={handleDelete}
            onToggleWatched={handleToggleWatched}
            onRate={handleRate}
            onReview={handleReview}
          />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
