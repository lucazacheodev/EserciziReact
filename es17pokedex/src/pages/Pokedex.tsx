import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Dettaglio from './Dettaglio';
import ListaPokemon from './ListaPokemon';

export type StackParamList = {
    ListaPokemon: undefined,
    Dettaglio: {
        id:number
    }
}
const Stack = createNativeStackNavigator<StackParamList>();

const Pokedex = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='ListaPokemon' component={ListaPokemon}></Stack.Screen>
        <Stack.Screen name='Dettaglio' component={Dettaglio}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Pokedex;