import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Dettaglio from './Dettaglio';
import Elenco from './Elenco';

export type StackParam = {
  Elenco: undefined;
  Dettaglio: {
    urlDetail: string;
  };
};

const Pokemon = () => {
  const Stack = createNativeStackNavigator<StackParam>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Elenco" component={Elenco}></Stack.Screen>
      <Stack.Screen name="Dettaglio" component={Dettaglio}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Pokemon;
