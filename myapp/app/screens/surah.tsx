// surah.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function Surah() {
  const [surahs, setSurahs] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSurahs, setFilteredSurahs] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('http://ucchashbd.com/api/ayat')
      .then(response => {
        const uniqueSurahs = Array.from(new Set(response.data.map((item: any) => item.surah)));
        setSurahs(uniqueSurahs);
        setFilteredSurahs(uniqueSurahs);  // Initialize filteredSurahs with all surahs
      })
      .catch(error => console.error('Error fetching Surah list:', error));
  }, []);

   // Handle search and show suggestions
   const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setShowSuggestions(false);
      setFilteredSurahs(surahs);  // Show full list if search box is empty
    } else {
      const filtered = surahs.filter(surah =>
        surah.toLowerCase().includes(query.toLowerCase())
      );
      setShowSuggestions(true);  // Show suggestions while typing
      setFilteredSurahs(filtered);
    }
  };


  // Handle selecting a suggestion
  const handleSuggestionClick = (surah: string) => {
    setSearchQuery(surah);  // Set the clicked surah to the search box
    setShowSuggestions(false);  // Hide the suggestions after selecting
    setFilteredSurahs([surah]);  // Show the clicked surah in the list
  };
  const handleSearch = () => {
    const filtered = surahs.filter(surah =>
      surah.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredSurahs(filtered);
    setShowSuggestions(false);
  };



  const handleSurahSelect = (surah: string) => {
    navigation.navigate('SurahDetails', { surah });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>সুরা সমুহ</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="সুরা খুঁজুন..."
          value={searchQuery}
          onChangeText={handleSearchChange}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

       {/* Search Suggestions */}
       {showSuggestions && (
        <View style={styles.suggestionContainer}>
          {filteredSurahs.map((surah, index) => (
            <TouchableOpacity key={index} onPress={() => handleSuggestionClick(surah)}>
              <Text style={styles.suggestionText}>{surah}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <View style={styles.buttonContainer}>
        {filteredSurahs.map((surah, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => handleSurahSelect(surah)}
          >
            <Text style={styles.buttonText}>{surah}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f5f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#2b726a',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  suggestionContainer: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 10,
    marginBottom: 10,
    padding: 5,
    elevation: 5,
  },
  suggestionText: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
  noResultsText: {
    fontSize: 16,
    color: '#f00',
  },
});
