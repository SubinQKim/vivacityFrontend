import React from 'react';

const UserInfo = ({ data }) => {
  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Favorite: {data.favoriteCoffee}</p>
      {/* Display more information as needed */}
    </div>
  );
};

export default UserInfo;
