import React, { useRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Modalize } from "react-native-modalize";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function ConvDolarParaMoeda() {
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View>
          
        </View>
        <TouchableOpacity onPress={onOpen} style={styles.buttom}>
          <Text>Selecione uma moeda</Text>
        </TouchableOpacity>

        <Modalize ref={modalizeRef} snapPoint={300} modalStyle={{backgroundColor: '#CB91F9'}}>
          <TouchableOpacity style={styles.buttom}>
            <Text style={styles.font_buttom}>Clique em mim</Text>
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
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 20,
  },
  font_buttom: {
    fontSize: 22,
    color: 'white',
  },
});
