import React from 'react';

const UserInfo = ({ data }) => {
  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Hobbies: {data.hobbies[0]}</p>
      <p>Favorite: {data.favoriteCoffee}</p>
      {/* Display more information as needed */}
      <ul>
        {favorites.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserInfo;
