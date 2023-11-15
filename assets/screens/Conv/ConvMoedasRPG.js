import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Modalize } from "react-native-modalize";
import {
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";
import * as Font from "expo-font";

export default function ConvMoedas() {
  const [coin, setCoin] = useState(null);
  const [coinConv, setCoinConv] = useState(null);
  const [dinheiro, setDinheiro] = useState(null);
  const [result, setResult] = useState(null);
  const [simboloCoin, setSimboloCoin] = useState(null);

  useEffect(() => {
    loadFonts();
  }, []);

  const loadFonts = async () => {
    await Font.loadAsync({
      "coin-font": require("../../fonts/Coinsrpg-Regular.otf"),
    });
  };

  const modalizeRef1 = useRef(null);
  const modalizeRef2 = useRef(null);

  const onOpen1 = () => {
    modalizeRef1.current?.open();
  };

  const onClose1 = () => {
    modalizeRef1.current?.close();
  };

  const onOpen2 = () => {
    modalizeRef2.current?.open();
  };

  const onClose2 = () => {
    modalizeRef2.current?.close();
  };

  const simbolo1 = () => {
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

  const simbolo2 = () => {
    switch (coinConv) {
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

  const coin1 = (value) => {
    setCoin(value);
    onClose1();
    simbolo1();
  };

  const coin2 = (value) => {
    setCoinConv(value);
    onClose2();
    simbolo2();
  };

  const Calculo = () => {
    const dinheiroFloat = parseFloat(dinheiro);

    switch (coin) {
      case "Zigus":
        switch (coinConv) {
          case "Zigus":
            setResult(dinheiroFloat * 1);
            setSimboloCoin("Σ");
            break;
          case "Lear":
            setResult(dinheiroFloat * 50);
            setSimboloCoin("Ξ");
            break;
          case "Atla":
            setResult(dinheiroFloat * 200);
            setSimboloCoin("Δ");
            break;
          case "Borul":
            setResult(dinheiroFloat * 2);
            setSimboloCoin("Π");
            break;
          case "Kraken":
            setResult(dinheiroFloat * 10);
            setSimboloCoin("@");
            break;
          case "Lonvicii":
            setResult(dinheiroFloat * 25);
            setSimboloCoin("#");
            break;
          default:
            break;
        }
        break;
      case "Lear":
        switch (coinConv) {
          case "Zigus":
            setResult(dinheiroFloat * 0.02);
            setSimboloCoin("Σ");
            break;
          case "Lear":
            setResult(dinheiroFloat * 1);
            setSimboloCoin("Ξ");
            break;
          case "Atla":
            setResult(dinheiroFloat * 4);
            setSimboloCoin("Δ");
            break;
          case "Borul":
            setResult(dinheiroFloat * 0.04);
            setSimboloCoin("Π");
            break;
          case "Kraken":
            setResult(dinheiroFloat * 0.2);
            setSimboloCoin("@");
            break;
          case "Lonvicii":
            setResult(dinheiroFloat * 0.5);
            setSimboloCoin("#");
            break;
          default:
            break;
        }
        break;
      case "Atla":
        switch (coinConv) {
          case "Zigus":
            setResult(dinheiroFloat * 0.005);
            setSimboloCoin("Σ");
            break;
          case "Lear":
            setResult(dinheiroFloat * 0.25);
            setSimboloCoin("Ξ");
            break;
          case "Atla":
            setResult(dinheiroFloat * 1);
            setSimboloCoin("Δ");
            break;
          case "Borul":
            setResult(dinheiroFloat * 0.01);
            setSimboloCoin("Π");
            break;
          case "Kraken":
            setResult(dinheiroFloat * 0.05);
            setSimboloCoin("@");
            break;
          case "Lonvicii":
            setResult(dinheiroFloat * 0.125);
            setSimboloCoin("#");
            break;
          default:
            break;
        }
        break;
      case "Borul":
        switch (coinConv) {
          case "Zigus":
            setResult(dinheiroFloat * 0.5);
            setSimboloCoin("Σ");
            break;
          case "Lear":
            setResult(dinheiroFloat * 25);
            setSimboloCoin("Ξ");
            break;
          case "Atla":
            setResult(dinheiroFloat * 100);
            setSimboloCoin("Δ");
            break;
          case "Borul":
            setResult(dinheiroFloat * 1);
            setSimboloCoin("Π");
            break;
          case "Kraken":
            setResult(dinheiroFloat * 5);
            setSimboloCoin("@");
            break;
          case "Lonvicii":
            setResult(dinheiroFloat * 12.5);
            setSimboloCoin("#");
            break;
          default:
            break;
        }
        break;
      case "Kraken":
        switch (coinConv) {
          case "Zigus":
            setResult(dinheiroFloat * 0.1);
            setSimboloCoin("Σ");
            break;
          case "Lear":
            setResult(dinheiroFloat * 5);
            setSimboloCoin("Ξ");
            break;
          case "Atla":
            setResult(dinheiroFloat * 20);
            setSimboloCoin("Δ");
            break;
          case "Borul":
            setResult(dinheiroFloat * 0.2);
            setSimboloCoin("Π");
            break;
          case "Kraken":
            setResult(dinheiroFloat * 1);
            setSimboloCoin("@");
            break;
          case "Lonvicii":
            setResult(dinheiroFloat * 2.5);
            setSimboloCoin("#");
            break;
          default:
            break;
        }
        break;
      case "Lonvicii":
        switch (coinConv) {
          case "Zigus":
            setResult(dinheiroFloat * 0.04);
            setSimboloCoin("Σ");
            break;
          case "Lear":
            setResult(dinheiroFloat * 2);
            setSimboloCoin("Ξ");
            break;
          case "Atla":
            setResult(dinheiroFloat * 8);
            setSimboloCoin("Δ");
            break;
          case "Borul":
            setResult(dinheiroFloat * 0.08);
            setSimboloCoin("Π");
            break;
          case "Kraken":
            setResult(dinheiroFloat * 0.4);
            setSimboloCoin("@");
            break;
          case "Lonvicii":
            setResult(dinheiroFloat * 1);
            setSimboloCoin("#");
            break;
          default:
            break;
        }
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
              {coin !== null ? simbolo1() : ""}
            </Text>

            <Text style={styles.Selecao}>
              {coin !== null ? coin : "Selecione uma moeda"}
            </Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Digite o valor"
            value={dinheiro}
            onChangeText={(text) => setDinheiro(text)}
            keyboardType="decimal-pad"
            style={styles.input}
          />
          <TouchableOpacity onPress={Calculo} style={styles.Calcular}>
            <Text style={styles.CalcularFont}>Calcular</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.caixa2}>
          <TouchableOpacity onPress={onOpen2} style={styles.iconName}>
            <Text style={coinConv !== null ? styles.coin : styles.defaultCoin}>
              {coinConv !== null ? simbolo2() : ""}
            </Text>
            <Text style={styles.font_button}>
              {coinConv !== null ? coinConv : "Selecione uma moeda"}
            </Text>
          </TouchableOpacity>
          {result !== null && !isNaN(parseFloat(dinheiro)) ? (
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
        <Modalize
          ref={modalizeRef2}
          snapPoint={350}
          modalStyle={{ backgroundColor: "white" }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => coin2("Zigus")}
          >
            <Text style={styles.font_button}>Σ Zigus</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => coin2("Lear")}>
            <Text style={styles.font_button}>Ξ Lear</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => coin2("Atla")}>
            <Text style={styles.font_button}>Δ Atla</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => coin2("Borul")}
          >
            <Text style={styles.font_button}>Π Borul</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => coin2("Kraken")}
          >
            <Text style={styles.font_button}>@ Kraken</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => coin2("Lonvicii")}
          >
            <Text style={styles.font_button}># Lonvicci</Text>
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
