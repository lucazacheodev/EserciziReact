import {Text, TextInput, View} from 'react-native';
import styles from './styles';
interface Props {
  value: string;
  onChangeText: (value: string) => void;
  error?: string;
}
function Input({value, onChangeText, error}: Props) {
  return (
    <View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}
export default Input;
