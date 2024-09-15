import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface SalutoProps {
  name?: string;
}

function Saluto(props: SalutoProps) {
  const {name} = props;
  // si può assegnare un valore di default durante il restructuring (rimuoverlo dal return)
  // const {name = 'Default Name'} = props;
  const [showName, setShowName] = useState<boolean>(true);
  const toggleName = () => {
    setShowName(!showName);
  };
  return (
    <View>
      <Text>Ciao {showName && (name || 'Default Name')} </Text>
      <Button
        title={showName ? 'Hide name' : 'Show name'}
        onPress={toggleName}
      />
    </View>
  );
}

function App(): React.JSX.Element {
  const [text, setText] = useState<string>('');
  return (
    <>
      {/* View non scrollabile ScrollView scrollabile */}
      <View>
        <Text>Hello World!</Text>
        <Text style={{fontSize: 24, fontStyle: 'italic', fontWeight: 'bold'}}>
          Hello World!
        </Text>
        <Saluto name="Luca" />
        <Saluto />
        <Image
          resizeMode="contain"
          source={{
            uri: 'https://media.salonedellostudente.it/app/uploads/2022/08/22235826/LOGO-ADM.png',
            width: 360,
            height: 360,
          }}
        />
        <TextInput
          placeholder="Inserisci Testo"
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity
          onPress={() => console.log('touchable opacity premuto')}>
          <View
            style={{
              borderRadius: 16,
              borderWidth: 1,
              borderColor: 'green',
              backgroundColor: 'lightgreen',
              padding: 10,
              alignItems: 'center',
            }}>
            <Text style={{color: 'black'}}>Pulsante Bello</Text>
          </View>
        </TouchableOpacity>
        {/* <ActivityIndicator size={'large'} color={'grey'}></ActivityIndicator> */}
      </View>
    </>
  );
}

export default App;
