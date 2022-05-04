import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { MainStackNavigator } from './src/navigation/StackNavigators';

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}

export default App;
