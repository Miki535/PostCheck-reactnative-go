import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, ScrollView } from 'react-native';
import axios from 'axios';

export default function App() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState('');

  const handlePress = async () => {
    try {
      const response = await axios.get(url);
      setResult(JSON.stringify(response.data, null, 2));
    } catch (error) {
      setResult('Error fetching data');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prototype</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="URL"
          onChangeText={(text) => setUrl(text)}
          value={url}
        />
        <Button title="Send" onPress={handlePress} />
      </View>
      <ScrollView style={styles.resultContainer}>
        <Text style={styles.result}>{result}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  resultContainer: {
    flex: 1,
    marginTop: 20,
  },
  result: {
    fontSize: 16,
    color: 'gray',
  },
});
