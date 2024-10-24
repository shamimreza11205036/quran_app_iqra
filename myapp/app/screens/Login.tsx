import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';

// Define the type for your navigation stack
type RootStackParamList = {
  UserHome: { email: string };
  Signup: undefined;
};

// Define the navigation prop type
type LoginScreenNavigationProp = NavigationProp<RootStackParamList, 'UserHome'>;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'All fields are required');
      return;
    }
  
    setLoading(true);
    console.log('Attempting to log in with:', email, password);
  
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password,
      });
  
      if (response.data.token) {
        // Store token in AsyncStorage
        await AsyncStorage.setItem('token', response.data.token);
  
        setLoading(false);
        // Show success alert
        Alert.alert('Success', 'You have successfully logged in.');
        // Navigate to UserHome and pass the email
        navigation.navigate('UserHome', { email });

        // Call fetchData to verify token usage
        fetchData();
      } else {
        Alert.alert('Error', 'Login failed. Please try again.');
        setLoading(false);
      }
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      Alert.alert('Error', 'An error occurred during login.');
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        const response = await axios.get('http://localhost:8000/api/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('Protected data:', response.data);
      } else {
        console.log('No token found');
      }
    } catch (error) {
      console.error('Error fetching protected data:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Log in to your account</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          inputMode="email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <Pressable
        style={styles.loginButton}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.loginButtonText}>{loading ? 'Logging in...' : 'Log In'}</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupLink}>Don't have an account? Sign Up</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0E0E0E', // Light background
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff', // Darker color for the title
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#777', // Subtle color for subtitle
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 20,
    backgroundColor: '#FFF', // White background for inputs
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  loginButton: {
    backgroundColor: '#90BE46',
    paddingVertical: 14,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#007BFF',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 4,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupLink: {
    color: '#90BE46',
    marginTop: 20,
    fontSize: 16,
  },
});
