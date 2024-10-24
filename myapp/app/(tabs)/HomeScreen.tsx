// HomeScreen.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import TabLayout from './_layout'; // Ensure this is the correct import

export default function HomeScreen() {
  const router = useRouter();

  return (
    <TabLayout>
      <Text style={styles.title}>আপনি কিভাবে ব্যবহার করতে চান?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => router.push('/para' as const)}
        >
          <Text style={styles.buttonText}>পারা ভিত্তিক কুরআন</Text>
        </TouchableOpacity>
        {/* Other buttons... */}
      </View>
    </TabLayout>
  );
}

const styles = StyleSheet.create({
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
});
