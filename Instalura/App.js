/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, useState, useEffect } from 'react';
import {  
  ScrollView,
  FlatList
} from 'react-native';
import { Cabecalho } from './components/cabecalho';
import { Foto } from './components/foto';
import getFotos from './res/api/feed';


const App = () => {    

  const [fotos, setFotos] = useState([]);

  useEffect(() => { getFotos(setFotos) }, []);

  return (
    <ScrollView>      
      <FlatList
        data={fotos}
        keyExtractor={ (item, index) => item.id.toString().concat(index.toString()) }
        renderItem={({ item }) =>
          <Fragment>
            <Cabecalho nomeUsuario={item.userName} urlImage={item.userURL} /> 
            <Foto urlFoto={item.url} descricao={item.description} qtdeLikes={item.likes} />                     
          </Fragment>
        } />      
    </ScrollView>    
  );
};

export default App;
