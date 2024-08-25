import React from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';
import {BookShelves} from '../types';

interface ISegmentedButton {
  label: string;
  value: BookShelves;
}

interface ISegmentedButtons {
  buttons: ISegmentedButton[];
  value: BookShelves;
  setValue: React.Dispatch<React.SetStateAction<BookShelves>>;
}

const SegmentedButtons = (props: ISegmentedButtons) => {
  const {buttons, value, setValue} = props;
  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <Pressable
          key={index}
          style={[
            styles.btn,
            {
              backgroundColor:
                value === button.value ? '#4ecdc4' : 'transparent',
            },
          ]}
          onPress={() => setValue(button.value)}>
          <Text
            style={[
              styles.btnText,
              {
                color: value === button.value ? '#000' : '#fff',
              },
            ]}>
            {button.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default SegmentedButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  btn: {
    width: 170,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#4ecdc4',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 15,
    fontWeight: '500',
  },
});
