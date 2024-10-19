import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../assets/home.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Image source={require('../assets/search.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Quran')}>
        <Image source={require('../assets/quran.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Hadis')}>
        <Image source={require('../assets/hadis.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/button.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    elevation: 4,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default Footer;
