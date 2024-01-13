import React from 'react';
import { 
  ScrollView,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import{ useNavigation } from '@react-navigation/native';
import {
Container,
ContainerButtonBack,
ContainerImage,
ContainerButtonGo,
ButtonBack,
ButtonGo,
TextExplanation,
TextButtonBack,
TextButtonGo,
ImgEs,
} from './styles';
export default function EA(){
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
        <TextExplanation>
        {'    '}
       A energia azul é a energia retirada das correntes da maré,
        ela é uma fonte previsível e constante diferente da energia eólica que precisa de fatores climáticos.{' '}
        A energia azul pode ser considerada uma energia limpa e sustentável.{' '}Nenhuma das técnicas
utilizadas para sua geração emite gases poluentes, como o dióxido de carbono. 
          </TextExplanation>
          <ContainerImage>
          <ImgEs
 source={require('./EA.jpeg')}
 />
 </ContainerImage>
 <ButtonGo onPress={()=> Navigation.navigate('CT') }>
          <ContainerButtonGo>
          
            <TextButtonGo> Comparação </TextButtonGo>
            <MaterialCommunityIcons
          name = "arrow-top-right"
          size = {40}
          color = '#ffffff'
          />
          </ContainerButtonGo>
         </ButtonGo>
 <ButtonBack onPress={()=> Navigation.navigate('OQE')}>
          <ContainerButtonBack>
            
          <MaterialCommunityIcons
          name = "arrow-u-left-top"
          size = {40}
          color = '#ffffff'
          />
            <TextButtonBack> Energia Limpa </TextButtonBack>
         
          </ContainerButtonBack>
         </ButtonBack>
        
      </Container>
    )
  }
  
 