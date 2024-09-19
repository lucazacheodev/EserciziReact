import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import {
    FlatList,
    View
} from 'react-native';
import CardPokemon from '../components/CardPokemon';
import { StackParamList } from './Pokedex';

type Props = NativeStackScreenProps<StackParamList, 'ListaPokemon'>;

const ListaPokemon = ({navigation, route}: Props) => {
  const [listaPokemon, setListaPokemon] = useState<Pokemon[]>([]);
  const [urlGenerico, setUrlGenerico ] = useState('https://pokeapi.co/api/v2/pokemon');  
  const getData = () => {
    fetch(urlGenerico)
      .then(response => response.json())
      .then((data: Pokedex) => {
        setListaPokemon([...listaPokemon,...data.results]);
        setUrlGenerico(data.next);
      });
  };
  useEffect(() => {
    getData();
  }, []);


  return (
    <View>
      <FlatList
        data={listaPokemon}
        renderItem={({item, index}) => <CardPokemon index={index} item={item} goToDetails={()=>navigation.navigate("Dettaglio",{id:index})}/>}
        onEndReached={getData}
        onEndReachedThreshold={1}
      />
      
    </View>
  );
};

export default ListaPokemon;
