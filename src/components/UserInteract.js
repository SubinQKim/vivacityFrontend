import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addHobby, removeHobby } from '../slices/favoritesSlice';

const UserInteract = () => {
  const [hobbies, setHobbies] = useState(['', '', '']);
  const [hobbyInfo, setHobbyInfo] = useState([]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Fetch hobby information for each entered hobby
    for (const hobby of hobbies) {
      if (hobby.trim() !== '') {
        try {
          const response = await fetch(`https://example.com/api/hobbies/${hobby}`);
          const data = await response.json();
          setHobbyInfo((prevInfo) => [...prevInfo, data]);
        } catch (error) {
          console.error('Error fetching hobby information:', error);
          // Handle errors (e.g., display an error message to the user)
        }
      }
    }
  };

  return (
    <div>
      <h2>Favorite Hobbies</h2>
      <form onSubmit={handleFormSubmit}>
        {hobbies.map((hobby, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Enter hobby ${index + 1}`}
            value={hobby}
            onChange={(e) => {
              const updatedHobbies = [...hobbies];
              updatedHobbies[index] = e.target.value;
              setHobbies(updatedHobbies);
            }}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
      {/* Display hobby information here */}
      {hobbyInfo.map((info, index) => (
        <div key={index}>{info.name}: {info.description}</div>
      ))}
    </div>
  );
};

export default UserInteract;

  
//   const favoriteHobbies = useSelector((state) => state.favoriteHobbies);
//   const dispatch = useDispatch();
//   const [newHobby, setNewHobby] = useState(''); // Define and initialize newHobby state

//   const handleAddHobby = () => {
//     if (newHobby.trim() !== '') {
//       dispatch(addHobby(newHobby));
//       setNewHobby(''); // Clear the input field after adding a hobby
//     }
//   };

//   const handleRemoveHobby = (hobby) => {
//     dispatch(removeHobby(hobby));
//   };

//   console.log('favoriteHobbies:', favoriteHobbies); // Log the value of favoriteHobbies

//   return (
//     <div>
//       <h2>Favorite Hobbies</h2>
//       <input 
//         type="text" 
//         placeholder="Enter a new hobby" 
//         value = {newHobby}
//         onChange={(e) => setNewHobby(e.target.value)} // Update newHobby when input changes
//       />
//       <button onClick={() => handleAddHobby(newHobby)}>Add Hobby</button>
//       <ul>
//         {favoriteHobbies.map((hobby) => (
//           <li key={hobby}>
//             {hobby}
//             <button onClick={() => handleRemoveHobby(hobby)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserInteract;
