import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {StyleSheet} from 'react-native';
import {BookShelves} from '../types';
import {Icon} from 'react-native-vector-icons/Entypo';
import useBookShelves from '../store';

const TickIcon = () => <Icon name="check" color="#4ecdc4" size={20} />;

export const BOOK_SHELVES = [
  {label: 'Want to Read', value: BookShelves.wantToRead},
  {label: 'Read', value: BookShelves.Read},
  {label: 'Currently Reading', value: BookShelves.CurrentlyReading},
];

interface ISelectBookShelf {
  bookId: string;
}

const SelectBookShelf = (props: ISelectBookShelf) => {
  const {bookId} = props;

  const {addBook, updateBook, books} = useBookShelves();

  const book = books.find(book => book.bookId === bookId);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(book?.bookShelfId);
  const [items, setItems] = useState(BOOK_SHELVES);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      onChangeValue={bookShelfId => {
        book
          ? updateBook(bookId, bookShelfId as BookShelves)
          : addBook(bookId, bookShelfId as BookShelves);
      }}
      setItems={setItems}
      listMode="SCROLLVIEW"
      placeholder="Select BookShelf"
      containerStyle={styles.container}
      TickIconComponent={TickIcon}
    />
  );
};

export default SelectBookShelf;

const styles = StyleSheet.create({
  container: {
    width: 300,
  },
});
