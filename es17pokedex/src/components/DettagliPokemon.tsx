import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

interface Props {
  dettagli:Dettagli
}

const DettagliPokemon: React.FC<Props> = ({ dettagli }) => {
  return (
    <View >
      <Text>{dettagli.name}</Text>      
      <Image source={{uri:dettagli.sprites.other['official-artwork'].front_default}} width={350} height={350}/>
      <Text>height: {dettagli.height}</Text>      
      <Text>weigth: {dettagli.weight}</Text> 
      <Text>Base Stats:</Text>
      {dettagli.stats.map((x:Stat) => <Text>{x.stat.name}: {x.base_stat}</Text>)}
      
    </View>
  );
};

export default DettagliPokemon;
