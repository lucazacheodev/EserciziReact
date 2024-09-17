import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homepage from './src/pages/Homepage';
import AltraPagina from './src/pages/AltraPagina';
import PaginaConParametri from './src/pages/PaginaConParametri';

// undefined sono i parametri di navigazione... per ora nessuna pagina accetta parametri di navigazione
export type StackParamList = {
  Homepage: undefined;
  AltraPagina: undefined;
  PaginaConParametri: {
    testo: string;
  };
  Dettaglio: undefined;
};

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator<StackParamList>();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Homepage">
          <Stack.Screen name="Homepage" component={Homepage} />
          <Stack.Screen name="AltraPagina" component={AltraPagina} />
          <Stack.Screen
            name="PaginaConParametri"
            component={PaginaConParametri}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

// creo Stack tipizzato
// nel tipo metto i nomi delle pagine e i parametri eventuali
// stack.screen per mostrare le pagine e i componenti sono le pagine
