import React from "react";
import {Text, StyleSheet} from "react-native"

type BasicTextProps = {
    content: string
}

const BasicText: React.FC<BasicTextProps> = ({content}) => {
    return<Text style={styles.text}>{content} </Text>
}
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color:"#1e293b",
        textAlign: "left",
        alignSelf: "flex-start",
        margin:10,
        width: "100%" // garante que ocupe toda a largura disponível
    }
})
export default BasicText