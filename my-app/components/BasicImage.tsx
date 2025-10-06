import React from "react";

import {Image, StyleSheet} from "react-native"

type BasicImageProps = {
    uri: string // link da imagem
}
const BasicImage: React.FC<BasicImageProps> = ({ uri}) => {
    return <Image source={{uri}} style={styles.image} />
}
const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        borderRadius: 12,
        margin: 10
    }
})
export default BasicImage