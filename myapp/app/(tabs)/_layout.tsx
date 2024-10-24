// _layout.tsx
import React, { useState, ReactNode } from 'react'; // Import ReactNode
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <View style={styles.header}>
      <Image source={require('../../components/icons/IQRA.png')} style={styles.logo} />
      <View style={styles.headerRight}>
        <Image source={require('../../components/icons/avatar-man-muslim-svgrepo-com 1 1.png')} style={styles.headerIcon} />
        <Image source={require('../../components/icons/Group_41.svg')} style={styles.headerIcon3bar} />
      </View>
      {showDropdown && (
        <View style={styles.dropdown}>
          <TouchableOpacity style={styles.dropdownItem}>
            <Text>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem}>
            <Text>Settings</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

// Define the props for TabLayout
interface TabLayoutProps {
  children: ReactNode; // Explicitly type children
}

export default function TabLayout({ children }: TabLayoutProps) { // Use the defined type
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Fixed Header */}
      <Header />

      {/* Scrollable Content Area */}
      <ScrollView contentContainerStyle={styles.content}>
        {children} {/* Render children passed from HomeScreen */}
      </ScrollView>

      {/* Fixed Footer */}
      <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton}>
        <Image 
          source={require('../../components/icons/Vector.png')} 
          style={styles.footerIcon} 
        />
        <Text style={styles.footerLabel}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton}>
        <View style={styles.quranIconWrapper}>
          <Image 
            source={require('../../components/icons/Group 1171274955.png')} 
            style={styles.quranIcon} 
          />
          <Text style={styles.footerLabel}>কুরআন</Text>
          <Image 
            source={require('../../components/icons/Rectangle 3584.png')} 
            style={styles.quranIconOverlay} 
          />
        </View>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton}>
        <Image 
          source={require('../../components/icons/Vector (1).png')} 
          style={styles.icon} 
        />
        <Text style={styles.footerLabel}>Search</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#333',
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
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  headerRight: {
    flexDirection: 'row',
  },
  headerButton: {
    marginLeft: 16,
  },
  headerIcon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  headerIcon3bar: {
    width: 24,
    height: 22,
    marginLeft: 16,
  },
  // Removed invalid properties for Image component
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  dropdown: {
    position: 'absolute',
    top: 60,
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
  content: {
    paddingTop: 70, // Space for fixed header
    paddingBottom: 70, // Space for fixed footer
  },
  footer: {
    height: 60,
    backgroundColor: '#111111',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#333333',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  quranIconWrapper: {
    position: 'relative',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quranIcon: {
    width: 50,
    height: 24,
    resizeMode: 'contain',
  },
  quranIconOverlay: {
    position: 'absolute',
    width: 200,
    height: 50,
    resizeMode: 'contain',
  },
  footerLabel: {
    fontSize: 12,
    color: '#8DC63F',
    marginTop: 4,
  }
});
