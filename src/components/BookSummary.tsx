import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import useAI from '../hooks/useAI';

interface IBookSummary {
  title: string;
  authors: string[];
}

const BookSummary = (props: IBookSummary) => {
  const {refetch} = useAI();
  return (
    <Pressable style={styles.btn} onPress={}>
      <Text style={styles.btnText}>AI Summary</Text>
    </Pressable>
  );
};

export default BookSummary;

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#4ecdc4',
    alignSelf: 'flex-start',
  },
  btnText: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
  },
});
