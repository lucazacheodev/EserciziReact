import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackParamList} from '../../App';

type Props = NativeStackScreenProps<StackParamList, 'Homepage'>;

const Homepage = ({navigation}: Props) => {
  return (
    <View>
      <Text>Sono in Homepage</Text>
      <Button
        title="Vai ad Altra Pagina"
        onPress={() => navigation.navigate('AltraPagina')}></Button>
      <Button
        title="Vai a Pagina con parametri"
        onPress={() =>
          navigation.navigate('PaginaConParametri', {testo: 'ciao'})
        }></Button>
    </View>
  );
};

export default Homepage;
