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

function App(): React.JSX.Element {
  const [url, setUrl] = useState('');
  const [uri, setUri] = useState('');

  async function getData() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json: Result[] = await response.json();
      setUri(json[0].url);
    } catch (error: any) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    if (url) {
      getData();
    }
  }, [url]);

  const Tabs = createBottomTabNavigator<TabsParamList>();

  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Gatti" component={Gatti} />
        <Tabs.Screen
          name="Cani"
          component={Cani}
          listeners={{tabPress: () => console.log('ciao')}}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default App;
