/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  Text,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';

const largura = Dimensions.get('screen').width;

const App = () => {
  return (
    <ScrollView>
      <Text>Vinícius</Text>
      <Image 
        style={estilo.imagem} 
        source={require('./res/img/alura.jpg')}>          
      </Image>
      <Text>Luiz Filipe</Text>
      <Image 
        style={estilo.imagem} 
        source={require('./res/img/alura.jpg')}>
      </Image>
    </ScrollView>    
  );
};

const estilo = StyleSheet.create({
  imagem: {
    width: largura,
    height: largura
  }
});

export default App;
