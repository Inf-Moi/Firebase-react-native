import React from 'react';
import { Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  return (
    <View style={{ marginTop: 100, padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>Pantalla de Login:</Text>
      <LoginScreen />
    </View>
  );
}
