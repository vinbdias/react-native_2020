/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  ScrollView,
  FlatList
} from 'react-native';
import { Cabecalho } from './components/cabecalho';
import { Foto } from './components/foto';

const informacoes = [
  { id: 1, usuario: 'Vinícius' },
  { id: 2, usuario: 'Luiz Filipe' }  
];

const App = () => {
  return (
    <ScrollView>
      <FlatList
        data={informacoes}
        keyExtractor={ (item, index) => index.toString() }
        renderItem={({ item }) =>
          <Fragment>
            <Cabecalho nomeUsuario={item.usuario} /> 
            <Foto />                     
          </Fragment>
        } />      
    </ScrollView>    
  );
};

export default App;
