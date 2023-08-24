export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';

export const addToFavorites = (movie) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: movie,
  };
};
