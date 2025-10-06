import React from "react";
import {View, StyleSheet, Image} from "react-native"

// importa os componentes 
// importa componente texto
import BasicText from "@/components/BasicText";
// importa componente de imagem
import BasicImage from "@/components/BasicImage";

// componente principal
export default function App(){
  return(
    <View style={styles.container}>
      <BasicText content="Olá, mundo!" />
      <BasicImage uri="https://tpmidia.wordpress.com/wp-content/uploads/2012/03/sextaalegria.jpg"/>
      {/** Usando uma imagem de Assets */}
      <Image
      source={require("../../assets/alegria.jpg")}
      style={{ width: 100, height: 100}}
      
      />
          </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,  // ocupar toda a tela na horizontal RN
    justifyContent: "center", // centraliza verticalmente
    alignItems: "center", // centraliza horizontalmentne
    backgroundColor: "#4b95daff",
    padding: 16
  }
})