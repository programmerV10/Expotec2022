import React, {useState} from 'react';
import { 
  View,
  Text, 
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import{ useNavigation } from '@react-navigation/native';
import Faether from 'react-native-vector-icons/dist/Feather';

import { 
  Container,
  ImgFortec,
  ImgIco,
  ContainerInternal,
  Title,
  ButtonEnter,
  Description,
  WelcomeText,
  ContainerButtonEnter, 
  TextButtonEnter,
  } from './styles';

export default function Welcome(){

  const Navigation = useNavigation();
 
  return(
    
    <Container>
      
      <View>
    <ImgFortec
    source={require('./Fortec.jpg')}
    />
    </View>
    <ContainerInternal>
     
       <ImgIco
 source={require('./ico-welcome.png')}
 />
  <Title> Bem Vindo </Title>
  

 <Description>
 {'   '}
   Esse aplicativo foi feito para a Expotec 2022. Neste trabalho 
   da área de humanas será apresentado o tema energia azul.
   </Description>
   
       <ButtonEnter onPress={()=> Navigation.navigate('RD1') }>
          <ContainerButtonEnter>
          <Faether
          name = "arrow-up-right"
          size = {49}
          color = '#ffffff'
          />
            <TextButtonEnter> Acessar </TextButtonEnter>
          </ContainerButtonEnter>
         </ButtonEnter>
        <WelcomeText>Agradeçemos por você está aqui!</WelcomeText>
         
    </ContainerInternal>
    </Container>
  )
}
