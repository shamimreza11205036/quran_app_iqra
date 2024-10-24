import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const surahs = [
  { name: 'সূরা আল-ফাতিহা', number: 1 },
  { name: 'সূরা আল-বাকারা', number: 2 },
  { name: 'সূরা আল-ইমরান', number: 3 },
  { name: 'সূরা আন-নিসা', number: 4 },
  { name: 'সূরা আল-মায়িদা', number: 5 },
  { name: 'সূরা আল-আনআম', number: 6 },
  // Add more Surahs as needed
];

export default function QuranScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quran Screen</Text>
      <ScrollView>
        {surahs.map((surah) => (
          <TouchableOpacity
            key={surah.number}
            style={styles.surahCard}
            onPress={() => navigation.navigate('SurahDetail', { surah: surah })}
          >
            <Text style={styles.surahText}>{surah.name}</Text>
            <Text style={styles.surahNumber}>সূরা নং: {surah.number}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0E0E',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  surahCard: {
    backgroundColor: '#1F1F1F',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    borderColor: '#90BE46',
    borderWidth: 2,
  },
  surahText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  surahNumber: {
    fontSize: 14,
    color: '#ccc',
  },
});
