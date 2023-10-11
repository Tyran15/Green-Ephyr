import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as font from "expo-font";

export default function SelectConv({ navigation }) {
  const LoadCoinFont = async () => {
    await font.loadAsync({
      'coin-font': require('../fonts/Coinsrpg-Regular.otf')
    });
  };

  LoadCoinFont();

  const [valor, setValor] = useState("");
  const Navigation = useNavigation();

  const headleConvMoedas = () => {
    Navigation.navigate("ConvMoedas");
  };

  const headleConvMoedaDolar = () => {
    Navigation.navigate("ConvMoedaDolar");
  };

  const headleConvDolarMoeda = () => {
    Navigation.navigate("ConvDolarMoeda");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.caixa} onPress={headleConvMoedas}>
        <Text style={styles.coin}>Σ</Text>
        <View style={styles.div}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Conversão</Text>
          <Text style={{ fontSize: 12 }}>Entre as moedas do jogo</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.caixa} onPress={headleConvDolarMoeda}>
        <Text style={styles.coin$}>$</Text>
        <View style={styles.div}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Conversão</Text>
          <Text style={{ fontSize: 12 }}>Dólar para as moedas do jogo</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.caixa} onPress={headleConvMoedaDolar}>
        <Text style={styles.coin}>Π</Text>
        <View style={styles.div}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Conversão</Text>
          <Text style={{ fontSize: 12 }}>Moedas do jogo para Dólar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  caixa: {
    backgroundColor: "#CB91F9",
    height: 75,
    width: 300,
    borderRadius: 10,
    justifyContent: "flex-start",
    paddingLeft: 2,
    alignItems: "center",
    flexDirection: "row",
    marginTop: 25,
  },
  coin: {
    fontFamily: "coin-font",
    marginRight: 20,
    fontSize: 35,
    backgroundColor: "white",
    height: 50,
    width: 50,
    padding: 10,
    textAlign: "center",
    alignItems: "center",
    marginLeft: 15,
    borderRadius: 50,
  },
  coin$: {
    fontFamily: "coin-font",
    marginRight: 20,
    fontSize: 35,
    backgroundColor: "white",
    height: 50,
    width: 50,
    padding: 12,
    textAlign: "center",
    alignItems: "center",
    marginLeft: 15,
    borderRadius: 50,
  },
});
