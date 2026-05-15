import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../types';

const USERS_KEY = '@app_users';

export const getStoredUsers = async (): Promise<User[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(USERS_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Error reading users from storage', e);
    return [];
  }
};

export const saveUser = async (user: User): Promise<void> => {
  try {
    const existingUsers = await getStoredUsers();
    const updatedUsers = [...existingUsers, user];
    await AsyncStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));
  } catch (e) {
    console.error('Error saving user to storage', e);
  }
};
