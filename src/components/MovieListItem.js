import React, { useState } from "react";
import AddEditMovieForm from "./AddEditMovieForm";
import "../CSS/MovieListItem.css";

const MovieListItem = ({
  movie,
  onDelete,
  onToggleWatched,
  onRate,
  onReview,
}) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showRateForm, setShowRateForm] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(movie.rating || "");
  const [review, setReview] = useState(movie.review || "");

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
  const handleFormSubmit = () => {
    setShowEditForm(false);
  };
  return (
    <li className="movie-list-item">
      <div className="movie-details">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-description">{movie.description}</p>
        <p className="movie-info">Release Year: {movie.releaseYear}</p>
        <p className="movie-info">Genre: {movie.genre}</p>
        <p className="movie-info">Rating: {movie.rating}</p>
        <p className="movie-info">Review: {movie.review}</p>
        <p className="movie-info">Watched: {movie.watched ? "Yes" : "No"}</p>
        <div className="movie-buttons">
          <button
            className="button-watched"
            onClick={() => onToggleWatched(movie._id)}
          >
            {movie.watched ? "Mark as Unwatched" : "Mark as Watched"}
          </button>
          <button className="button-delete" onClick={() => onDelete(movie._id)}>
            Delete
          </button>
          <button className="button-edit" onClick={handleEditClick}>
            Edit
          </button>
          <button className="button-rate" onClick={handleRateClick}>
            Rate
          </button>
          <button className="button-review" onClick={handleReviewClick}>
            Review
          </button>
        </div>
      </div>

      {showEditForm && (
        <div className="edit-form">
          <AddEditMovieForm
            movieToEdit={movie}
            onFormSubmit={handleFormSubmit}
          />
        </div>
      )}

      {showRateForm && (
        <div className="rate-form">
          <h4>Rate Movie</h4>
          <input
            className="rate-input"
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="Rating"
            min="1"
            max="5"
          />
          <button className="button-submit" onClick={handleRateSubmit}>
            Submit Rating
          </button>
        </div>
      )}

      {showReviewForm && (
        <div className="review-form">
          <h4>Review Movie</h4>
          <textarea
            className="review-input"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Review"
          ></textarea>
          <button className="button-submit" onClick={handleReviewSubmit}>
            Submit Review
          </button>
        </div>
      )}
    </li>
  );
};

export default MovieListItem;
