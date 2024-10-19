import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SearchScreen() {
  const [surahQuery, setSurahQuery] = useState('');
  const [paraQuery, setParaQuery] = useState('');
  const [pageQuery, setPageQuery] = useState('');
  const navigation = useNavigation();

  const handleSurahSearch = () => {
    navigation.navigate('SurahDetails', { surah: surahQuery });
  };

  const handleParaSearch = () => {
    navigation.navigate('ParaDetails', { para: paraQuery });
  };

  const handlePageSearch = () => {
    navigation.navigate('PageDetails', { page: pageQuery });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>দ্রুত খুঁজুন</Text>
      
      {/* Surah Search */}
      <View style={styles.searchGroup}>
        <Text>সূরা</Text>
        <TextInput
          style={styles.input}
          placeholder="সূরার নাম লিখুন"
          value={surahQuery}
          onChangeText={setSurahQuery}
        />
        <TouchableOpacity style={styles.button} onPress={handleSurahSearch}>
          <Text style={styles.buttonText}>খুঁজুন</Text>
        </TouchableOpacity>
      </View>

      {/* Para Search */}
      <View style={styles.searchGroup}>
        <Text>পারা</Text>
        <TextInput
          style={styles.input}
          placeholder="পারার নাম লিখুন"
          value={paraQuery}
          onChangeText={setParaQuery}
        />
        <TouchableOpacity style={styles.button} onPress={handleParaSearch}>
          <Text style={styles.buttonText}>খুঁজুন</Text>
        </TouchableOpacity>
      </View>

      {/* Page Search */}
      <View style={styles.searchGroup}>
        <Text>পৃষ্ঠা</Text>
        <TextInput
          style={styles.input}
          placeholder="পৃষ্ঠা লিখুন"
          value={pageQuery}
          onChangeText={setPageQuery}
        />
        <TouchableOpacity style={styles.button} onPress={handlePageSearch}>
          <Text style={styles.buttonText}>খুঁজুন</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#b0a48e',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchGroup: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ddd',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FF7F11',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
