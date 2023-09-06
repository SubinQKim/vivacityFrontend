// favoritesSlice.js

import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      // Implement adding a favorite hobby to the state
      const hobbyToAdd = action.payload;
      if (!state.includes(hobbyToAdd)) {
        state.push(hobbyToAdd);
      }
    },
    removeFavorite: (state, action) => {
      // Implement removing a favorite hobby from the state
      const hobbyToRemove = action.payload;
      const index = state.indexOf(hobbyToRemove);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
