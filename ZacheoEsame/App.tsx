import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/pages/Home';
import Alunni from './src/pages/Alunni';
import {Image} from 'react-native';
import styles from './src/styles/AppStyle';

type TabsParamList = {
  Home: undefined;
  Alunni: undefined;
};

const Tabs = createBottomTabNavigator<TabsParamList>();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{headerShown: false, tabBarLabel: () => null}}>
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./src/assets/home.png')}
                style={styles.tabBarIcon}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Alunni"
          component={Alunni}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./src/assets/utenti.png')}
                style={styles.tabBarIcon}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default App;
