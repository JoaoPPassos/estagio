import React from 'react';
import { Route, NativeRouter } from 'react-router-native';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';

export default function App() {
  return (
    <NativeRouter>
      <Route path='/' exact component={Login} />
      <Route path='/cadastro' component={Cadastro} />
    </NativeRouter>
  );
}

