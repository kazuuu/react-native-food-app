import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SIZES, COLORS } from '../constants'

const SearchScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
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

export default SearchScreen;
