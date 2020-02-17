import React from 'react';
import { View, Image, Text } from 'react-native';
import estilo from './estilo';
 
const Cabecalho = ({ nomeUsuario, urlImage }) => 
    <View style={estilo.cabecalho}>
        <Image style={estilo.fotoUsuario} source={{ uri: urlImage }} />
        <Text>{nomeUsuario}</Text>
    </View>;

export default Cabecalho;