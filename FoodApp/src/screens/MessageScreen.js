import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const MessageScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text>Message Screen</Text>
        <Button title="Ir para OneScreen"  
          onPress={() => navigation.navigate('One')} 
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});

export default MessageScreen;