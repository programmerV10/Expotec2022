import React from 'react';
import { 
  ScrollView,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
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
ImgEa,
TextEao,
ImgEo,
ContainerEao,
TextEo,
ContainerAction,
ImgEaAction,
ImgEoAction,
} from './styles';
export default function CT(){
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
Os UCEC's(Unidade Coletora de Energia de Corrente, que é uma turbina da energia azul) são
60 vezes mais potentes, não causam poluição visual ou sonora, não ocupam áreas terrestres e não
representam risco para os animais marinhos, ao contrário do que acontece com os
aerogeradores em relação às aves, a alteração da paisagem e a perturbação ruídos
e ocupações do solo; Ao contrário dos oceanos, o vento não é uma fonte previsível,
não acontece todos os dias.
          </TextExplanation>  

          <ContainerImage>
            
                <TextEao>
                     Turbinas(Esquerdo: Azul / Direito: Eólica):
                </TextEao>
                <ContainerEao horizontal={true}>
            <ImgEa
 source={require('./TurbinaEA1.jpg')}
 />

      <ImgEo
 source={require('./TurbinaEO1.jpg')}
 />
      </ContainerEao>
            <ContainerEao horizontal={true}>
            <ImgEa
 source={require('./TurbinaEA2.jpg')}
 /> 
 <ImgEo
 source={require('./TurbinaEO2.jpg')}
 />
            </ContainerEao>
 </ContainerImage>
<ContainerAction>
<TextEao>
                     Turbina da energia azul em ação:
                </TextEao>
<ImgEaAction
 source={require('./TurbinaEA.gif')}
/>
<TextEao>
                     Turbina da energia eólica em ação:
                </TextEao>
<ImgEoAction
 source={require('./TurbinaEO.gif')}
/>
</ContainerAction>
<ButtonGo onPress={()=> Navigation.navigate('DEE') }>
          <ContainerButtonGo>
          
            <TextButtonGo> Diferenças </TextButtonGo>
            <MaterialCommunityIcons
          name = "arrow-top-right"
          size = {40}
          color = '#ffffff'
          />
          </ContainerButtonGo>
         </ButtonGo>
 <ButtonBack onPress={()=> Navigation.navigate('EA')}>
          <ContainerButtonBack>
            
          <MaterialCommunityIcons
          name = "arrow-u-left-top"
          size = {40}
          color = '#ffffff'
          />
            <TextButtonBack> Energia Azul </TextButtonBack>
         
          </ContainerButtonBack>
         </ButtonBack>
        
      </Container>
    )
  }
  
 