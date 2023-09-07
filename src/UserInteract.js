import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addHobby, removeHobby } from './favoritesSlice';

const UserInteract = () => {
  const favoriteHobbies = useSelector((state) => state.favoriteHobbies);
  const dispatch = useDispatch();
  const [newHobby, setNewHobby] = useState(''); // Define and initialize newHobby state

  const handleAddHobby = (hobby) => {
    dispatch(addHobby(hobby));
  };

  const handleRemoveHobby = (hobby) => {
    dispatch(removeHobby(hobby));
  };

  return (
    <div>
      <h2>Favorite Hobbies</h2>
      <ul>
        {favoriteHobbies.map((hobby) => (
          <li key={hobby}>
            {hobby}
            <button onClick={() => handleRemoveHobby(hobby)}>Remove</button>
          </li>
        ))}
      </ul>
      <input 
        type="text" 
        placeholder="Enter a new hobby" 
        value = {newHobby}
        onChange={(e) => setNewHobby(e.target.value)} // Update newHobby when input changes
      />
      <button onClick={() => handleAddHobby(newHobby)}>Add Hobby</button>
    </div>
  );
};

export default UserInteract;
