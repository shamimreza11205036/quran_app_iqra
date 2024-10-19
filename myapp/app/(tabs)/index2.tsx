import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // For icons

const DhikrScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://example.com/logo.png' }} // Placeholder image
          style={styles.logo}
        />
        <Text style={styles.headerText}>ইকরা</Text>
        <TouchableOpacity>
          <FontAwesome name="bars" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Verse Section */}
      <View style={styles.verseContainer}>
        <Text style={styles.arabicText}>قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ</Text>
        <Text style={styles.translationText}>বল, ‘আমি আশ্রয় চাচ্ছি সকাল ব্রহ্মাণ্ডের পালনকর্তার</Text>
        <View style={styles.verseActions}>
          <TouchableOpacity style={styles.surahInfo}>
            <Text style={styles.surahText}>সূরা ১১৩ / আল-ফালাক</Text>
          </TouchableOpacity>
          <Text style={styles.duration}>2:39:32</Text>
          <FontAwesome name="bookmark" size={24} color="black" />
        </View>
      </View>

      {/* History Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>History</Text>
        <Text style={styles.sectionDescription}>সম্প্রতি পড়া সূরাগুলি দেখুন</Text>
        {/* Add history items */}
      </View>

      {/* Surah Cards */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>সূরা ১১৩ আল-ফালাক</Text>
          <FontAwesome name="book" size={24} color="black" />
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>সূরা ১১৪ আল-নাস</Text>
          <FontAwesome name="book" size={24} color="black" />
        </View>
      </View>

      {/* User's Note Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>User's Note</Text>
        <Text style={styles.sectionDescription}>আপনার ব্যক্তিগত আয়াতের নোট</Text>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="home" size={24} color="purple" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="book" size={24} color="purple" />
          <Text>Quran</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="search" size={24} color="purple" />
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 40,
    height: 40,
    borderWidth: 1, // Placeholder border
    borderColor: 'gray',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  verseContainer: {
    backgroundColor: '#E0F7FA',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    borderWidth: 2, // Adding border
    borderColor: 'purple', // Change to preferred color
  },
  arabicText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  translationText: {
    fontSize: 16,
    marginTop: 10,
    color: '#000',
    textAlign: 'center',
  },
  verseActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  surahInfo: {
    backgroundColor: '#8BC34A',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  surahText: {
    color: '#FFF',
  },
  duration: {
    fontSize: 16,
    color: '#000',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#666',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '48%',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1, // Adding border
    borderColor: 'gray',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderColor: '#EEE',
  },
  navItem: {
    alignItems: 'center',
  },
});

export default DhikrScreen;
