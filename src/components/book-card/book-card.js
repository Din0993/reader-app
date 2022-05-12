import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookActions } from "../redux/book-slice";
import {
  BookCardContainer,
  BookCardTitle,
  BookCardAddButton,
  BookCardTextContainer,
  BookCardInput,
  BookCardButtonsContainer,
  BookCardInputContainer,
  BookCardLabel,
  BookCardSelect,
  BookCardInfoContainer,
  BookCardImage,
} from "./book-card-style";

const BookCard = (props) => {
  // BookCard komponenta dobija od stranica props kao sto su id knjige,naziv knjige, beleske, liste ili kategorije kojima knjiga pripada
  // Od state-ova imamo note i selectedDropdown
  // Note sadrzi belesku koju korisnik unosi za zadatu knjigu
  // selectedDropdown sadrzi poslednji odabir liste korisnika iz padajuceg menija
  const [note, setNote] = useState("");
  const genreList = useSelector((state) => state.list.list);
  const [selectedDropdown, setSelectedDropdown] = useState(genreList[0][0]);

  // useDispatch koristimo kako bi izvrsili neku akciju kao sto je dodavanje knjiga, brisanje knjiga itd.
  const dispatch = useDispatch();
  let opcijaBtn = "";

  // Akcije i pomocna funkcija za setovanje trenutno izabrane opcije iz padajuceg menija
  const addBookHandler = () => {
    dispatch(
      bookActions.addBook({
        id: props.id,
        title: props.bookTitle,
        author: props.bookAuthor,
        isbn: props.bookISBN,
        notes: [],
        list: [],
      })
    );
  };

  const removeBookHandler = () => {
    dispatch(
      bookActions.readBook({
        id: props.id,
        title: props.bookTitle,
        author: props.bookAuthor,
        isbn: props.bookISBN,
        notes: props.bookNotes,
        list: props.bookList,
      })
    );
  };

  const deleteBookHandler = () => {
    dispatch(
      bookActions.deleteBook({
        id: props.id,
        title: props.bookTitle,
        author: props.bookAuthor,
      })
    );
  };

  const addBookNoteHandler = () => {
    dispatch(
      bookActions.addBookNote({
        id: props.id,
        title: props.bookTitle,
        notes: note,
      })
    );
    setNote("");
  };

  const addBookListHandler = () => {
    dispatch(
      bookActions.addBookList({
        id: props.id,
        title: props.bookTitle,
        list: selectedDropdown,
      })
    );
  };

  const handleSelect = (e) => {
    setSelectedDropdown(e.target.value);
  };

  // Uslovno renderovanje u zavisnosti koja opcija je prosledjena
  if (props.opcija === "remove") {
    opcijaBtn = (
      <BookCardAddButton onClick={removeBookHandler}>Done</BookCardAddButton>
    );
  } else if (props.opcija === "read" || props.opcija === "liste") {
    opcijaBtn = "";
  } else {
    opcijaBtn = (
      <BookCardAddButton onClick={addBookHandler}>Add</BookCardAddButton>
    );
  }

  let coverImage = `https://covers.openlibrary.org/b/isbn/${props.bookISBN}-M.jpg`;
  return (
    <div>
      <BookCardContainer>
        <BookCardInfoContainer>
          <BookCardTextContainer>
            <BookCardTitle>
              <span style={{ fontWeight: "bold" }}>Title:</span>{" "}
              {props.bookTitle}
            </BookCardTitle>
            <BookCardTitle>
              <span style={{ fontWeight: "bold" }}>Author:</span>{" "}
              {props.bookAuthor}
            </BookCardTitle>
            {props.bookNotes.length !== 0 ? (
              <BookCardTitle>
                <span style={{ fontWeight: "bold" }}>
                  Notes:
                  <br />
                </span>{" "}
                {props.bookNotes.map((note) => {
                  const date = new Date().toJSON().slice(0, 10);

                  return (
                    <div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {date + ": " + note}
                      </div>
                    </div>
                  );
                })}
              </BookCardTitle>
            ) : (
              ""
            )}
          </BookCardTextContainer>
          <BookCardImage src={coverImage} />
        </BookCardInfoContainer>

        <BookCardButtonsContainer>
          {opcijaBtn}{" "}
          {props.opcija !== "home" && props.opcija !== "liste" && (
            <BookCardAddButton onClick={deleteBookHandler}>
              Delete book
            </BookCardAddButton>
          )}
        </BookCardButtonsContainer>

        <BookCardButtonsContainer>
          {props.opcija !== "home" && props.opcija !== "liste" && (
            <BookCardInputContainer>
              <BookCardInput
                type="text"
                value={note}
                placeholder="Note..."
                onChange={(e) => setNote(e.target.value)}
              />
              <BookCardAddButton onClick={addBookNoteHandler}>
                Add note
              </BookCardAddButton>
            </BookCardInputContainer>
          )}
        </BookCardButtonsContainer>

        {props.opcija !== "home" && props.opcija !== "liste" && (
          <BookCardInputContainer>
            <form>
              <BookCardLabel>
                Select list:{" "}
                <BookCardSelect
                  value={selectedDropdown}
                  onChange={handleSelect}
                >
                  {genreList[0].map((list, i) => (
                    <option key={i} value={list}>
                      {list}
                    </option>
                  ))}
                </BookCardSelect>
              </BookCardLabel>
            </form>
            <BookCardAddButton onClick={addBookListHandler}>
              Add to list
            </BookCardAddButton>
          </BookCardInputContainer>
        )}
      </BookCardContainer>
    </div>
  );
};
export default BookCard;
