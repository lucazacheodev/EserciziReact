import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

interface Props {
  name: string;
  index: number;
  goToDetails: () => void;
}
const urlImg =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
const PokemonCard: React.FC<Props> = ({name, index, goToDetails}) => {
  return (
    <TouchableOpacity onPress={goToDetails}>
      <Text>{name}</Text>
      <Image source={{uri: urlImg + index + '.png'}} width={200} height={200} />
    </TouchableOpacity>
  );
};

export default PokemonCard;
