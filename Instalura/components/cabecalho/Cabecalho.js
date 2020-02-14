import React from 'react';
import { View, Image, Text } from 'react-native';
import estilo from './estilo';
 
const Cabecalho = ({ nomeUsuario }) => 
    <View style={estilo.cabecalho}>
        <Image style={estilo.fotoUsuario} source={ require('../../res/img/alura.jpg') } />
        <Text>{nomeUsuario}</Text>
    </View>;

export default Cabecalho;