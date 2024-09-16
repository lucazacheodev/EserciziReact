import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const array: Array<string> = [
    'stringa ',
    'stringa ',
    'stringa ',
    'stringa ',
    'stringa ',
    'stringa ',
    'stringa ',
    'stringa ',
    'stringa ',
    'stringa ',
    'stringa ',
    'stringa ',
    'stringa ',
    'stringa ',
    'stringa ',
    'stringa ',
    'stringa ',
    'stringa ',
    'stringa ',
    'stringa ',
    'stringa ',
    'stringa ',
    'stringa ',
    'stringa ',
    'stringa ',
    'stringa ',
    'stringa ',
    'stringa ',
    'stringa ',
    'stringa ',
  ];

  // alternativa {item}: {item:string}
  const renderItem = ({item}: ListRenderItemInfo<string>) => (
    <Text style={style.text}>{item}</Text>
  );

  return (
    <>
      <FlatList
        ItemSeparatorComponent={() => <View style={style.separator}></View>}
        data={array}
        renderItem={renderItem}
        ListHeaderComponent={() => <Text style={style.header}>HEADER</Text>}
        ListFooterComponent={() => <Text style={style.header}>FOOTER</Text>}
      />
    </>
  );
}

const style = StyleSheet.create({
  text: {
    fontSize: 30,
    padding: 12,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: 'ligthblue',
  },
  header: {
    textAlign: 'center',
    fontSize: 40,
  },
});
export default App;
