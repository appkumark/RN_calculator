import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '15%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    margin: 10,
  },
  buttonText: {
    fontSize: 24,
  },
})

export default Button