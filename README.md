# Simple User Profile App

## Tech Stack
- **Frontend**: React Native, Expo, TypeScript
- **Backend**: Supabase (PostgreSQL)
- **State Management**: React Hooks
- **Animations**: React Native Animated API

## Features
- **Real-time User Sync**: Data is fetched from and saved to a Supabase backend.
- **Fancy Notifications**: Custom animated Toast system for success/error feedback.
- **Pull-to-Refresh**: Refresh the user list manually to sync with the backend.
- **Loading States**: Integrated ActivityIndicators in buttons and lists for smooth UX.
- **Form Validation**: 
    - All fields are required.
    - Valid email format check.
    - Real-time duplicate email prevention (checks Supabase).
- **Basic Search**: Filter the user list by name or email.
- **Empty State**: Displays a friendly message when no users are found.
- **Clean UI**: Consistent styling using reusable components.

## Backend Setup (Supabase)
This app is integrated with Supabase. To set up the database table:
1. Go to your Supabase Dashboard.
2. Open the **SQL Editor**.
3. Copy the contents of [`supabase_schema.sql`](./supabase_schema.sql) (or [`src/migration/supabase_schema.sql`](./src/migration/supabase_schema.sql)) and run it.
4. This will create the `profiles` table and set up the necessary RLS (Row Level Security) policies for public access.

## Installation
1. Open Command Prompt (cmd).
2. Navigate to the project directory.
3. Run the following command:
```cmd
npm install
```

## Run the App
To start the application, run:
```cmd
npx expo start
```
*Note: If you are on Windows and PowerShell is restricted, use the standard Command Prompt (cmd) or press 'w' to run in the web browser.*

## New Components
- **`Toast`**: A custom animated notification component.
- **`Button`**: Enhanced with `loading` and `disabled` states.
- **`userService`**: A dedicated service layer for Supabase interactions.

## Notes
- **Supabase Integration**: The app uses `@supabase/supabase-js` and `react-native-url-polyfill`.
- **Persistence**: Data is persisted in a PostgreSQL database via Supabase.

---

