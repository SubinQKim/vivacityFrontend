//import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setApiData } from './apiDataSlice';
import Picture from './picture';
import UserInfo from './UserInfo';
import UserInteract from './UserInteract';

const App = () => {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.apiData);

  //const [userInfo, setUserInfo] = useState(null);

  const handleImageClick = async () => {
    console.log('Image clicked');
    try {
      const response = await fetch('http://localhost:7001/awesome/applicant');
      const data = await response.json();
      dispatch(setApiData(data));
      //setUserInfo(data); // Update state with fetched data *update now replaced by redux
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <Picture onClick={handleImageClick} />
      {apiData && <UserInfo data={apiData} UserInteractionComponent = {favoriteHobbies}/>}
    </div>
  );
};

export default App;