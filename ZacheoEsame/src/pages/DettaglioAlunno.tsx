import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {StacksParamList} from './Alunni';
import CardAlunno from '../components/CardAlunno';

type Props = NativeStackScreenProps<StacksParamList, 'DettaglioAlunno'>;

const DettaglioAlunno: React.FC<Props> = ({route}) => {
  return (
    <View>
      <CardAlunno item={route.params.item} />
    </View>
  );
};

export default DettaglioAlunno;
