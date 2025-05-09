import React, { useEffect, useRef, useState } from 'react';
import { View, ImageBackground, Dimensions, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoadingMindilSunsetBeachScreen = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  const navigation = useNavigation();

  const animatedOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [animatedOpacity]);

  useEffect(() => {
    navigation.replace('Home');
  }, []);

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#141414',
    }}>
    </View>
  );
};

export default LoadingMindilSunsetBeachScreen;