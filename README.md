# Simple User Profile App

## Tech Stack
- React Native
- Expo
- TypeScript

## Features
- **View user list from mock data**: Displays initial users (John Doe and Maria Santos) and any newly added users.
- **View user details**: Detailed profile view for each user including name, email, phone, role, and address.
- **Add new user locally**: A dedicated screen to add new users to the local state.
- **Form validation**: 
    - All fields are required.
    - Valid email format check.
    - Duplicate email address prevention.
- **AsyncStorage Persistence**: Users added locally are saved and persist even after the app is closed.
- **Basic Search**: Filter the user list by name or email.
- **Empty State**: Displays a friendly message when no users are found.
- **Clean UI**: Consistent styling using reusable components (`InputField`, `Button`, `UserCard`, `EmptyState`).

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

## Notes
- **Assumptions**: The app assumes a single-device local use case where users are stored in `AsyncStorage`.
- **Incomplete Parts**: None. All core and optional bonus tasks (Search, Empty State, Persistence, Confirmation Alerts) have been fully implemented.

---

