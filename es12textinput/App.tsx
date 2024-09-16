import {Text, TextInput, View} from 'react-native';
import Input from './src/input';
import {useEffect, useState} from 'react';

function App(): React.JSX.Element {
  const [text, setText] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setError(text ? '' : 'Il campo è obbligatorio');
  }, [text]);

  return (
    <>
      <View style={{padding: 20}}>
        <Input value={text} onChangeText={setText} error={error} />
      </View>
    </>
  );
}
export default App;
