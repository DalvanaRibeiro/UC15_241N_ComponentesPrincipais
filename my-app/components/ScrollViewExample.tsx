import React from "react"

import {View, ScrollView, Text} from "react-native"

// criando e exportando o componente
export default function ScrollViewExample(){
return(
    // View principal 
    <View
    style={{
        height: 180,    // altura fixa da área do ScrollView
        borderWidth: 1,   // espessura borda
        borderColor: "#333",
        borderRadius: 8,
        padding: 10,
       // backgroundColor: "#E3F2FD"

    }} 
    >
        <ScrollView>
            {/** Cada <Text> mostra um item da lista  */}
            <Text> Vigandores: Ultimato </Text>
            <Text> Filme </Text>
             <Text> Filme </Text>
            <Text> Filme </Text>
            <Text> Filme </Text>
            <Text> Filme </Text>
            <Text> Filme </Text>
            <Text> Filme </Text>
            <Text> Filme </Text>
            
        </ScrollView>

    </View>
)
}