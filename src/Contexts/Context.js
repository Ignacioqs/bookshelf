import { createContext, useState, useReducer } from "react";

const myContext = createContext();
export default myContext;

export const ContextProvider = (props) => {
  const [fetchedBookData, setFetchedBookData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetchBook = async (val) => {
    setIsLoading(true);
    setFetchedBookData([]);
    try {
      const response =
        await fetch(`https://www.googleapis.com/books/v1/volumes?q=${val}&maxResults=20&
            &key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU`);

      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

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
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const initialState = {
    read: [],
    wantToRead: [],
    currentlyReading: [],
    favorites: [],
  };

  const findBook = (list, id) => {
    return list?.find((i) => i.id === id);
  };

  const bookStatusReducer = (state, action) => {
    let books = Object.assign(state, {});
    const id = action.item.id;
    const categories = Object.keys(books);

    categories.forEach((category) => {
      if (findBook(books?.[category], id)) {
        books[category] = books?.[category]?.filter((item) => item.id !== id);
      }
    });

    books?.[action?.status]?.push(action?.item);

    return { ...books };
  };

  const [statusState, dispatchBookStatus] = useReducer(
    bookStatusReducer,
    initialState
  );

  return (
    <myContext.Provider
      value={{
        fetchBook,
        fetchedBookData,
        statusState,
        dispatchBookStatus,
        isLoading,
        error,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};
