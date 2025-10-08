import React from "react";
import {  Pressable, Text, StyleSheet, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  // Função que abre o link
  function abrirLink() {
    Linking.openURL("https://github.com/DalvanaRibeiro/UC15_241N_ComponentesPrincipais"); // link
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Botão que abre o link */}
      <Pressable style={styles.button} onPress={abrirLink}>
        <Text style={styles.text}>Conhecer</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CDE9D2", 
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#4B652E", 
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    elevation: 2,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
