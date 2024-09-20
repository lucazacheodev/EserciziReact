import React from 'react';
import {View, Text, TouchableOpacity, Image, Linking} from 'react-native';

import styles from '../styles/CardStyle';

interface Props {
  item: Alunno;
}

const CardAlunno: React.FC<Props> = ({item}) => {
  const handleEmailPress = (email: string) => {
    Linking.openURL(`mailto:${email}`).catch(err =>
      console.error('Error opening email app:', err),
    );
  };
  return (
    <View style={styles.card}>
      <Image source={{uri: item.foto}} style={styles.image} />

      <Text style={styles.name}>
        {item.cognome} {item.nome}
      </Text>

      <Text style={styles.info}>Codice Fiscale: {item.codiceFiscale}</Text>
      <Text style={styles.info}>Matricola: {item.matricola}</Text>

      <Text style={styles.info}>
        Nato a: {item.comuneNascita} ({item.provNascita}) il {item.dataNascita}
      </Text>

      <Text style={styles.info}>
        Residenza: {item.indirizzoResidenza}, {item.capResidenza}{' '}
        {item.comuneResidenza} ({item.provResidenza})
      </Text>

      <TouchableOpacity onPress={() => handleEmailPress(item.emailPrincipale)}>
        <Text style={[styles.info, styles.link]}>{item.emailPrincipale}</Text>
      </TouchableOpacity>

      {item.emailSecondaria && (
        <TouchableOpacity
          onPress={() => handleEmailPress(item.emailSecondaria)}>
          <Text style={[styles.info, styles.link]}>{item.emailSecondaria}</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.info}>Cellulare: {item.cell}</Text>
      {/* <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Contatta</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default CardAlunno;
