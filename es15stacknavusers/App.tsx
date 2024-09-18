import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Elenco from './src/pages/Elenco';
import Dettaglio from './src/pages/Dettaglio';
import {Utente} from './src/types/utente';

export type StackParamList = {
  Elenco: undefined;
  Dettaglio: {
    utente: Utente;
  };
};

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator<StackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{animation: 'slide_from_bottom'}}>
        <Stack.Screen name="Elenco" component={Elenco}></Stack.Screen>
        <Stack.Screen name="Dettaglio" component={Dettaglio}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
