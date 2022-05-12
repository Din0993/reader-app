import { createSlice } from "@reduxjs/toolkit";

// Inicijalno stanje za Book slice
const initialBooksState = {
  favoriteBooks: [],
  readBooks: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState: initialBooksState,
  reducers: {
    // Akcija za dodavanje nove knjige u favorite odnosno knjige koje korisnik cita
    // Prvo proveravamo da li je knjiga vec dodata u favorite ili se nalazi u knjigama koje je korisnik procitao
    // Ukoliko jeste izbacuje se alert sa odgovarajucom porukom
    // Ukoliko nije knjiga se dodaje u favorite
    addBook(state, action) {
      let isBookAddedFavorites = false;
      let isBookAddedRead = false;
      state.favoriteBooks.forEach((book) => {
        if (
          book.title === action.payload.title &&
          book.author === action.payload.author &&
          book.id === action.payload.id
        ) {
          isBookAddedFavorites = true;
        }
      });
      state.readBooks.forEach((book) => {
        if (
          book.title === action.payload.title &&
          book.author === action.payload.author &&
          book.id === action.payload.id
        ) {
          isBookAddedRead = true;
        }
      });

      if (!isBookAddedFavorites && !isBookAddedRead) {
        state.favoriteBooks.push(action.payload);
      } else {
        if (isBookAddedFavorites) alert("Book already added to favorites!");
        if (isBookAddedRead) alert("Book already read!");
      }
    },

    // Filtriramo pomocu filter metode trenutni state sa knjigama koje se nalaze u favoritima
    // Kada korisnik pritisne dugme Done ova akcija se poziva
    // state sa knjigama koje korisnik trenutno cita se menja tako ste se odabrana knjiga sklanja i prebacuje u procitane knjige
    readBook(state, action) {
      const filteredBooks = state.favoriteBooks.filter(
        (book) => book.title !== action.payload.title
      );
      state.favoriteBooks = filteredBooks;
      state.readBooks.push(action.payload);
    },

    // Kada korisnik pritisne dugme Delete book filtriramo oba state-a (knjige koje se citaju i procitane knjige)
    // Rezultat filtriranja jeste niz knjiga bez one knjige koju je korisnik obrisao
    deleteBook(state, action) {
      const filteredFavoriteBooks = state.favoriteBooks.filter(
        (book) =>
          book.title !== action.payload.title && book.id !== action.payload.id
      );
      const filteredReadBooks = state.readBooks.filter(
        (book) =>
          book.title !== action.payload.title && book.id !== action.payload.id
      );
      state.favoriteBooks = filteredFavoriteBooks;
      state.readBooks = filteredReadBooks;
    },

    // Trazimo index u kome se naziv knjige poklapa
    // Za index koji smo dobili dodajemo korisnikove beleske
    addBookNote(state, action) {
      const objIndexFavorite = state.favoriteBooks.findIndex(
        (book) => book.title === action.payload.title
      );

      const objIndexRead = state.readBooks.findIndex(
        (book) => book.title === action.payload.title
      );

      if (action.payload.notes !== "") {
        if (objIndexFavorite !== -1) {
          state.favoriteBooks[objIndexFavorite].notes.push(
            action.payload.notes
          );
        }
        if (objIndexRead !== -1) {
          state.readBooks[objIndexRead].notes.push(action.payload.notes);
        }
      }
    },

    // Identicno kao i za beleske, dodajemo listu za knjigu sa poklapajucim indexom
    addBookList(state, action) {
      const objIndexFavorite = state.favoriteBooks.findIndex(
        (book) => book.title === action.payload.title
      );

      const objIndexRead = state.readBooks.findIndex(
        (book) => book.title === action.payload.title
      );

      if (objIndexFavorite !== -1) {
        state.favoriteBooks[objIndexFavorite].list.push(action.payload.list);
      }
      if (objIndexRead !== -1) {
        state.readBooks[objIndexRead].list.push(action.payload.list);
      }
    },
  },
});

export const bookActions = booksSlice.actions;
export default booksSlice;
