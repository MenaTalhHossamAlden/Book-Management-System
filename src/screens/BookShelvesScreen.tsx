import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {BookShelves} from '../types';
import SegmentedButtons from '../components/SegmentedButtons';
import {BOOK_SHELVES} from '../components/SelectBookShelf';
import {GoBack} from '../components/GoBack';
import useBook from '../hooks/useBook';
import useBookShelves from '../store';
import BookShelfItem from '../components/BookShelfItem';
import Divider from '../components/Divider';

const BookShelvesScreen = () => {
  const [selectedBookShelf, setSelectedBookShelf] = useState(BookShelves.Read);

  const {books} = useBookShelves();

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(books)}</Text>
      <View style={styles.header}>
        <GoBack />
        <SegmentedButtons
          buttons={BOOK_SHELVES}
          value={selectedBookShelf}
          setValue={setSelectedBookShelf}
        />
      </View>
      <FlatList
        data={books}
        renderItem={({item}) => <BookShelfItem {...item} />}
        keyExtractor={item => item.bookId}
        contentContainerStyle={{
          padding: 15,
          gap: 5,
        }}
        itemSeparatorComponent={Divider}
      />
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
