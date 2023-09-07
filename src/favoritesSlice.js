// favoritesSlice.js

import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addHobby: (state, action) => {
      // Implement adding a favorite hobby to the state
      const hobbyToAdd = action.payload;
      if (!state.includes(hobbyToAdd)) {
        state.push(hobbyToAdd);
      }
    },
    removeHobby: (state, action) => {
      // Implement removing a favorite hobby from the state
      const hobbyToRemove = action.payload;
      const index = state.indexOf(hobbyToRemove);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addHobby, removeHobby } = favoritesSlice.actions;

export default favoritesSlice.reducer;
