import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addHobby, removeHobby } from './favoritesSlice';

const UserInteract = () => {
  const favoriteHobbies = useSelector((state) => state.favoriteHobbies);
  const dispatch = useDispatch();
  const [newHobby, setNewHobby] = useState(''); // Define and initialize newHobby state

  const handleAddHobby = () => {
    if (newHobby.trim() !== '') {
      dispatch(addHobby(newHobby));
      setNewHobby(''); // Clear the input field after adding a hobby
    }
  };

  const handleRemoveHobby = (hobby) => {
    dispatch(removeHobby(hobby));
  };

  console.log('favoriteHobbies:', favoriteHobbies); // Log the value of favoriteHobbies

  return (
    <div>
      <h2>Favorite Hobbies</h2>
      <input 
        type="text" 
        placeholder="Enter a new hobby" 
        value = {newHobby}
        onChange={(e) => setNewHobby(e.target.value)} // Update newHobby when input changes
      />
      <button onClick={() => handleAddHobby(newHobby)}>Add Hobby</button>
      <ul>
        {favoriteHobbies.map((hobby) => (
          <li key={hobby}>
            {hobby}
            <button onClick={() => handleRemoveHobby(hobby)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserInteract;
