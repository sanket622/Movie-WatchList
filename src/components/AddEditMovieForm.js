// src/components/AddEditMovieForm.js

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie, editMovie } from '../actions/movieActions';

const AddEditMovieForm = ({ movieToEdit, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    releaseYear: '',
    genre: '',
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
    setFormData({ title: '', description: '', releaseYear: '', genre: '' });
    onFormSubmit();
  };

  return (
    <div>
      <h2>{movieToEdit ? 'Edit Movie' : 'Add Movie'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Release Year"
          name="releaseYear"
          value={formData.releaseYear}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Genre"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
        />
        <button type="submit">{movieToEdit ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default AddEditMovieForm;
