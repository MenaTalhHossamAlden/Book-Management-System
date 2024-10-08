import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Linking,
  useWindowDimensions,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import useBook from '../hooks/useBook';
import GoBack from '../components/GoBack';
import BookItem from '../components/BookItem';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Feather';
import RenderHtml from 'react-native-render-html';
import {StackParamList} from '../types';
import SelectBookShelf from '../components/SelectBookShelf';
import BookSummary from '../components/BookSummary';

type BookScreenRouteProp = RouteProp<StackParamList, 'Book'>;

const BookScreen = () => {
  const route = useRoute<BookScreenRouteProp>();
  const {bookId} = route.params;
  const {data, isFetching, error} = useBook(bookId);
  if (isFetching) return <ActivityIndicator color="#4ecdc4" />;
  if (error) return <Text>Error</Text>;
  const {categories, publisher, publishedDate, previewLink, description} =
    data!.volumeInfo;

  const {width} = useWindowDimensions();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        padding: 15,
        gap: 15,
      }}>
      <View style={styles.header}>
        <GoBack />
        <SelectBookShelf bookId={bookId} />
      </View>
      <BookItem {...data} isDescription={false} isPressable={false} />
      <View style={styles.categories}>
        {categories.map((category, index) => (
          <Text key={index} style={styles.category}>
            {category}
          </Text>
        ))}
      </View>
      <Text style={styles.publisher}>
        Published by {publisher} on {moment(publishedDate).format('LL')}
      </Text>
      <Pressable
        onPress={async () => await Linking.openURL(previewLink)}
        style={styles.btn}>
        <Text style={styles.btnText}>view</Text>
        <Icon name="external-link" color="#4eced4" size={20} />
      </Pressable>

      <RenderHtml contentWidth={width} source={{html: description}} />
      <BookSummary
        title={data!.volumeInfo.title}
        authors={data!.volumeInfo.authors}
      />
    </ScrollView>
  );
};

export default BookScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292f36',
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  category: {
    fontSize: 13,
    fontWeight: '500',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderColor: '#4ecdc4',
    color: '#4ecdc4',
  },
  publisher: {
    fontSize: 15,
  },
  btn: {
    borderWidth: 1,
    borderColor: '#4ecdc4',
    alignSelf: 'flex-start',
    paddingHorizontal: '15',
    paddingVertical: '10',
    borderRadius: 10,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 15,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
