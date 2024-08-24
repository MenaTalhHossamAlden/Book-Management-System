import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import {IBook} from '../types';
const BookItem = (props: IBook) => {
  const {id, volumeInfo} = props;
  const {imageLinks, title, authors, pageCount, description} = volumeInfo;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            imageLinks?.thumbnail ||
            'https://images.unsplash.com/photo-1499332347742-4946bddc7d94?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.authors}>{authors?.join(', ')}</Text>
        <Text style={styles.pages}>{pageCount} page</Text>
        <Text style={styles.description} numberOfLines={5}>
          {description}  
        </Text>
      </View>
    </View>
  );
};
export default BookItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    gap: 20,
  },
  image: {
    width: 200,
    height: 270,
    borderRadius: 5,
  },
  info: {
    gap: 12,
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  authors: {
    fontSize: 16,
    color: '#4ecdc4',
  },
  pages: {
    fontSize: 15,
  },
  description: {
    fontSize: 16,
  },
});
