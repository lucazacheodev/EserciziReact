import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {StackParam} from './Pokemon';
import CardDettaglio from '../components/CardDettaglio';

type Props = NativeStackScreenProps<StackParam, 'Dettaglio'>;

const Dettaglio = ({route}: Props) => {
  const [dettaglio, setDettaglio] = useState<PokemonDetail>();
  const getData = () => {
    fetch(route.params.urlDetail)
      .then(response => response.json())
      .then((data: PokemonDetail) => {
        setDettaglio(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return dettaglio ? (
    <CardDettaglio dettaglio={dettaglio}></CardDettaglio>
  ) : (
    <Text>NON SI PUO'</Text>
  );
};

export default Dettaglio;
