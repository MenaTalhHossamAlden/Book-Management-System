import {create} from 'zustand';
import {BookShelves, IBookShelf} from '../types';

type Store = {
  books: IBookShelf[];
  addBook: (bookId: string, bookShelfId: BookShelves) => void;
  updateBook: (bookId: string, bookShelfId: BookShelves) => void;
};

const useBookShelves = create<Store>()(set => ({
  books: [],
  addBook: (bookId, bookShelfId) =>
    set(state => ({books: [...state.books, {bookId, bookShelfId}]})),
  updateBook: (bookId, bookShelfId) =>
    set(state => ({
      books: state.books.map(book => {
        if (book.bookId == bookId)
          return {
            ...book,
            bookShelfId,
          };
        return book;
      }),
    })),
}));

export default useBookShelves;
