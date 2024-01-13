import React, { useRef, useEffect} from 'react';
import {
   View,
    StyleSheet,
     Animated,
    ImageBackground,
    } from 'react-native';
import * as Animatable from 'react-native-animatable';

import{ useNavigation } from '@react-navigation/native';
export default function Splash() {
  const larAnimada = useRef(new Animated.Value(0)).current;
  const altAnimada = useRef(new Animated.Value(50)).current;
  const Navigation = useNavigation();
  useEffect(()=> {


    Animated.sequence([
      Animated.timing(larAnimada, {
        toValue: 100,
        duration: 2000,
        useNativeDriver: false
      }),

      Animated.timing(altAnimada, {
        toValue: 100,
        duration: 2000,
        useNativeDriver: false
      })
    ]).start( () => {
      Navigation.navigate('Welcome')
    });


  }, []);

  let procentagemLargura = larAnimada.interpolate({
    inputRange: [0, 100], //Entrada
    outputRange: ['0%', '100%'] //Vai sair 0% até 100%
  })

  let porcentagemAltura = altAnimada.interpolate({
    inputRange: [50, 100],
    outputRange: ['7%', '100%']
  })
  const Logo = {
    0: {
        fontSize: 20,
    },
    0.25: {
      fontSize: 30,
    },
    0.5: {
      fontSize: 20,
    },
    0.75: {
      fontSize: 30,
    },
    1: {
      fontSize: 20,
    },
}
 return (
   <View style={styles.container}>

      <Animated.View 
      style={{ 
        width: procentagemLargura,
        height: porcentagemAltura,
       
        justifyContent: 'center',
        alignItems: 'center',
       
      }}
      >
        <ImageBackground source={require('./Splash.jpg')} resizeMode="cover" style={styles.image}>   
       <Animatable.Text
 style={styles.nome}
  animation={Logo}
  duration={2000}
  iterationCount="infinite"
  easing="linear"
  >V10 PRODUCTIONS</Animatable.Text>
    </ImageBackground>

      </Animated.View>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nome:{
    color: '#FFF',
    fontSize: 30,
  },
  image:{
    width: '100%',
     height: '100%',
     justifyContent: 'center',
      alignItems: 'center'
  }
})