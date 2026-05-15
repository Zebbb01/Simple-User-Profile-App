import React, { useState, useCallback } from 'react';
import { View, FlatList, StyleSheet, TextInput } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, User } from '../types';
import { mockUsers } from '../data/mockUsers';
import { getStoredUsers } from '../utils/storage';
import UserCard from '../components/UserCard';
import Button from '../components/Button';
import EmptyState from '../components/EmptyState';

type NavigationProp = StackNavigationProp<RootStackParamList, 'UserList'>;

const UserListScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const loadUsers = useCallback(async () => {
    const storedUsers = await getStoredUsers();
    // Combine mock data with stored data
    setUsers([...mockUsers, ...storedUsers]);
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadUsers();
    }, [loadUsers])
  );

  const filteredUsers = users.filter(user => 
    user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by name or email..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      
      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UserCard 
            user={item} 
            onPress={() => navigation.navigate('UserDetails', { user: item })} 
          />
        )}
        ListEmptyComponent={<EmptyState message={searchQuery ? "No matching users found." : "No users available."} />}
        contentContainerStyle={styles.listContent}
      />

      <Button 
        title="Add User" 
        onPress={() => navigation.navigate('AddUser')} 
        style={styles.addButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  searchBar: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 16,
    fontSize: 16,
  },
  listContent: {
    paddingBottom: 80,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
});

export default UserListScreen;
