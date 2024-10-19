import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Tabs } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon'; // Ensure TabBarIcon is defined
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <View style={styles.header}>
      <Text style={styles.logo}>ABN Bangla Quran</Text>
      <TouchableOpacity onPress={toggleDropdown} style={styles.menuButton}>
        <Text style={styles.menuIcon}>☰</Text>
      </TouchableOpacity>
      {showDropdown && (
        <View style={styles.dropdown}>
          <TouchableOpacity style={styles.dropdownItem}>
            <Text>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem}>
            <Text>Quran</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header />
      <Tabs>
  <Tabs.Screen
    name="index"
    options={{
      title: 'Home',
      tabBarIcon: ({ color, focused }) => (
        <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
      ),
    }}
  />
  
  <Tabs.Screen
    name="quran"
    options={{
      title: 'Quran',
      tabBarIcon: ({ color, focused }) => (
        <TabBarIcon name={focused ? 'book' : 'book-outline'} color={color} />
      ),
    }}
  />

  <Tabs.Screen
    name="hadis"
    options={{
      title: 'Hadis',
      tabBarIcon: ({ color, focused }) => (
        <TabBarIcon name={focused ? 'document-text' : 'document-text-outline'} color={color} />
      ),
    }}
  />
  
  <Tabs.Screen
    name="search"
    options={{
      title: 'Search',
      tabBarIcon: ({ color, focused }) => (
        <TabBarIcon name={focused ? 'search' : 'search-outline'} color={color} />
      ),
    }}
  />

  {/* Conditionally render Para tab */}
  {false && ( // Set to false to hide this tab
    <Tabs.Screen
      name="para"
      options={{
        title: 'Para',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'menu' : 'menu-outline'} color={color} />
        ),
      }}
    />
  )}

</Tabs>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    zIndex: 1000,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuButton: {
    zIndex: 1000,
  },
  menuIcon: {
    fontSize: 28,
  },
  dropdown: {
    position: 'absolute',
    top: 50,
    right: 16,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    zIndex: 999,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: Platform.OS === 'ios' ? 80 : 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  footerLabel: {
    fontSize: 12,
    marginBottom: Platform.OS === 'ios' ? 20 : 0,
  },
  footerIcon: {
    marginBottom: 5,
  },
});
