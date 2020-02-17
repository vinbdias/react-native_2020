import React, { Fragment, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import estilo from './estilo';

const Foto = ({ urlFoto, descricao, qtdeLikes }) => {    

    const [curtiu, setCurtiu] = useState(false);
    const [likes, setLikes] = useState(qtdeLikes);

    const curtirFoto = () => {

        let qtde = likes;

        curtiu ? qtde-- : qtde++;        

        setLikes(qtde);
        setCurtiu(!curtiu);
    };

    return (
        <Fragment>
            <Image 
                style={estilo.imagem} 
                source={{ uri: urlFoto }}
            />
            <Text>{descricao}</Text>
            <View style={estilo.viewLike}>
                <TouchableOpacity onPress={curtirFoto}>
                    <Image style={estilo.like} source={imgLike(curtiu)}></Image>
                </TouchableOpacity>     
                <Text>{likes}</Text>       
            </View>
        </Fragment>
    );
}


const imgLike = (curtiu) => curtiu ?
    require('../../res/img/s2-checked.png') :
    require('../../res/img/s2.png');

export default Foto;