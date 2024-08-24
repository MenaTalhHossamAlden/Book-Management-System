import React from 'react';
import {StyleSheet, View} from 'react-native';
const Divider = () => {
  return <View style={styles.container}></View>;
};

export default Divider;

const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: '#fff',
    width: '95%',
    alignSelf: 'center',
  },
});
