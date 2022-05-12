import React from "react";
import { useSelector } from "react-redux";
import BookCard from "../../book-card/book-card";
import {
  HomepageBooksContainer,
  HomepageContainer,
} from "../knjige/knjige-style";

const Liste = () => {
  // Pored knjiga koje korisnik cita i koje je procitao uzimamo i niz lista ili kategorija kojima knjige mogu da pripadaju (genreList niz)
  const favoriteBooks = useSelector((state) => state.books.favoriteBooks);
  const readBooks = useSelector((state) => state.books.readBooks);
  const genreList = useSelector((state) => state.list.list);

  // Na osnovu genreList niza kreiramo novi niz objekata koji ce sadrzati naziv liste i sve knjige koje poseduju naziv te liste
  const lists = genreList[0].map((list) => {
    return {
      listName: list,
      books: [],
    };
  });

  // Prvo prolazimo kroz sve knjige u readBooks i favoriteBooks nizovima, zatim prolazimo kroz sve nazive lista u nizu lists
  // Ukoliko je naziv liste identican kao i lista koja se nalazi u objektu knjiga onda tu knjigu dodajemo u lists objekat koji kasnije prikazujemo na stranici lists
  readBooks.map((book) => {
    book.list.forEach((list) => {
      lists.forEach((listItem) => {
        if (listItem.listName === list) {
          listItem.books.push(book);
        }
      });
    });
  });

  favoriteBooks.map((book) => {
    book.list.forEach((list) => {
      lists.forEach((listItem) => {
        if (listItem.listName === list) {
          listItem.books.push(book);
        }
      });
    });
  });

  // U zavisnosti od toga da li je u objektu lists niz sa knjigama prazan prikazujemo ili ne prikazujemo to listu
  return (
    <div>
      {lists.map((list, i) => {
        if (list.books.length !== 0) {
          return (
            <HomepageContainer key={i}>
              <h1 key={i}>{list.listName}</h1>
              <HomepageBooksContainer>
                {list.books.map((book, i) => (
                  <BookCard
                    key={i}
                    id={book.id}
                    bookTitle={book.title}
                    bookAuthor={book.author}
                    bookNotes={book.notes}
                    bookISBN={book.isbn}
                    opcija="liste"
                  />
                ))}
              </HomepageBooksContainer>
            </HomepageContainer>
          );
        }
      })}
    </div>
  );
};
export default Liste;
