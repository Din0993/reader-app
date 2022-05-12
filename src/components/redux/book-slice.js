import { createSlice } from "@reduxjs/toolkit";

const initialBooksState = {
  favoriteBooks: [],
  readBooks: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState: initialBooksState,
  reducers: {
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

    readBook(state, action) {
      const filteredBooks = state.favoriteBooks.filter(
        (book) => book.title !== action.payload.title
      );
      state.favoriteBooks = filteredBooks;
      state.readBooks.push(action.payload);
    },

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
