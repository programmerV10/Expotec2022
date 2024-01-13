import React from 'react';
import { 
  ScrollView,
  Text,
  StyleSheet,
  Image,
  View,
  StatusBar,
  TouchableOpacity,
  } from 'react-native';
  import {
  Container,
  ContainerInternal,
  ContainerImage,
  TextExplanation,
  ImgEs,
  ButtonBack,
  ContainerButtonBack,
  TextButtonBack,
  ButtonGo,
  ContainerButtonGo,
  TextButtonGo,
  } from './styles';
  import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
  import{ useNavigation } from '@react-navigation/native';
export default function OQE(){
  const Navigation = useNavigation();
  return(
    <Container>
      <StatusBar
    barStyle = "dark-content"
    hidden = {false}
    backgroundColor = "#6495ed"
    translucent = {false}
    networkActivityIndicatorVisible = {true}
/>
    <ContainerInternal showsVerticalScrollIndicator={true} persistentScrollbar={true}>
      <TextExplanation>
      {'    '}
        Para melhor compreensão, precisamos primeiro revisar o que é energia limpa e sustentável:
        </TextExplanation>
        <TextExplanation>
      {'    '}
      O conceito de energia sustentável está conectado
       ao de desenvolvimento sustentável. Em resumo, é a energia capaz de
        suprir as necessidades da geração atual sem comprometer as necessidades da nossa descendência.
Detalhando mais, é todo o tipo de energia que consegue manter um equilíbrio entre consumo e produção.
 Ela é gerada sem provocar grandes impactos ao meio-ambiente e isto consumida em quantidade e velocidade nas
  quais a natureza ou a ação humana conseguem repor.
        </TextExplanation> 
        <ContainerImage>
        <ImgEs
 source={require('./energia-sustentavel.jpg')}
 />
 </ContainerImage> 
 <ButtonGo onPress={()=> Navigation.navigate('EA') }>
          <ContainerButtonGo>
          
            <TextButtonGo> Energia Azul </TextButtonGo>
            <MaterialCommunityIcons
          name = "arrow-top-right"
          size = {40}
          color = '#ffffff'
          />
          </ContainerButtonGo>
         </ButtonGo>
 <ButtonBack onPress={()=> Navigation.navigate('Welcome')}>
          <ContainerButtonBack>
            
          <MaterialCommunityIcons
          name = "arrow-u-left-top"
          size = {40}
          color = '#ffffff'
          />
            <TextButtonBack> Welcome </TextButtonBack>
         
          </ContainerButtonBack>
         </ButtonBack>
        
    </ContainerInternal>
    </Container>
  )
}

