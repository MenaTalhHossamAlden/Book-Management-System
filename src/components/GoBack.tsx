import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const GoBack = () => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.container} onPress={() => navigation.goBack()}>
      <Icon name="arrow-back-circle" color="#4ecdc4" size={45} />
    </Pressable>
  );
};

export default GoBack;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
  },
});
