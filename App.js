import { StyleSheet, View} from 'react-native';
import CalculatorUI from './components/CalculatorUI';

export default function App() {
  return (
    <View style={styles.container}>
      <CalculatorUI />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})
