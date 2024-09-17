import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import {StackParamList} from '../../App';

type Props = NativeStackScreenProps<StackParamList, 'PaginaConParametri'>;

const PaginaConParametri = ({route}: Props) => {
  return (
    <View>
      <Text> Pagina con parametri</Text>
      <Text>Parametro ricevuto: {route.params.testo} </Text>
    </View>
  );
};

export default PaginaConParametri;
