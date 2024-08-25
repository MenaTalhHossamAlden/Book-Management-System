import React from 'react';
import {View} from 'react-native';
import {useRoute} from '@react-navigation/native';

const BookScreen = () => {
  const route = useRoute();
  const {bookId} = route?.params;
  return (
    <View style={styles.container}>
      <Text>Book id:  {bookId}</Text>
    </View>
  );
};

export default BookScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292f36',
  },
});
