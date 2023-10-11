import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    title: "Câmbio de moedas",
    text: "Câmbio das moedas do RPG",
    tela: "SelectConv",
  },
  { title: "Item 2", text: "Conteúdo do Item 2" },
  { title: "Item 3", text: "Conteúdo do Item 3" },
];

export default function HomeScreen() {
  const navigation = useNavigation();



  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.carouselItem}
      onPress={() => navigation.navigate(item.tela)}
    >
      <View>
        <Text style={styles.carouselText}>{item.title}</Text>
        <Text style={styles.carouselText}>{item.text}</Text>
        <Image />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={450}
        sliderHeight={300}
        itemWidth={200}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />
      <TouchableOpacity style={styles.caixa} onPress={null}>
        <View>
          <Text style={{ color: "white" }}>Livro de Regras</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.caixa} onPress={null}>
        <View>
          <Text style={{ color: "white" }}>Criação de Personagem</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.caixa} onPress={null}>
        <View>
          <Text style={{ color: "white" }}>Lore do RPG</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },

  carouselItem: {
    backgroundColor: "#CB91F9",
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    borderRadius: 12,
    width: 175,
    marginLeft: -50,
    marginTop: 40,
  },
  carouselText: {
    color: "white",
  },
  caixa: {
    backgroundColor: "#CB91F9",
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    borderRadius: 12,
    width: 300,
    marginBottom: 30,
  },
});