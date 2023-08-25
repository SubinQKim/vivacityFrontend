import React from 'react';

const UserInfo = ({ data }) => {
  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      {/* Display more information as needed */}
    </div>
  );
};

export default UserInfo;
