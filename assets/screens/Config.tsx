import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface ConfigProps {
  navigation: any;
}

const Config: React.FC<ConfigProps> = ({ navigation }) => {
  const [valor, setValor] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Config.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Config;
