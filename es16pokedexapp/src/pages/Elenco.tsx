import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import PokemonCard from '../components/PokemonCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParam} from './Pokemon';

type Props = NativeStackScreenProps<StackParam, 'Elenco'>;

const Elenco = (props: Props) => {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [listaPokemon, setListaPokemon] = useState<PokemonType[]>([]);
  const getData = () => {
    fetch(url)
      .then(response => response.json())
      .then((data: PokemonResult) => {
        setListaPokemon([...listaPokemon, ...data.results]);
        setUrl(data.next);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <FlatList
        data={listaPokemon}
        renderItem={({item, index}) => (
          <PokemonCard
            name={item.name}
            index={index + 1}
            goToDetails={() =>
              props.navigation.navigate('Dettaglio', {urlDetail: item.url})
            }
          />
        )}
        // Infinity Scroll
        // onEndReached={getData}
        // onEndReachedThreshold={1}
        ListFooterComponent={
          <TouchableOpacity onPress={getData}>
            <View>
              <Text>Carica altri Pokemon</Text>
            </View>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default Elenco;
