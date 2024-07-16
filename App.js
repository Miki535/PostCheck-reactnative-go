import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>PostCheck</Text>
      <Text class={{}}></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 60,
    height: 100,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 18,
    color: 'orange',
    textAlign: 'center'
  }
});
