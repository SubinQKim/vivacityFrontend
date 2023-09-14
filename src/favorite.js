// Favorites.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from './slices/favoritesSlice';

const Favorites = () => {
  // Implement the UI for managing and displaying favorite hobbies here
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleAddFavorite = (hobby) => {
    dispatch(addFavorite(hobby));
  };

  const handleRemoveFavorite = (hobby) => {
    dispatch(removeFavorite(hobby));
  };
  return (
    <div>
      {/* UI for favorite hobbies */}
    </div>
  );
};

export default Favorites;
