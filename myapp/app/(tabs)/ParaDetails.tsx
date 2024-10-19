// SurahDetails.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';

export default function ParaDetails() {
  const route = useRoute();
  const { surah } = route.params;
  const [ayat, setAyat] = useState<any[]>([]);

  useEffect(() => {
    // Fetch Ayat details from API for the selected Surah
    axios.get('http://ucchashbd.com/api/ayat')
      .then(response => {
        const filteredAyat = response.data.filter((item: any) => item.surah === para);
        setAyat(filteredAyat);
      })
      .catch(error => console.error('Error fetching Ayat details:', error));
  }, [surah]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>পারা: {surah}</Text>
      <View style={styles.ayatContainer}>
        {ayat.map((item, index) => (
          <View key={index} style={styles.ayatItem}>
            <View style={styles.ayatNumberContainer}>
              <Text style={styles.ayatNumber}>{item.ayat_no}</Text>
            </View>
            <View style={styles.ayatTextContainer}>
              <Text style={styles.ayatText}>{item.ayat}</Text>
              {item.tafsir && (
                <TouchableOpacity onPress={() => alert(`Tafsir: ${item.tafsir}`)}>
                  <Text style={styles.tafsirLink}>Tafsir</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  ayatContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 20,
  },
  ayatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  ayatNumberContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  ayatNumber: {
    fontSize: 16,
    color: '#333',
  },
  ayatTextContainer: {
    flex: 1,
  },
  ayatText: {
    fontSize: 16,
    color: '#333',
  },
  tafsirLink: {
    color: '#2b726a',
    marginTop: 5,
    fontSize: 14,
  },
});
