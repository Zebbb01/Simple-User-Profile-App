import { supabase } from '../lib/supabase';
import { User } from '../types';

export const getStoredUsers = async (): Promise<User[]> => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*');
    
    if (error) {
      console.error('Supabase error:', error);
      return [];
    }
    return data || [];
  } catch (e) {
    console.error('Error reading users from Supabase', e);
    return [];
  }
};

export const saveUser = async (user: User): Promise<void> => {
  try {
    const { error } = await supabase
      .from('profiles')
      .insert([
        {
          fullName: user.fullName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          role: user.role,
          address: user.address,
        }
      ]);
    
    if (error) throw error;
  } catch (e) {
    console.error('Error saving user to Supabase', e);
  }
};
