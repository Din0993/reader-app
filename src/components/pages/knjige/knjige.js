import React from "react";
import { useSelector } from "react-redux";
import { HomepageBooksContainer, HomepageContainer } from "./knjige-style";

import BookCard from "../../book-card/book-card";

const Knjige = () => {
  // Preko useSelector hook uzimamo trenutni state za knjige koje korisnik cita i koje je procitao
  const favoriteBooks = useSelector((state) => state.books.favoriteBooks);
  const readBooks = useSelector((state) => state.books.readBooks);
  // Isto kao i na homepage stranici prolazimo kroz favoriteBooks i readBooks nizove i saljemo BookCard komponenti podatke za prikaz
  const renderedFavoriteBooks = favoriteBooks.map((book) => (
    <BookCard
      key={book.id}
      id={book.id}
      bookTitle={book.title}
      bookAuthor={book.author}
      bookNotes={book.notes}
      bookList={book.list}
      bookISBN={book.isbn}
      opcija="remove"
    />
  ));

  const renderedReadBooks = readBooks.map((book) => (
    <BookCard
      key={book.id}
      id={book.id}
      bookTitle={book.title}
      bookAuthor={book.author}
      bookNotes={book.notes}
      bookList={book.list}
      bookISBN={book.isbn}
      opcija="read"
    />
  ));

  return (
    <div>
      {" "}
      <HomepageContainer>
        <h1>Currently reading:</h1>
        <HomepageBooksContainer>{renderedFavoriteBooks}</HomepageBooksContainer>
      </HomepageContainer>
      <HomepageContainer>
        <h1>Read books:</h1>
        <HomepageBooksContainer>{renderedReadBooks}</HomepageBooksContainer>
      </HomepageContainer>
    </div>
  );
};

export default Knjige;
