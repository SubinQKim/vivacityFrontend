import React from 'react';

// pass the favorites prop:

const UserInfo = ({ data, favorites }) => {
  if (!favorites) {
    // Handle the case when favorites is undefined or null
    console.log(favorites)
    return <p>No favorite hobbies available.</p>;
  }
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
