import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>আপনি কিভাবে ব্যবহার করতে চান?</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.optionButton} onPress={() => router.push('/para')}>
          <Text style={styles.buttonText}>পারা ভিত্তিক কুরআন</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={() => router.push('/surah')}>
          <Text style={styles.buttonText}>সুরা ভিত্তিক কুরআন</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={() => router.push('/hadis')}>
          <Text style={styles.buttonText}>বিভিন্ন হাদিস </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={() => router.push('/surah')}>
          <Text style={styles.buttonText}>ইসলামিক প্রশ্নোত্তর  </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={() => router.push('/surah')}>
          <Text style={styles.buttonText}>অন্যন্য</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={() => router.push('/surah')}>
          <Text style={styles.buttonText}>সাইট এবাউট</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.bottomButton} onPress={() => alert('Account opening feature is under construction.')}>
        <Text style={styles.bottomButtonText}>শুরু করুন</Text>
      </TouchableOpacity>
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
  bottomButton: {
    backgroundColor: '#2b726a',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  bottomButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});
