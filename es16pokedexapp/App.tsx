import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Homepage from './src/pages/Homepage';
import Pokemon from './src/pages/Pokemon';

// app
// tab1: Homepage tab2:Elenco
// tab2: Elenco Dettaglio
type TabsParam = {
  Homepage: undefined;
  Pokemon: undefined;
};
function App(): React.JSX.Element {
  const Tabs = createBottomTabNavigator<TabsParam>();
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Homepage" component={Homepage}></Tabs.Screen>
        <Tabs.Screen
          name="Pokemon"
          component={Pokemon}
          options={{headerShown: false}}></Tabs.Screen>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default App;
