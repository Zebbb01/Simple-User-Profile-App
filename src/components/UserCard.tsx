import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { User } from '../types';

interface UserCardProps {
  user: User;
  onPress: () => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View>
        <Text style={styles.name}>{user.fullName}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.role}>{user.role}</Text>
      </View>
      <Text style={styles.chevron}>›</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  role: {
    fontSize: 12,
    color: '#007AFF',
    fontWeight: '600',
    marginTop: 4,
  },
  chevron: {
    fontSize: 24,
    color: '#ccc',
  },
});

export default UserCard;
