import React, { useRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Modalize } from "react-native-modalize";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as font from "expo-font";

export default function ConvMoedas() {
  const LoadCoinFont = async () => {
    await font.loadAsync({
      'coin-font': require('../../fonts/Coinsrpg-Regular.otf'),
    });
  };

  LoadCoinFont();
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View>
          
        </View>
        <TouchableOpacity onPress={onOpen} style={styles.buttom}>
          <Text>Selecione uma moeda</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onOpen} style={styles.buttom}>
          <Text>Selecione mais uma moeda</Text>
        </TouchableOpacity>

        <Modalize ref={modalizeRef} snapPoint={350} modalStyle={{backgroundColor: 'white'}}>
          <TouchableOpacity style={styles.buttom} onPress={onClose} >
            <Text style={styles.font_buttom}>Σ Zigus</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttom} onPress={onClose}>
            <Text style={styles.font_buttom}>Ξ Lear</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttom} onPress={onClose}>
            <Text style={styles.font_buttom}>Δ Atla</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttom} onPress={onClose}>
            <Text style={styles.font_buttom}>Π Borul</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttom} onPress={onClose}>
            <Text style={styles.font_buttom}>@ Kraken</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttom} onPress={onClose}>
            <Text style={styles.font_buttom}># Lonvicci</Text>
          </TouchableOpacity>
        </Modalize>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  buttom: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    borderRadius: 10,
  },
  font_buttom: {
    fontSize: 30,
    fontFamily: 'coin-font',
  },
});
