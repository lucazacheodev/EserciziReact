import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Homepage from "./src/pages/Homepage";
import Pokedex from "./src/pages/Pokedex";

type TabsParamList = {
  Homepage:undefined;
  Pokedex:undefined;
}
const Tabs = createBottomTabNavigator<TabsParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Homepage" component={Homepage}></Tabs.Screen>
        <Tabs.Screen name="Pokedex" component={Pokedex} options={{headerShown:false}}></Tabs.Screen>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default App;
