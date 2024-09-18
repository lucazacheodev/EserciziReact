import React, { useState } from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

type GattiProps = {
  uri:string;
};

const urlGatti = "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1"
const Gatti = ({ uri }: GattiProps) => {
  return (
    <View>
      <Text>Tab Gatti</Text>
      <TouchableOpacity onPress={() => {}}>
        <View>
          <Text>Press me</Text>          
        </View>        
      </TouchableOpacity>   
      <Image source={{uri:uri}}></Image>   
    </View>
  );
};

export default Gatti;
