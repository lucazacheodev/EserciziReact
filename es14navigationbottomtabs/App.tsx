import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import Gatti from './src/pages/Gatti';
import Cani from './src/pages/Cani';
import {Result} from './src/types';

type TabsParamList = {
  Gatti: undefined;
  Cani: undefined;
};
const Tabs = createBottomTabNavigator<TabsParamList>();

function App(): React.JSX.Element {
  const [urlGatto, setUrlGatto] = useState('');
  const url =
    'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1';

  async function getData() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json: Result[] = await response.json();
      console.log(json[0].url);
      setUrlGatto(json[0].url);
    } catch (error: any) {
      console.error(`Error fetching data: ${error.message}`);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Gatti">
          {() => <Gatti urlGatto={urlGatto} />}{' '}
          {/* Passiamo urlGatto come prop */}
        </Tabs.Screen>
        <Tabs.Screen name="Cani" component={Cani} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default App;
