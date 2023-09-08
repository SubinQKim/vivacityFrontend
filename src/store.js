import { configureStore } from '@reduxjs/toolkit';
import apiDataReducer from './apiDataSlice';
import favoriteSliceReducer from './favoritesSlice';

const store = configureStore({
  reducer: {
    apiData: apiDataReducer,
    favoriteHobbies: favoriteSliceReducer,
  },
});

export default store;