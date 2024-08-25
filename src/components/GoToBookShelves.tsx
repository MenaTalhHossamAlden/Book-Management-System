import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from 'react-navigation/native';
import {StackParamList} from '../types';

type BookShelvesScreenProp = StackNavigationProp<StackParamList, 'BookShelves'>;

const GoToBookShelves = () => {
  const navigation = useNavigation<BookShelvesScreenProp>();
  return (
    <Pressable onPress={() => navigation.navigate('BookShelves')}>
      <Icon name="bookshelf" color="#4ecdc4" size={45} />
    </Pressable>
  );
};

export default GoToBookShelves;
