import { configureStore } from '@reduxjs/toolkit';
import apiDataReducer from './slices/apiDataSlice';
import favoriteSliceReducer from './slices/favoritesSlice';

const store = configureStore({
  reducer: {
    apiData: apiDataReducer,
    favoriteHobbies: favoriteSliceReducer,
  },
});

export default store;