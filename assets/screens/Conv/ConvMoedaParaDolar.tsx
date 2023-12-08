import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import { Modalize } from "react-native-modalize";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as Font from "expo-font";

interface ConvMoedaParaDolarProps {}

const ConvMoedaParaDolar: React.FC<ConvMoedaParaDolarProps> = () => {
  const [coin, setCoin] = useState<string | null>(null);
  const [dinheiro, setDinheiro] = useState<string | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const [simboloCoin, setSimboloCoin] = useState<string | null>(null);

  useEffect(() => {
    loadFonts();
  }, []);

  const loadFonts = async () => {
    await Font.loadAsync({
      "coin-font": require("../../fonts/Coinsrpg-Regular.otf"),
    });
  };

  const modalizeRef1 = useRef<Modalize>(null);

  const onOpen1 = () => {
    modalizeRef1.current?.open();
  };

  const onClose1 = () => {
    modalizeRef1.current?.close();
  };

  const simbolo = () => {
    switch (coin) {
      case "Zigus":
        return "Σ";
      case "Lear":
        return "Ξ";
      case "Atla":
        return "Δ";
      case "Borul":
        return "Π";
      case "Kraken":
        return "@";
      case "Lonvicii":
        return "#";
      default:
        return "";
    }
  };

  const coin1 = (value: string) => {
    setCoin(value);
    onClose1();
    simbolo();
  };

  const Calculo = () => {
    const dinheiroFloat = parseFloat(dinheiro || '0');

    switch (coin) {
      case "Zigus":
        setResult(dinheiroFloat * 6.25);
        setSimboloCoin("Σ");
        break;
      case "Lear":
        setResult((dinheiroFloat / 50) * 6.25);
        setSimboloCoin("Ξ");
        break;
      case "Atla":
        setResult((dinheiroFloat / 200) * 6.25);
        setSimboloCoin("Δ");
        break;
      case "Borul":
        setResult((dinheiroFloat / 2) * 6.25);
        setSimboloCoin("Π");
        break;
      case "Kraken":
        setResult((dinheiroFloat / 10) * 6.25);
        setSimboloCoin("@");
        break;
      case "Lonvicii":
        setResult((dinheiroFloat / 25) * 6.25);
        setSimboloCoin("#");
        break;
      default:
        break;
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.caixa1}>
          <TouchableOpacity onPress={onOpen1} style={styles.iconName}>
            <Text style={coin !== null ? styles.coin : styles.defaultCoin}>
              {coin !== null ? simbolo() : ""}
            </Text>
            <Text style={styles.Selecao}>
              {coin !== null ? coin : "Selecione uma moeda"}
            </Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Digite o valor"
            value={dinheiro || ''}
            onChangeText={(text) => setDinheiro(text)}
            keyboardType="decimal-pad"
            style={styles.input}
          />
          <TouchableOpacity onPress={Calculo} style={styles.Calcular}>
            <Text style={styles.CalcularFont}>Calcular</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.caixa2}>
          <View style={styles.iconName}>
            <Text style={styles.coin}>$</Text>
            <Text style={styles.font_button}>Dólar</Text>
          </View>
          {result !== null && !isNaN(parseFloat(dinheiro || '0')) ? (
            <View style={styles.resultado}>
              <Text style={styles.font_button}>
                {simboloCoin + " " + result.toFixed(2)}
              </Text>
            </View>
          ) : null}
        </View>

        <Modalize
          ref={modalizeRef1}
          snapPoint={350}
          modalStyle={{ backgroundColor: "white" }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => coin1("Zigus")}
          >
            <Text style={styles.font_button}>Σ Zigus</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => coin1("Lear")}>
            <Text style={styles.font_button}>Ξ Lear</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => coin1("Atla")}>
            <Text style={styles.font_button}>Δ Atla</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => coin1("Borul")}
          >
            <Text style={styles.font_button}>Π Borul</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => coin1("Kraken")}
          >
            <Text style={styles.font_button}>@ Kraken</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => coin1("Lonvicii")}
          >
            <Text style={styles.font_button}># Lonvicci</Text>
          </TouchableOpacity>
        </Modalize>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    borderRadius: 10,
  },
  font_button: {
    fontSize: 25,
    fontFamily: "coin-font",
  },
  defaultCoin: {
    fontSize: 25,
    fontFamily: "coin-font",
    color: "transparent",
  },
  caixa1: {
    backgroundColor: "#CB91F9",
    width: "90%",
    height: 270,
    borderRadius: 10,
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    fontSize: 20,
    borderRadius: 10,
    width: "70%",
    textAlign: "center",
    height: 50,
    marginTop: 50,
  },
  Calcular: {
    textAlign: "center",
    backgroundColor: "#9869F4",
    marginTop: 20,
    borderRadius: 10,
    width: "70%",
    height: 50,
    justifyContent: "center",
  },
  CalcularFont: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  caixa2: {
    backgroundColor: "#CB91F9",
    width: "90%",
    height: 140,
    borderRadius: 10,
    alignItems: "center",
    margin: 30,
  },
  Selecao: {
    fontSize: 23,
  },
  resultado: {
    backgroundColor: "white",
    width: "70%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  coin: {
    fontFamily: "coin-font",
    marginRight: 5,
    fontSize: 50,
    backgroundColor: "white",
    height: 60,
    width: 60,
    padding: 10,
    textAlign: "center",
    alignItems: "center",
    marginLeft: 15,
    borderRadius: 50,
  },
  iconName: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    paddingRight: 150,
  },
});

export default ConvMoedaParaDolar;