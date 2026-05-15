export interface User {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  role: 'Rider' | 'Merchant' | 'Local Seller';
  address: string;
}

export type RootStackParamList = {
  UserList: undefined;
  UserDetails: { user: User };
  AddUser: undefined;
};
