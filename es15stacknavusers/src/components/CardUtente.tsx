import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {Utente} from '../types/utente';
interface Props {
  utente: Utente;
  goToDettaglio: () => void;
}
const CardUtente = ({utente, goToDettaglio}: Props) => {
  return (
    <Pressable onPress={goToDettaglio}>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          padding: 5,
        }}>
        <Image
          source={{uri: utente.picture.thumbnail}}
          width={50}
          height={50}
          borderRadius={5}
        />
        <Text style={{fontSize: 24}}>
          {utente.name.first} {utente.name.last}
        </Text>
      </View>
    </Pressable>
  );
};

export default CardUtente;
