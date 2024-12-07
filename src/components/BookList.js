import React from "react";

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        books.map((book, index) => (
          <div key={index} className="book-card">
            <h3>{book.title}</h3>
            <p>Author: {book.author_name?.join(", ") || "Unknown"}</p>
            <p>Published Year: {book.first_publish_year || "N/A"}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default BookList;
