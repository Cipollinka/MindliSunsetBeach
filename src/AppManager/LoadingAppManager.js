import React from 'react';
import {Image, Text, View} from 'react-native';
import 'react-native-indicators';
import {PacmanIndicator, WaveIndicator} from 'react-native-indicators';
import LoadingMindilSunsetBeachScreen from '../screens/LoadingMindilSunsetBeachScreen';

const styleView = {
  flex: 1,
  width: '100%',
  height: '100%',
  backgroundColor: '#141414',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
};
const styleImage = {
  position: 'absolute',
  width: 300,
  height: 300,
  opacity: 0.5,
  
};

export default function LoadingAppManager() {

  return (
    <View style={styleView}>
      {/* <Image style={styleImage} source={require('./loader2.png')} /> */}
      <Image style={[styleImage, {resizeMode: 'contain'}]} source={require('../assets/images/mindliLoadingImage.png')} />
      <WaveIndicator
        color={'white'}
        style={{position: 'absolute', bottom: 100}}
      />
    </View>
  );
}
