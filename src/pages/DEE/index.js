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
export default function DEE(){
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
As diferenças entre a azul e a hidrelétrica:
</TextExplanation> 
          <TextExplanation>
          {'    '}- A azul não ocupa área terrestre, já a hidrelétrica sim.
          </TextExplanation> 
          <TextExplanation>
          {'    '}- A hidrelétrica causa imensos lagos artificiais que representam danos proporcionais à fauna, 
          flora e comunidades que vivem no rio a montante das barragens, já a azul não causa.
          </TextExplanation>
          <TextExplanation>
          {'    '}- As usinas das UCEC'S não causam impactos ambientais, já a hidrelétrica causam.
          </TextExplanation>
          <TextExplanation>
          {'    '}- A azul não necessidade de chuva e fica longe de várias crise hídrica, já a hidrelétrica é ao contrário.
          </TextExplanation>
          <ContainerImage>
          <ImgEs
 source={require('./DEE.png')}
 />
 </ContainerImage>
 <ButtonGo onPress={()=> Navigation.navigate('AIE') }>
          <ContainerButtonGo>
          
            <TextButtonGo> A importância </TextButtonGo>
            <MaterialCommunityIcons
          name = "arrow-top-right"
          size = {40}
          color = '#ffffff'
          />
          </ContainerButtonGo>
         </ButtonGo>
 <ButtonBack onPress={()=> Navigation.navigate('CT')}>
          <ContainerButtonBack>
            
          <MaterialCommunityIcons
          name = "arrow-u-left-top"
          size = {40}
          color = '#ffffff'
          />
            <TextButtonBack> Comparação </TextButtonBack>
         
          </ContainerButtonBack>
         </ButtonBack>
        
      </Container>
    )
  }
  
 