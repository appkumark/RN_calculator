import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Button from './Button'

const CalculatorUI = () => {
  const [result, setResult] = useState('')

  const handleButtonPress = (buttonPressed) => {
    if (result === '' && buttonPressed === '0') {
        return;
    }
    if (buttonPressed === '=') {
      calculateResult()
    } else if (buttonPressed === 'C') {
      clearResult()
    } else {
      setResult((prevResult) => prevResult + buttonPressed)
    }
  }

  const calculateResult = () => {
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult('Error')
    }
  }

  const clearResult = () => {
    setResult('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {result ? (
          <Text style={styles.result}>{result}</Text>
        ) : (
          <Text style={styles.inputText}>{'input here'}</Text>
        )}
      </View>
      <View style={styles.buttonsContainer}>
        {[
          '7',
          '8',
          '9',
          '/',
          '4',
          '5',
          '6',
          '*',
          '1',
          '2',
          '3',
          '-',
          'C',
          '0',
          '=',
          '+',
        ].map((button) => (
          <Button
            title={button}
            onPress={() => handleButtonPress(button)}
            key={button}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  result: {
    fontSize: 30,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: 'blue',
    marginBottom: 20,
  },
  inputText: {
    fontSize: 30,
    color: '#DDDDDD',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '80%',
  },
})

export default CalculatorUI;
