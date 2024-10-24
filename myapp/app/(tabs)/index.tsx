import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Verse Section */}
      <View style={styles.verseContainer}>
        <View style={styles.verseCard}>
          <Text style={styles.arabicText}>قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ</Text>
          <Text style={styles.banglaText}>বল, ‘আমি আশ্রয় চাচ্ছি সকল ভোরের রব-এর,</Text>
          <Text style={styles.translationText}>- তাফসিরুল কুরআন</Text>
          <View style={styles.verseInfoContainer}>
            <TouchableOpacity style={styles.filterButtonActive}>
            <Text style={styles.surahInfoText}>সূরা ১১৩ / আল-ফালাক / ১</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButtonInactive}>
              <Text style={styles.audioDuration}><Image source={require('../../components/icons/recording-01-svgrepo-com 4.png')} style={styles.audioIcon} />
              2:39:32 <Image source={require('../../components/icons/bookmark-svgrepo-com 1.png')} style={styles.audioIcon} />

              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* History Section */}
      <View style={styles.userNotes}>
      <View style={styles.noteHeader}>
          <Image source={require('../../components/icons/history_tag.png')} style={styles.icon} />
          <Text style={styles.sectionTitle}>History</Text> 
          <Text style={styles.subTitle}>গতবার যে পর্যন্ত পড়ে রেখে গিয়েছেন</Text>
        </View>
        <ScrollView horizontal={true} style={styles.cards}>
          <TouchableOpacity style={styles.historyCard}>
            <Text style={styles.historyCardTitle}>সূরা ৬৭ আল-মুল্ক</Text>
            <Text style={styles.historyCardAyat}>আয়াত ৪ থেকে ৫</Text>
            <View style={styles.historyIconContainer}>
              <Text style={styles.historyIconText}>৬৭</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.historyCard}>
            <Text style={styles.historyCardTitle}>সূরা ৬৭ আল-মুল্ক</Text>
            <Text style={styles.historyCardAyat}>আয়াত ৪ থেকে ৫</Text>
            <View style={styles.historyIconContainer}>
              <Text style={styles.historyIconText}>৬৭</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>

      
      {/* User's Note Section */}
      <View style={styles.userNotes}>
        <View style={styles.noteHeader}>
          <Image source={require('../../components/icons/featured_tag.png')} style={styles.icon} />
          <Text style={styles.sectionTitle}>User's Note</Text>
          <Text style={styles.subTitle}>আপনার ব্যক্তিগত আয়াত নোট</Text>
        </View>
        <View style={styles.noteFilter}>
          <TouchableOpacity style={styles.filterButtonActive}>
            <Text style={styles.filterTextActive}>সূরার নাম অনুযায়ী</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButtonInactive}>
            <Text style={styles.filterTextInactive}>ট্যাগ নোট অনুযায়ী</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} style={styles.cards}>
          <TouchableOpacity style={styles.userNoteCard}>
            <ImageBackground source={require('../../components/icons/image.png')} style={styles.backgroundImage} resizeMode="cover">
              <Text style={styles.cardTitle}>সূরা আল-ফাতিহা</Text>
              <Text style={styles.cardAyat}>সূরা নং ১ | আয়াত ১ - ৭</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userNoteCard}>
            <ImageBackground source={require('../../components/icons/image.png')} style={styles.backgroundImage} resizeMode="cover">
              <Text style={styles.cardTitle}>সূরা আল-ফাতিহা</Text>
              <Text style={styles.cardAyat}>সূরা নং ১ | আয়াত ১ - ৭</Text>
            </ImageBackground>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Featured Section */}
      <View style={styles.userNotes}>
        <View style={styles.noteHeader}>
          <Image source={require('../../components/icons/featured_tag.png')} style={styles.icon} />
          <Text style={styles.sectionTitle}>Featured</Text> 
          <Text style={styles.subTitle}>কুরআনের সচরাচর গুরুত্বপূর্ণ সূরা</Text>
        </View>
        <ScrollView horizontal={true} style={styles.cards}>
          <TouchableOpacity style={styles.userNoteCard}>
            <ImageBackground source={require('../../components/icons/image.png')} style={styles.backgroundImage} resizeMode="cover">
              <Text style={styles.cardTitle}>সূরা আল-ফাতিহা</Text>
              <Text style={styles.cardAyat}>সূরা নং ১ | আয়াত ১ - ৭</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userNoteCard}>
            <ImageBackground source={require('../../components/icons/image.png')} style={styles.backgroundImage} resizeMode="cover">
              <Text style={styles.cardTitle}>সূরা আল-ফাতিহা</Text>
              <Text style={styles.cardAyat}>সূরা নং ১ | আয়াত ১ - ৭</Text>
            </ImageBackground>
          </TouchableOpacity>
        </ScrollView>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0E0E',
    paddingHorizontal: 20,
  },
  // Verse Section Styles
  verseContainer: {
    marginBottom: 20,
  },
  verseCard: {
    backgroundColor: '#0E0E0E',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    borderColor: '#90BE46',
    borderWidth: 3,
  },
  arabicText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  banglaText: {
    fontSize: 16,
    color: '#b3b3b3',
    textAlign: 'center',
    marginBottom: 5,
  },
  translationText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 10,
  },
  verseInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  surahInfo: {
    backgroundColor: '#6b7b22',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  surahInfoText: {
    color: '#fff',
    fontSize: 14,
  },
  audioInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  audioIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  audioDuration: {
    fontSize: 14,
    color: '#e6e6e6',
  },

  // History Section Styles
  historySection: {
    marginBottom: 20,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyCard: {
    borderRadius: 10,
    backgroundColor: '#0E0E0E',
    marginRight: 15,
    padding: 15,
    width: 250, // Card width
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#90BE46',
    borderWidth: 2,
  },
  historyCardTitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  historyCardAyat: {
    fontSize: 14,
    color: '#ccc',
  },
  historyIconContainer: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  historyIconText: {
    fontSize: 20,
    color: '#666',
  },

  // Featured Section Styles
  featuredSection: {
    marginBottom: 20,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  featuredCard: {
    borderRadius: 10,
    marginRight: 15,
    overflow: 'hidden',
    minWidth: 250, // Minimum width for dynamic sizing
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // User's Note Section Styles
  userNotes: {
    marginBottom: 20,
    backgroundColor: '#111', // Background color of the section
    padding: 15,
    borderRadius: 10,
  },
  noteHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  subTitle: {
    fontSize: 14,
    color: '#ccc',
    marginLeft: 10,
  },
  noteFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  cards: {
    // Add your desired styles here, for example:
    flexDirection: 'row',
    // Add other styles as needed
  },
  filterButtonActive: {
    backgroundColor: '#6b7b22',
    padding: 10,
    borderRadius: 20,
  },
  filterTextActive: {
    color: '#fff',
  },
  filterButtonInactive: {
    backgroundColor: '#666',
    padding: 10,
    borderRadius: 20,
  },
  filterTextInactive: {
    color: '#e6e6e6',
  },
  userNoteCard: {
    borderRadius: 10,
    marginRight: 15,
    minWidth: 250, // Minimum width for dynamic sizing
    height: 160,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardAyat: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});

export default HomeScreen;
