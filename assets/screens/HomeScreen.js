import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    title: "Câmbio de moedas",
    text: "Câmbio das moedas do RPG",
    screen: "SelectConv",
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.item}
          onPress={() => navigation.navigate(item.screen)}
        >
          <View>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
            <Image />
          </View>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.box} onPress={null}>
        <View>
          <Text style={{ color: "white" }}>Livro de Regras</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={null}>
        <View>
          <Text style={{ color: "white" }}>Criação de Personagem</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={null}>
        <View>
          <Text style={{ color: "white" }}>Lore do RPG</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  item: {
    backgroundColor: "#CB91F9",
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    borderRadius: 12,
    width: 300,
    marginTop: 30,
    marginBottom: 40,
  },
  text: {
    color: "white",
  },
  box: {
    backgroundColor: "#CB91F9",
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    borderRadius: 12,
    width: 300,
    marginBottom: 30,
  },
});