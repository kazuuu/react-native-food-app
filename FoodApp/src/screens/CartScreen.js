import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SIZES, COLORS } from '../constants'

const CartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Cart Screen</Text>
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

export default CartScreen;
