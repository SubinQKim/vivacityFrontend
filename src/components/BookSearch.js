import React, { useState } from 'react';
import axios from 'axios';

const BookSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  //require('dotenv').config(); // Load the dotenv library to access environment variables
    
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY; // Access the API key from the .env file

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}$printType=books&key=${apiKey}`
      );

      setSearchResults(response.data.items || []);
    } catch (error) {
      console.error('Error fetching book data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a book"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((book) => (
          <li key={book.id}>{book.volumeInfo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookSearch;
