import { createContext, useState, useReducer } from "react";

const myContext = createContext();
export default myContext;

export const ContextProvider = (props) => {
  const [fetchedBookData, setFetchedBookData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentCardData, setCurrentCardData] = useState();
  const [showModal, setShowModal] = useState(false);
  const [categoryMenu, setCategoryMenu] = useState(1);

  const fetchBook = async (val) => {
    const response =
      await fetch(`https://www.googleapis.com/books/v1/volumes?q=${val}&maxResults=20&
            &key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU`);

    const data = await response.json();

    const fetchedBooks = [];

    for (const key of data.items) {
      fetchedBooks.push({
        thumbnail: key.volumeInfo.imageLinks?.thumbnail,
        title: key.volumeInfo.title,
        authors: key.volumeInfo.authors,
        id: key.id,
        description: key.volumeInfo.description,
        pageCount: key.volumeInfo.pageCount,
        genre: key.volumeInfo.categories,
        publisher: key.volumeInfo.publisher,
        selected: null,
      });
    }

    setFetchedBookData(fetchedBooks);
  };

  const initialState = {
    read: [],
    wantToRead: [],
    currentlyReading: [],
    favorites: [],
  };

  const bookStatusReducer = (state, action) => {
    if (action.type === "categorizeBook") {
      const keys = Object.keys(state);
      const index = keys.indexOf(action.status);

      let addedArray;
      let updatedArray;

      for (let [key, value] of Object.entries(state)) {
        updatedArray = value.filter((book) => {
          return book.id !== action.item.id;
        });
        if (key === action.status) {
          addedArray = updatedArray.concat(action.item);
          addedArray.map((book) => (book.selected = action.status));
        }
        if (action.status === "remove") {
        }
      }

      return {
        ...state,
        [keys[index]]: addedArray,
      };
    }
  };

  const [statusState, dispatchStatus] = useReducer(
    bookStatusReducer,
    initialState
  );

  const loginFunction = () => {
    setIsLoggedIn((prevLogin) => !prevLogin);
  };

  return (
    <myContext.Provider
      value={{
        fetchBook,
        fetchedBookData,
        statusState,
        setCurrentCardData,
        currentCardData,
        dispatchStatus,
        loginFunction,
        isLoggedIn,
        showModal,
        setShowModal,
        categoryMenu,
        setCategoryMenu,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};
