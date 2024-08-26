import {create} from 'zustand';
import {BookShelves, IBookShelf} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Store = {
  books: IBookShelf[];
  addBook: (bookId: string, bookShelfId: BookShelves) => void;
  updateBook: (bookId: string, bookShelfId: BookShelves) => void;
  removeBook: (bookId: string) => void;
  loadFromLocalStorage: ()=>Promise<void>
};

const syncWithLocalStorage = async (books: IBookShelf[]) => {
  try {
    const jsonValue = JSON.stringify(books);
    await AsyncStorage.setItem('books', jsonValue);
  } catch (e) {
    // saving error
  }
};

const useBookShelves = create<Store>()(set => ({
  books: [],
  addBook: (bookId, bookShelfId) =>
    set(state => {
      const updatedBooks = [...state.books, {bookId, bookShelfId}];
      syncWithLocalStorage(updatedBooks);
      return {
        books: updatedBooks,
      };
    }),
  updateBook: (bookId, bookShelfId) =>
    set(state => ({
      const updatedBooks = state.books.map((book)=>{
        if(book.bookId === bookId) 
          return {...book, bookShelfId} 
        else return book
      });
      syncWithLocalStorage(updatedBooks);
      return {
        books: updateBooks,
      }
    })),
  removeBook: bookId =>
    set(state => {
      const updatedBooks = state.books.filter((book)=>book.bookId !== bookId);
      syncWithLocalStorage(updatedBooks);
      return {
        books: updatedBooks
      }
    }),
    loadFromLocalStorage: async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('books');
    if (jsonValue) {
      const books = JSON.parse(jsonValue);
      set({books});
    }
  } catch (e) {
    // error reading value
  }
},
}));

export default useBookShelves;
