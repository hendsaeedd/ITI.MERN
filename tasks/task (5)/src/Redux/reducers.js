import { ADD_TO_FAVORITES } from './actions';

const initialState = {
  favoriteMovies: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
