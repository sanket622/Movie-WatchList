import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovie, editMovie } from "../actions/movieActions";
import "../CSS/AddEditMovieForm.css";

const AddEditMovieForm = ({ movieToEdit, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    releaseYear: "",
    genre: "",
  });

  useEffect(() => {
    if (movieToEdit) {
      setFormData({
        title: movieToEdit.title,
        description: movieToEdit.description,
        releaseYear: movieToEdit.releaseYear,
        genre: movieToEdit.genre,
      });
    }
  }, [movieToEdit]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movieToEdit) {
      dispatch(editMovie({ ...formData, _id: movieToEdit._id }));
    } else {
      dispatch(addMovie(formData));
    }
    setFormData({ title: "", description: "", releaseYear: "", genre: "" });
    if (onFormSubmit) {
      onFormSubmit();
    }
  };

  return (
    <div className="movie-form-container">
      <h2 className="form-title">{movieToEdit ? "Edit Movie" : "Add Movie"}</h2>
      <form className="movie-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="form-input"
          required
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="number"
          placeholder="Release Year"
          name="releaseYear"
          value={formData.releaseYear}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Genre"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          className="form-input"
        />
        <button type="submit" className="form-button">
          {movieToEdit ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default AddEditMovieForm;
