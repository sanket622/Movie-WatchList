import React, { useState } from 'react';
import AddEditMovieForm from './AddEditMovieForm';

const MovieListItem = ({ movie, onDelete, onToggleWatched, onEdit, onRate, onReview }) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showRateForm, setShowRateForm] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(movie.rating || '');
  const [review, setReview] = useState(movie.review || '');

  const handleEditClick = () => setShowEditForm(!showEditForm);
  const handleRateClick = () => setShowRateForm(!showRateForm);
  const handleReviewClick = () => setShowReviewForm(!showReviewForm);

  const handleRateSubmit = () => {
    onRate(movie._id, rating);
    setShowRateForm(false);
  };

  const handleReviewSubmit = () => {
    onReview(movie._id, review);
    setShowReviewForm(false);
  };

  return (
    <li>
      <div>
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p>Release Year: {movie.releaseYear}</p>
        <p>Genre: {movie.genre}</p>
        <p>Rating: {movie.rating}</p>
        <p>Review: {movie.review}</p>
        <p>Watched: {movie.watched ? 'Yes' : 'No'}</p>
        <div>
          <button onClick={() => onToggleWatched(movie._id)}>
            {movie.watched ? 'Mark as Unwatched' : 'Mark as Watched'}
          </button>
          <button onClick={() => onDelete(movie._id)}>Delete</button>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleRateClick}>Rate</button>
          <button onClick={handleReviewClick}>Review</button>
        </div>
      </div>

      {showEditForm && (
        <div>
          <h4>Edit Movie</h4>
          <AddEditMovieForm movieToEdit={movie} onFormSubmit={() => setShowEditForm(false)} />
        </div>
      )}

      {showRateForm && (
        <div>
          <h4>Rate Movie</h4>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="Rating"
            min="1"
            max="5"
          />
          <button onClick={handleRateSubmit}>Submit Rating</button>
        </div>
      )}

      {showReviewForm && (
        <div>
          <h4>Review Movie</h4>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Review"
          ></textarea>
          <button onClick={handleReviewSubmit}>Submit Review</button>
        </div>
      )}
    </li>
  );
};

export default MovieListItem;
