import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles/ElencoStyle';
import {StacksParamList} from './Alunni';

type Props = NativeStackScreenProps<StacksParamList, 'ElencoAlunni'>;

const ElencoAlunni: React.FC<Props> = ({navigation}) => {
  const [elencoAlunni, setElencoAlunni] = useState<Alunno[]>([]);
  const url =
    'https://raw.githubusercontent.com/alemarra89/its2325/main/alunni.json';
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then((data: Alunno[]) => {
        setElencoAlunni(data);
      });
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={elencoAlunni}
        keyExtractor={(item: Alunno) => item.codiceFiscale}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('DettaglioAlunno', {item})}>
            <Image source={{uri: item.foto}} style={styles.image} />
            <Text style={styles.name}>
              {item.cognome} {item.nome}
            </Text>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ElencoAlunni;
