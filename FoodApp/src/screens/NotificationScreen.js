import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
} from 'react-native';

import { SIZES, COLORS } from '../constants'

const NotificationScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Notification Screen</Text>
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

export default NotificationScreen;
