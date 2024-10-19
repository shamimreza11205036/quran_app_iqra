import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // Ensure correct icon library
import { IconProps } from 'react-native-vector-icons/Icon'; // Adjust if needed

// Define the TabBarIcon component
export function TabBarIcon({ name, style, ...rest }: IconProps<typeof Ionicons>) {
  return (
    <Ionicons
      name={name}
      size={28}
      style={[{ marginBottom: -3 }, style]}
      {...rest}
    />
  );
}
