import React from 'react';
import {View, Text} from 'react-native';

const urlCani =
  'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1';
const Cani = () => {
  return (
    <View>
      <Text>Tab Cani</Text>
    </View>
  );
};

export default Cani;
