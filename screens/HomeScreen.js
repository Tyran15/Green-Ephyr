import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo ao Green Ephyr</Text>
      <Button
        title="Convensor de moedas"
        onPress={() => navigation.navigate('Convensor')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    text: {
        fontSize: '1rem',
    }
  });
