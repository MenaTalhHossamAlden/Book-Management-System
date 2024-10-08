export interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    averageRating: number;
    description: string;
    imageLinks: {
      thumbnail: string;
    };
    pageCount: number;
    categories: string[];
    publisher: string;
    publishedDate: string;
    previewLink: string;
  };
}

export type StackParamList = {
  Home: undefined;
  Book: {
    bookId: string;
  };
  BookShelves: undefined;
};

export enum BookShelves {
  wantToRead,
  Read,
  CurrentlyReading,
}

export interface IBookShelf {
  bookId: string;
  bookShelfId: BookShelves;
}
