import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setApiData } from '../slices/apiDataSlice';
import Picture from './picture';
import UserInfo from './UserInfo';
import UserInteract from './UserInteract';
import BookSearch from './BookSearch';
import BookRecommendation from './BookRecommendation';
import TopBooksComponent from './TopBook';

const App = () => {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.apiData);

  //const [userInfo, setUserInfo] = useState(null);
  // Define favoriteHobbies using useState
  const [favoriteHobbies, setFavoriteHobbies] = useState([]);

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

  // console.log('favoriteHobbies:', favoriteHobbies); // Log the value of favoriteHobbies

  return (
    <div>
      <Picture onClick={handleImageClick} />
      {apiData && <UserInfo data={apiData} favorites = {favoriteHobbies}/>}
      <UserInteract /> {/* Include UserInteract component */}
      <BookSearch /> {}
      <BookRecommendation /> {}
      <TopBooksComponent /> {}
    </div>
  );
};

export default App;