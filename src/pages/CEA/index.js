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
  TextExplanation,
  ButtonBack,
  ContainerButtonBack,
  TextButtonBack,
  ButtonGo,
  ContainerButtonGo,
  TextButtonGo,
  } from './styles';
  import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
  import{ useNavigation } from '@react-navigation/native';
export default function CEA(){
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
      Em 2001 foi fundada a Ocean Energy Systems (OES),
       uma extensão da Agência Internacional de Energia (AIE)
        dedicada a estudar o aproveitamento econômico da energia
         gerada pelos oceanos. E nesse escopo também está incluída a energia azul.
        </TextExplanation> 
        <TextExplanation>
      {'    '}
      Diante da perspectiva do esgotamento das fontes fósseis e a disseminação
       das práticas de sustentabilidade, cada vez mais empresas apostam em energia renovável.
        Enquanto outros tipos de geração de energia, como a eólica e a solar, se consolidam no
         mercado, a energia azul ainda engatinha, mas demonstra um potencial gigantesco.
        </TextExplanation> 
        <ButtonGo onPress={()=> Navigation.navigate('SN') }>
          <ContainerButtonGo>
          
            <TextButtonGo> Finalização </TextButtonGo>
            <MaterialCommunityIcons
          name = "arrow-top-right"
          size = {40}
          color = '#ffffff'
          />
          </ContainerButtonGo>
         </ButtonGo>
 <ButtonBack onPress={()=> Navigation.navigate('IEA')}>
          <ContainerButtonBack>
            
          <MaterialCommunityIcons
          name = "arrow-u-left-top"
          size = {40}
          color = '#ffffff'
          />
            <TextButtonBack> Investimentos </TextButtonBack>
         
          </ContainerButtonBack>
         </ButtonBack>
         
    </ContainerInternal>
    </Container>
  )
}

