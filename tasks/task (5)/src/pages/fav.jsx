import React from 'react';
import { connect } from 'react-redux';

const Fav = ({ favoriteMovies }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-white">Your Favorite Movies</h2>
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {favoriteMovies.map((movie, index) => (
          <li key={index} className="bg-slate-800 shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2 text-white">{movie.title}</h3>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="w-full rounded-md mb-2"
            />
            <p className="text-gray-300">{movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favoriteMovies: state.favoriteMovies,
  };
};

export default connect(mapStateToProps)(Fav);
