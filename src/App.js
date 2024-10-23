// App.js

import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import MovieList from "./components/MovieList";
import AddEditMovieForm from "./components/AddEditMovieForm";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Movie Watchlist</h1>
        <AddEditMovieForm />
        <MovieList />
      </div>
    </Provider>
  );
}

export default App;
