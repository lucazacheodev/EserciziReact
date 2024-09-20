import React, {useEffect, useState} from 'react';
import {Text, Linking} from 'react-native';
import SchermataHome from '../components/SchermataHome';

const Home = () => {
  const [weather, setWeather] = useState<Meteo>();
  const urlMeteo =
    'https://api.open-meteo.com/v1/forecast?latitude=40.351516&longitude=18.174349&current_weather=true';

  const openWebsite = () => {
    Linking.openURL(
      'https://www.sistemaitspuglia.it/its-apulia-digital-maker/',
    );
  };

  const getData = () => {
    fetch(urlMeteo)
      .then(response => response.json())
      .then((data: Meteo) => {
        setWeather(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return weather ? (
    <SchermataHome weather={weather} openWebsite={openWebsite}></SchermataHome>
  ) : (
    <Text>ErroreCaricamento</Text>
  );
};

export default Home;
