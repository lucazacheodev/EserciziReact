import {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';

function App(): React.JSX.Element {

  const [textInput, setTextInput] = useState<string>('');
  const [lista, setLista] = useState<string[]>([]);

  function addToList() {    
    if (textInput.trim()) {
      setLista([...lista, textInput]);
      setTextInput('');
    }
  }

  function deleteFromList(indice: number) {
    // metodo splice non si aggiorna subito
    // lista.splice(indice, 1);       
    // delete lista[indice];
    const newList = lista.filter((ingrediente, i) => i !== indice);
    setLista(newList);
  }

  const mostraLista = () => {
    return lista.map((ingrediente, indice) => (
      <Text        
        style={styles.listItem}
        onPress={() => deleteFromList(indice)}>
        {ingrediente}
      </Text>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista della Spesa</Text>
      <TextInput
        style={styles.input}
        placeholder="Inserisci Ingrediente"
        value={textInput}
        onChangeText={text => setTextInput(text)}
      />
      <TouchableOpacity style={styles.button} onPress={addToList}>
        <Text style={styles.buttonText}>Aggiungi alla lista</Text>
      </TouchableOpacity>
      {lista.length !== 0 ? (
        <ScrollView style={styles.listContainer}>{mostraLista()}</ScrollView>
      ) : (
        <Text style={styles.placeholderText}>
          Aggiungi un Elemento alla lista
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  listContainer: {
    marginTop: 20,
  },
  listItem: {
    fontSize: 18,
    paddingVertical: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  placeholderText: {
    textAlign: 'center',
    color: '#999',
    fontSize: 16,
    marginTop: 20,
  },
});

export default App;
