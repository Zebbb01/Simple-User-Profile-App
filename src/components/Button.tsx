import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  variant?: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style, textStyle, variant = 'primary' }) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'secondary': return styles.secondary;
      case 'danger': return styles.danger;
      default: return styles.primary;
    }
  };

  return (
    <TouchableOpacity style={[styles.button, getButtonStyle(), style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  primary: {
    backgroundColor: '#007AFF',
  },
  secondary: {
    backgroundColor: '#6c757d',
  },
  danger: {
    backgroundColor: '#dc3545',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Button;
