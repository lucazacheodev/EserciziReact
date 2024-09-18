import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Result, Utente} from '../types/utente';
import CardUtente from '../components/CardUtente';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../App';

const url = 'https://randomuser.me/api/?results=50';

type Props = NativeStackScreenProps<StackParamList, 'Elenco'>;

function Elenco({navigation}: Props) {
  const [utenti, setUtenti] = useState<Utente[]>([]);
  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then((result: Result) => {
        setUtenti(result.results);
      });
  }, []);

  const renderItem = ({item}: {item: Utente}) => {
    return (
      <CardUtente
        utente={item}
        goToDettaglio={() => navigation.navigate('Dettaglio', {utente: item})}
      />
    );
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={utenti}
      renderItem={renderItem}
      keyExtractor={item => item.login.uuid}
    />
  );
}

export default Elenco;
