import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserListScreen from '../screens/UserListScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';
import AddUserScreen from '../screens/AddUserScreen';
import { RootStackParamList } from '../types';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="UserList"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#007AFF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="UserList" 
        component={UserListScreen} 
        options={{ title: 'Users' }} 
      />
      <Stack.Screen 
        name="UserDetails" 
        component={UserDetailsScreen} 
        options={{ title: 'User Details' }} 
      />
      <Stack.Screen 
        name="AddUser" 
        component={AddUserScreen} 
        options={{ title: 'Add New User' }} 
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
