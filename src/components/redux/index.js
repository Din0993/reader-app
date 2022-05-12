import { configureStore, createSlice } from "@reduxjs/toolkit";
import booksSlice from "./book-slice";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

// Podesavanja za redux persist
const persistConfig = {
  key: "root",
  storage,
};

// Inicijalno stanje za Liste
const initialListState = {
  list: [
    [
      "Fantasy",
      "Adventure",
      "Romance",
      "Mystery",
      "Horror",
      "Thriller",
      "Science Fiction",
      "History",
      "Cooking",
      "Memoir",
      "Art",
      "Health",
      "Travel",
      "Magazine",
    ],
  ],
};

// Koriscen createSlice iz redux toolkita za kreiranje reducera
const listSlice = createSlice({
  name: "list",
  initialState: initialListState,
  reducers: {
    addList(state, action) {
      state.list.push(action.payload);
    },
  },
});

// Root reducer kreiran redux metodom combineReducers koji sadrzi sve reducere
const rootReducer = combineReducers({
  books: booksSlice.reducer,
  list: listSlice.reducer,
});

// persistedReducer nam sluzi kako bi svi podaci bili sacuvani lokalno preko redux persist biblioteke
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux store sa svim podacima
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
