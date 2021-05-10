import React from 'react';
import Routes from './src/routes/index';

import { AuthProvider } from './src/Provider/authContext'

import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (

    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>

  );
}

