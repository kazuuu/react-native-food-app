import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { SIZES, COLORS } from '../constants'

const FavoriteScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Favorite Screen</Text>
      <Button title='Sair' onPress={() => navigation.replace('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FavoriteScreen;
