import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, ScrollView } from 'react-native';
import axios from 'axios';

export default function App() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState('');

  
  const getInfoFromApi = () => {
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prototype</Text>
      <Text style={styles.line}></Text>
      <Text></Text>
      <Text></Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="URL"
          onChangeText={(text) => setUrl(text)}
          value={url}
        />
        <Button title="Send" onPress={getInfoFromApi} />
      </View>
      <ScrollView style={styles.resultContainer}>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.result}>Result</Text>
        <Text style={styles.line}></Text>
        <Text></Text>
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
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 20,
    color: 'orange',
    fontStyle: 'italic'
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
    fontSize: 20,
    color: 'gray',
  },
  line: {
    width: '100%',
    height: 2,   
    backgroundColor: 'black', 
  },
});
