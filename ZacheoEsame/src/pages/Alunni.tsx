import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DettaglioAlunno from './DettaglioAlunno';
import ElencoAlunni from './ElencoAlunni';

export type StacksParamList = {
  DettaglioAlunno: {
    item: Alunno;
  };
  ElencoAlunni: undefined;
};

const Stack = createNativeStackNavigator<StacksParamList>();

const Alunni = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ElencoAlunni"
      component={ElencoAlunni}
      options={{headerTitle: 'I nostri studenti'}}
    />
    <Stack.Screen
      name="DettaglioAlunno"
      component={DettaglioAlunno}
      options={{headerTitle: 'Info'}}
    />
  </Stack.Navigator>
);

export default Alunni;
