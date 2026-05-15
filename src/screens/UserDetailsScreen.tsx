import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type DetailsRouteProp = RouteProp<RootStackParamList, 'UserDetails'>;

const UserDetailsScreen = () => {
  const route = useRoute<DetailsRouteProp>();
  const { user } = route.params;

  const DetailItem = ({ label, value }: { label: string, value: string }) => (
    <View style={styles.detailItem}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{user.fullName.charAt(0)}</Text>
          </View>
          <Text style={styles.name}>{user.fullName}</Text>
          <Text style={styles.roleHeader}>{user.role}</Text>
        </View>

        <View style={styles.divider} />

        <DetailItem label="Full Name" value={user.fullName} />
        <DetailItem label="Email" value={user.email} />
        <DetailItem label="Phone" value={user.phoneNumber} />
        <DetailItem label="Role" value={user.role} />
        <DetailItem label="Address" value={user.address} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  card: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 12,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  roleHeader: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 15,
  },
  detailItem: {
    marginBottom: 15,
  },
  label: {
    fontSize: 12,
    color: '#999',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});

export default UserDetailsScreen;
