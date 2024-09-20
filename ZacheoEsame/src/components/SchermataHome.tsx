import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import MapView from 'react-native-maps';
import styles from '../styles/HomeStyle';

type Props = {
  weather: Meteo;
  openWebsite: () => void;
};
function SchermataHome({weather, openWebsite}: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>ITS Apulia Digital Maker</Text>
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      <Text style={styles.description}>
        L'ITS Apulia Digital Maker è una scuola di alta specializzazione
        tecnologica che forma tecnici altamente qualificati nel settore della
        digitalizzazione industriale.
      </Text>
      <Text style={styles.title}>Sede</Text>
      <Image
        source={require('../assets/palazzo.jpeg')}
        style={styles.palazzo}
      />
      <Text style={styles.description}>Vicolo Vernazza, 8, 73100 Lecce LE</Text>

      <Text style={styles.title}>Meteo</Text>

      <View style={styles.containerRow}>
        <View style={styles.containerMeteo}>
          <Image
            source={require('../assets/termometro.png')}
            style={styles.icon}
          />
          <Text style={styles.description}>
            {weather.current_weather.temperature}°C
          </Text>
        </View>
        <View style={styles.containerMeteo}>
          <Image source={require('../assets/vento.webp')} style={styles.icon} />
          <Text style={styles.description}>
            {weather.current_weather.windspeed} km/h
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={openWebsite} style={styles.button}>
        <Text style={styles.buttonText}>Scopri di più sul sito ufficiale</Text>
      </TouchableOpacity>
      {/* prova inserimento mappe (Manca API Key) */}
      {/* <MapView
     initialRegion={{
       latitude: 40.351516,
       longitude: 18.174349,
       latitudeDelta: 0.01,
       longitudeDelta: 0.01,
     }}></MapView> */}
    </ScrollView>
  );
}
export default SchermataHome;
