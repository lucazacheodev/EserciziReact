import React from 'react';
import {View, Text, Image} from 'react-native';
import {Result, Utente} from '../types/utente';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../App';

type Props = NativeStackScreenProps<StackParamList, 'Dettaglio'>;

const Dettaglio = (route: Props) => {
  const {
    dob,
    gender,
    login,
    email,
    name,
    cell,
    location,
    nat,
    phone,
    picture,
    registered,
  } = route.route.params.utente;
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        style={{
          width: 300,
          height: 300,
          borderRadius: 150,
        }}
        source={{uri: picture.large}}
        resizeMode="cover"
      />
      <Text>{email}</Text>
      <Text>{name.first}</Text>
      <Text>{name.last}</Text>
      <Text>Età: {dob.age}</Text>
      <Text>Sesso: {gender}</Text>
      <Text>Username: {login.username}</Text>
      <Text>Cell: {cell}</Text>
      <Text>Location: {location.city}</Text>
      <Text>Phone: {phone}</Text>
      <Text>Nat: {nat}</Text>
      <Text>Registered: {registered.date}</Text>
    </View>
  );
};

export default Dettaglio;
