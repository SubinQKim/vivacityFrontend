import React from 'react';

// pass the favorites prop:

const UserInfo = ({ data, UserInteract }) => {
  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Hobbies: {data.hobbies[0]}</p>
      <p>Favorite: {data.favoriteCoffee}</p>
      {/* Display more information as needed */}
      <ul>
        {UserInteract.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserInfo;
