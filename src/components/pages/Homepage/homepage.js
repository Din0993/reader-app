import React, { useEffect, useState } from "react";
import BookCard from "../../book-card/book-card";

// Styled komponente za homepage stranicu
import {
  HomePageButton,
  HomepageContainer,
  HomePageInput,
  HomepageBooksContainer,
  HomePageLoadingText,
} from "./homepage-style";

const Homepage = () => {
  // useState konstante za postavljanje sta je korisnik uneo odnosno inputBooks,
  // koje knjige smo dobili od strane API-ja u fetchedBooks
  // kreiramo url i smestamo ga u konstantu url preko buttona
  // isLoading koji nam prikazuje da li se knjige ucitavaju ili ne kada pritisnemo dugme Search
  const [inputBooks, setInputBooks] = useState("");
  const [fetchedBooks, setFetchedBooks] = useState([]);
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // useEffect hook koji ce se pozvati svaki put kada se promeni url
  useEffect(() => {
    // Asinhrona funkcija fetchBooks preko koje saljemo get request API-ju
    // API nam vraca do 20 knjiga za korisnikov unos
    const fetchBooks = async () => {
      if (inputBooks !== "") {
        setIsLoading(true);
        setInputBooks("");
        let tempArr = [];
        const response = await fetch(url);
        const data = await response.json();
        if (data.numFound === 0) return;
        else if (data.numFound < 20) {
          for (let i = 0; i < data.numFound; i++) {
            tempArr.push(data.docs[i]);
          }
        } else {
          for (let i = 0; i < 20; i++) {
            tempArr.push(data.docs[i]);
          }
        }
        setFetchedBooks(tempArr);
        setIsLoading(false);

        tempArr = [];
      }
    };

    fetchBooks();
  }, [url]);

  // Metodom map, prolazimo kroz fetchedBooks niz i
  // saljemo komponenti BookCard sve sto joj pe potrebno kako bi prikazali knjige koje je korisnik trazio

  const booksToShow = fetchedBooks.map((book) => (
    <BookCard
      key={book.key.split("/")[2]}
      id={book.key.split("/")[2]}
      bookTitle={book.title}
      bookAuthor={book.author_name ? book.author_name[0] : ""}
      bookNotes={[]}
      bookList={[]}
      bookISBN={book.isbn ? book.isbn[0] : ""}
      opcija="home"
    />
  ));

  return (
    <div>
      <HomepageContainer>
        <HomePageInput
          type="text"
          value={inputBooks}
          onChange={(e) => setInputBooks(e.target.value)}
          placeholder="Search for books..."
        />
        <HomePageButton
          onClick={() =>
            setUrl(`http://openlibrary.org/search.json?title=${inputBooks}`)
          }
        >
          Search
        </HomePageButton>
      </HomepageContainer>
      {isLoading && (
        <HomePageLoadingText>Your books are loading....</HomePageLoadingText>
      )}
      <HomepageBooksContainer>{booksToShow}</HomepageBooksContainer>
    </div>
  );
};

export default Homepage;
