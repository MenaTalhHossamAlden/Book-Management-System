import React from 'react';
import {Text, Pressable, View, TextInput, StyleSheet} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="search books"
        placeholderTextColor="#000"
      />
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>search</Text>
      </Pressable>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    gap: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    fontSize: 15,
    color: '#000',
    flex: 1,
    borderRadius: 10,
  },
  btn: {
    paddingHorizontal: 20,
    backgroundColor: '#4ecdc4',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnText: {
    fontSize: 15,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});
