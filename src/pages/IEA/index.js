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
export default function IEA(){
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
    A TIDALWATT é uma empresa que está investindo na energia azul, o modelo da turbina foi criado por um
    Brasileiro, o Mauricio Queiroz, esses investimentos estão ocorrendo na europa, infelizmente o Brasil
    só prioriza os investimentos em energia eólica e hidrelétrica. 
        </TextExplanation> 
        <TextExplanation>
      {'    '}
Este gráfico fornece uma comparação dos * custos efetivos de energia , calculados considerando CAPEX,
O&M Fixo e Variável, Fator de Capacidade e Vida Útil de cada tecnologia de geração .
Para a tecnologia TIDALWATT, os dados referem-se a projetos com capacidades superiores a 10MW.
        </TextExplanation> 
        <ContainerImage>
        <ImgEs
 source={require('./investimentos.jpg')}
 />
 </ContainerImage> 
 <ButtonGo onPress={()=> Navigation.navigate('CEA') }>
          <ContainerButtonGo>
          
            <TextButtonGo> Curiosidades </TextButtonGo>
            <MaterialCommunityIcons
          name = "arrow-top-right"
          size = {40}
          color = '#ffffff'
          />
          </ContainerButtonGo>
         </ButtonGo>
 <ButtonBack onPress={()=> Navigation.navigate('AIE')}>
          <ContainerButtonBack>
            
          <MaterialCommunityIcons
          name = "arrow-u-left-top"
          size = {40}
          color = '#ffffff'
          />
            <TextButtonBack> A importância  </TextButtonBack>
         
          </ContainerButtonBack>
         </ButtonBack>
         
    </ContainerInternal>
    </Container>
  )
}

