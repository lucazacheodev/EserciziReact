import React from 'react';
import { View, Text, TouchableOpacity, GestureResponderEvent, Image } from 'react-native';

interface Props {
  item:Pokemon,
  index:number,  
  goToDetails: () => void,
}

const urlImmagine = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
const CardPokemon: React.FC<Props> = ({ item, index, goToDetails }) => {
    

  return (
    <View>      
      <TouchableOpacity onPress={goToDetails}>
        <View>
        <Text>{item.name}</Text>
        <Image source={{uri:urlImmagine + (index+1) +".png"}} width={250} height={250}/>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardPokemon;