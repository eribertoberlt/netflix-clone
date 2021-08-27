import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'react-native';
import Routes from './routes';
import Filme from './src/pages/Filme';

const App = () => {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#E50914',
      background: '#3C3C3C',
      placeholder: '#FFFFFF',
      text: '#FFFFFF'
    }
  }

  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor="#000"/>
        <Routes />
    </PaperProvider>
  );
}

export default App;