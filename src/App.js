import React, { useState } from 'react';
import Picture from './picture';
import UserInfo from './UserInfo';

const App = () => {
  const [userInfo, setUserInfo] = useState(null);

  const handleImageClick = async () => {
    try {
      const response = await fetch('http://localhost:7001/fun/info');
      const data = await response.json();
      setUserInfo(data); // Update state with fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <Picture onClick={handleImageClick} />
      {userInfo && <UserInfo data={userInfo} />}
    </div>
  );
};

export default App;