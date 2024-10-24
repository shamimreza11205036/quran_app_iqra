import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from 'react-native';
import { Tabs, useRouter } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useColorScheme } from '@/hooks/useColorScheme';

const Header = ({ showDropdown, toggleDropdown, showGroupDropdown, toggleGroupDropdown }) => {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <Image source={require('../../components/icons/IQRA.png')} style={styles.logo} />

      <View style={styles.headerRight}>
        {/* Avatar Icon as the dropdown trigger */}
        <TouchableOpacity onPress={toggleDropdown}>
          <Image
            source={require('../../components/icons/avatar-man-muslim-svgrepo-com 1 1.png')}
            style={styles.headerIcon}
          />
        </TouchableOpacity>

        {/* Group_41.svg Icon for dropdown */}
        <TouchableOpacity onPress={toggleGroupDropdown}>
          <Image
            source={require('../../components/icons/Group_41.svg')}
            style={styles.headerIcon3bar}
          />
        </TouchableOpacity>
      </View>

      {/* Avatar Dropdown Menu */}
      {showDropdown && (
        <View style={styles.dropdown}>
          <TouchableOpacity onPress={() => router.push('../screens/Signup')}>
            <Text style={styles.dropdownItem}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('../screens/Login')}>
            <Text style={styles.dropdownItem}>Sign In</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Group_41 Dropdown Menu */}
      {showGroupDropdown && (
        <View style={styles.dropdown}>
          <TouchableOpacity onPress={() => router.push('../screens/Para')}>
            <Text style={styles.dropdownItem}>Para</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('../screens/Quran')}>
            <Text style={styles.dropdownItem}>Quran</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('../screens/Hadis')}>
            <Text style={styles.dropdownItem}>Hadis</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const TabLayout = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useColorScheme();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showGroupDropdown, setShowGroupDropdown] = useState(false);
  const router = useRouter();

  const handleOutsidePress = () => {
    setShowDropdown(false);
    setShowGroupDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
    if (showGroupDropdown) setShowGroupDropdown(false); // Close group dropdown if it's open
  };

  const toggleGroupDropdown = () => {
    setShowGroupDropdown(prev => !prev);
    if (showDropdown) setShowDropdown(false); // Close avatar dropdown if it's open
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Header
          showDropdown={showDropdown}
          toggleDropdown={toggleDropdown}
          showGroupDropdown={showGroupDropdown}
          toggleGroupDropdown={toggleGroupDropdown}
        />
        <Tabs>
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <Image source={require('../../components/icons/Vector.png')} style={styles.icon} />
              ),
            }}
          />
          <Tabs.Screen
            name="quran"
            options={{
              title: '',
              tabBarIcon: ({ color, focused }) => (
                <Image source={require('../../components/icons/qb.png')} style={styles.qb} />
              ),
            }}
          />

          <Tabs.Screen
            name="search"
            options={{
              title: 'Search',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <Image source={require('../../components/icons/Vector (1).png')} style={styles.icon} />
              ),
            }}
          />
        </Tabs>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e0e',
    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 60,
    paddingTop:60,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#0E0E0E',
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
    alignItems: 'center',
  },
  headerIcon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  headerIcon3bar: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  dropdown: {
    position: 'absolute',
    top: 60,
    right: 16,
    backgroundColor: '#6b7b22',
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
    paddingTop: 70,
    paddingBottom: 70,
  },
  footer: {
    height: 60,
    backgroundColor: '#0E0E0E',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#0E0E0E',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  footerLabel: {
    fontSize: 12,
    color: '#0E0E0E',
    marginTop: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  qb: {
    width: 350, // Adjust this percentage based on your layout
    height: 100, // Or set a fixed height if you prefer
    margin: 8,      // Add margin for better spacing
   // resizeMode: 'contain', // Ensure the entire icon is visible
},


  icon: {
    width: 24,
    height: 24,
  },
});

export default TabLayout;
