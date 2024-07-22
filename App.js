import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, ScrollView, TouchableOpacity, Clipboard } from 'react-native';
import axios from 'axios';

export default function App() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState('');
  
  const getInfoFromApi = () => {
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        setResult(JSON.stringify(json, null, 2));
      })
      .catch(error => {
        setResult(JSON.stringify('We didn`t find anything!', null, 2));
      });
  };

  const copyJSONToClipboard = () => {
    Clipboard.setString(result);
    alert('JSON copied to clipboard!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PostCheck</Text>
      <View style={styles.line}></View>
      <BR />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="URL"
          onChangeText={(text) => setUrl(text)}
          value={url}
        />
        <Button title="Send" onPress={getInfoFromApi} />
      </View>
      <BR />
      <Text style={styles.result}>Result</Text>
      <TouchableOpacity onPress={copyJSONToClipboard}>
        <Text style={styles.copyButton}>Copy JSON to Clipboard</Text>
      </TouchableOpacity>
      <View style={styles.line}></View>
      <ScrollView style={styles.resultContainer}>
        <BR />
        <Text style={styles.result}>{result}</Text>
      </ScrollView>
    </View>
  );
}
// Using <BR /> like <br> in html
const BR = () => <View style={{ height: 23 }} />;

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
    fontSize: 22,
    color: 'gray',
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: 'black',
    marginBottom: 10,
  },
  copyButton: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});
