import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {BookShelves} from '../types';
import SegmentedButtons from '../components/SegmentedButtons';
import {BOOK_SHELVES} from '../components/SelectBookShelf';
import {GoBack} from '../components/GoBack';

const BookShelvesScreen = () => {
  const [selectedBookShelf, setSelectedBookShelf] = useState(BookShelves.Read);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <GoBack />
        <SegmentedButtons
          buttons={BOOK_SHELVES}
          value={selectedBookShelf}
          setValue={setSelectedBookShelf}
        />
      </View>
    </View>
  );
};
export default BookShelvesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292f36',
  },
  header: {
    padding: 15,
    gap: 10,
  },
});
