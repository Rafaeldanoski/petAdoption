import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

const MyImageButton = (props) => {

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: props.btnColor }]}
      onPress={props.customClick}>

      <Icon style={styles.icon}
        name={props.btnIcon} size={30} color='black' />

      <Text style={styles.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    color: '#000000',
    padding: 1,
    marginTop: 10,
    marginLeft: 250,
    marginRight: 1,
    borderRadius: 50,
  },
  text: {
    color: '#000000',
  },
  icon: {
    paddingBottom: 5,
  }
});

export default MyImageButton;