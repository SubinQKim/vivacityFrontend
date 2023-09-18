import React, { useState } from 'react';
import axios from 'axios';

const BookSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&printType=books&key=${apiKey}`
      );

      const books = response.data.items || [];
      const resultsWithCovers = books.map((book) => {
        const bookInfo = book.volumeInfo;
        const coverLink = bookInfo.imageLinks?.thumbnail || '';
        return {
          title: bookInfo.title || 'No Title',
          authors: bookInfo.authors || ['Unknown Author'],
          description: bookInfo.description || 'No Description Available',
          coverLink: coverLink,
        };
      });

      setSearchResults(resultsWithCovers);
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
        {searchResults.map((book, index) => (
          <li key={index}>
            <img src={book.coverLink} alt={book.title} />
            <h3>{book.title}</h3>
            <p>Author(s): {book.authors.join(', ')}</p>
            <p>{book.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookSearch;
