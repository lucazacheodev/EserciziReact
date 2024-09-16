import {useEffect, useState} from 'react';
import {User} from './src/types/Users';
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [utenti, setUtenti] = useState<Array<User>>([]);
  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setUtenti(data);
      });
  }, []);

  const renderItem = ({item}: ListRenderItemInfo<User>) => (
    <View style={styles.itemContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.phone}>phone: {item.phone}</Text>
      <Text style={styles.phone}>address: {item.address.street}</Text>
      <Text style={styles.phone}>company: {item.company.name}</Text>
      <Text style={styles.phone}>email: {item.email}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={utenti}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  phone: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default App;
