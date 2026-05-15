import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, User } from '../types';
import { mockUsers } from '../data/mockUsers';
import { getStoredUsers, saveUser } from '../utils/storage';
import InputField from '../components/InputField';
import Button from '../components/Button';

type NavigationProp = StackNavigationProp<RootStackParamList, 'AddUser'>;

const AddUserScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    role: 'Rider' as User['role'],
    address: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof typeof formData, string>>>({});

  const validate = async () => {
    const newErrors: Partial<Record<keyof typeof formData, string>> = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    } else {
      // Duplicate email check
      const storedUsers = await getStoredUsers();
      const allUsers = [...mockUsers, ...storedUsers];
      if (allUsers.some(u => u.email.toLowerCase() === formData.email.toLowerCase())) {
        newErrors.email = 'Email address already exists';
      }
    }

    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone Number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (await validate()) {
      const newUser: User = {
        id: Date.now().toString(),
        ...formData,
      };

      await saveUser(newUser);
      Alert.alert(
        "Success",
        "User added successfully!",
        [{ text: "OK", onPress: () => navigation.goBack() }]
      );
    }
  };

  const RoleSelector = () => (
    <View style={styles.roleContainer}>
      <Text style={styles.label}>Select Role</Text>
      <View style={styles.roleButtons}>
        {(['Rider', 'Merchant', 'Local Seller'] as User['role'][]).map((role) => (
          <TouchableOpacity
            key={role}
            style={[styles.roleButton, formData.role === role && styles.roleButtonActive]}
            onPress={() => setFormData({ ...formData, role })}
          >
            <Text style={[styles.roleButtonText, formData.role === role && styles.roleButtonTextActive]}>
              {role}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <InputField
          label="Full Name"
          value={formData.fullName}
          onChangeText={(text) => setFormData({ ...formData, fullName: text })}
          error={errors.fullName}
          placeholder="Enter full name"
        />
        <InputField
          label="Email"
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
          error={errors.email}
          placeholder="Enter email address"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <InputField
          label="Phone Number"
          value={formData.phoneNumber}
          onChangeText={(text) => setFormData({ ...formData, phoneNumber: text })}
          error={errors.phoneNumber}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
        />
        
        <RoleSelector />

        <InputField
          label="Address"
          value={formData.address}
          onChangeText={(text) => setFormData({ ...formData, address: text })}
          error={errors.address}
          placeholder="Enter address"
          multiline
        />

        <Button title="Save User" onPress={handleSave} style={styles.saveButton} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  form: {
    padding: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
    color: '#333',
  },
  roleContainer: {
    marginBottom: 20,
  },
  roleButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  roleButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  roleButtonActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  roleButtonText: {
    color: '#666',
  },
  roleButtonTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  saveButton: {
    marginTop: 10,
  },
});

export default AddUserScreen;
