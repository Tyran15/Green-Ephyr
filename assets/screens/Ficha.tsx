import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

interface FichaProps {
  navigation: any;
}

const Ficha: React.FC<FichaProps> = ({ navigation }) => {
  const [valor, setValor] = useState('');

  return (
    <View>
      <Text>the Hello world is real</Text>
    </View>
  );
}

export default Ficha;
