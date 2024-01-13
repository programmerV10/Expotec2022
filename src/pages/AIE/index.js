import React from 'react';
import { StatusBar } from 'react-native';
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
export default function AIE(){
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
A importância da energia azul é a série de vantagens sobre outras fontes.
E não estamos falando apenas dos poluentes combustíveis fósseis, mas
também de fontes limpas e renováveis, como a energia eólica e a solar.
O grande diferencial da energia azul sobre outras energias limpas é o
fato de ser mais consistente. A geração é menos dependente de fatores
externos e climáticos, como o vento e o sol, que podem reduzir a
produtividade em determinados períodos.
Além disso, uma planta de energia azul pode ter um tamanho consideravelmente
menor que o de outras usinas. Mesmo quando comparada com as solares e eólicas,
ela teria um impacto menor na paisagem e não demandaria muito uso do solo.
No entanto, um dos únicos pontos negativos da energia azul ainda é o seu preço.
A baixa eficácia em relação ao custo das membranas artificiais usadas para sua
obtenção, que são caras e difíceis de produzir, ainda torna sua produção pouco viável,
ela também colabora na ODS(Objetivos de Desenvolvimento Sustentável).
        </TextExplanation> 
        <ContainerImage>
        <ImgEs
 source={require('./energia-limpa.jpg')}
 />
 </ContainerImage> 
 <ButtonGo onPress={()=> Navigation.navigate('IEA') }>
          <ContainerButtonGo>
          
            <TextButtonGo> Investimentos </TextButtonGo>
            <MaterialCommunityIcons
          name = "arrow-top-right"
          size = {40}
          color = '#ffffff'
          />
          </ContainerButtonGo>
         </ButtonGo>
 <ButtonBack onPress={()=> Navigation.navigate('DEE')}>
          <ContainerButtonBack>
            
          <MaterialCommunityIcons
          name = "arrow-u-left-top"
          size = {40}
          color = '#ffffff'
          />
            <TextButtonBack> Diferenças </TextButtonBack>
         
          </ContainerButtonBack>
         </ButtonBack>
       
    </ContainerInternal>
    </Container>
  )
}

