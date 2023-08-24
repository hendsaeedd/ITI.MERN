import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from 'react-redux';
import { addToFavorites } from '../Redux/actions'

const Home = ({ addToFavorites }) => {
  const [movies, setMovies] = useState([]);

  const handleAddToFavorites = (movie) => {
    addToFavorites(movie); 
  };

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c"
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-white">Popular Movies</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-slate-800 shadow-md rounded-lg overflow-hidden ">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-white">{movie.title}</h3>
              <p className="text-gray-300">{movie.overview}</p>
              <button
              onClick={() => handleAddToFavorites(movie)}
              className="block w-full mt-2 px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700 "
            >
              Add to Favorites
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default connect(null, { addToFavorites })(Home);
