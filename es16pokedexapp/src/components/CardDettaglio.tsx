import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

interface Props {
  dettaglio: PokemonDetail;
}

const CardDettaglio: React.FC<Props> = dettaglio => {
  return (
    <View>
      <Text>{dettaglio.dettaglio.name}</Text>
      <Text>{dettaglio.dettaglio.height}</Text>
      <Image
        source={{uri: dettaglio.dettaglio.sprites.front_default}}
        width={100}
        height={100}></Image>
    </View>
  );
};

export default CardDettaglio;
