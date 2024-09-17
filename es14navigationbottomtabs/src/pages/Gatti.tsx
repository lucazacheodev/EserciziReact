import React from 'react';
import {View, Text, Image} from 'react-native';

interface GattiProps {
  urlGatto: string;
}

const Gatti: React.FC<GattiProps> = ({urlGatto}) => {
  return (
    <View>
      <Text>Tab Gatti</Text>
      {urlGatto ? <Image source={{uri: urlGatto}} /> : <Text>Loading...</Text>}
    </View>
  );
};

export default Gatti;
