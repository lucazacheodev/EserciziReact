import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { StackParamList } from './Pokedex';
import DettagliPokemon from '../components/DettagliPokemon';

type Props = NativeStackScreenProps<StackParamList,"Dettaglio">

const urlDettagli = "https://pokeapi.co/api/v2/pokemon/";

const Dettaglio = ({route}:Props) => {
    const [dettagli, setDettagli] = useState<Dettagli>();    
    const getData = () => {
      fetch(urlDettagli + (route.params.id + 1))
        .then((response) => response.json())
        .then((data:Dettagli) => {
          setDettagli(data);
        });
    };
    useEffect(() => {
        getData();
    }, []);

  return (
    dettagli ? <DettagliPokemon dettagli={dettagli}/> :  <Text>Nope</Text>    
  );
};

export default Dettaglio;