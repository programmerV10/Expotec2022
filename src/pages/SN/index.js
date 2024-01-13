import React from 'react';
import { 
  View,
  Text, 
  ScrollView,
  Image,
  TouchableOpacity,
  Linking, 
  StatusBar,
  Alert,
  SafeAreaView,
} from 'react-native';
import Faether from 'react-native-vector-icons/dist/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import{ useNavigation } from '@react-navigation/native';
import { 
  Container,
  ContainerInternal,
  Photo,
  ContainerSlider,
  ContainerPhoto,
  Name,
  Description,
  ButtonNavigator,
  ContainerButtonNavigator,
  TextButtonNavigator,
  ButtonInstagram,
  ContainerButtonInstagram,
  TextButtonInstagram, 
  ButtonGitHub,
  TextButtonGitHub,
  ContainerButtonGitHub,
 } from './styles';
export default function SN(){
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
        <ContainerInternal>
        <ContainerSlider horizontal={true}>
          <ContainerPhoto>
         <Photo
 source={require('./Victor.jpeg')}
 />
         <Name>Victor Valentim</Name>
         
         <Description>Desenvolvedor React Native</Description>
         <Description>(Programador)</Description>
         <Description>14 anos</Description>

         <ButtonInstagram 
         onPress={
          () => {
             Linking.openURL('https://api.instagram.com/victorvmps10/')
          }
         }>

<ContainerButtonInstagram>
         <Faether
         name = 'instagram'
         size = {35}
         color = '#ffff'
         />
         <TextButtonInstagram>@victorvmps10</TextButtonInstagram>
         </ContainerButtonInstagram>

         </ButtonInstagram>
         <ButtonGitHub 
         onPress={
          () => {
             Linking.openURL('https://github.com/Victorvmps')
          }
         }>

<ContainerButtonGitHub>
         <MaterialCommunityIcons
         name = 'github'
         size = {35}
         color = '#ffff'
         />
         <TextButtonGitHub>Victorvmps</TextButtonGitHub>
         </ContainerButtonGitHub>

         </ButtonGitHub>
         </ContainerPhoto>
         <ContainerPhoto>
         <Photo
 source={require('./Isabella.jpeg')}
 />
         <Name>Isabella Santana</Name>
         
         <Description>Desenvolvedora da maquete</Description>
         <Description>14 anos</Description>
         
         <ButtonInstagram 
         onPress={
          () => {
             Linking.openURL('https://api.instagram.com/_bella_isa_05')
          }
         }>

<ContainerButtonInstagram>
         <Faether
         name = 'instagram'
         size = {35}
         color = '#ffff'
         />
         <TextButtonInstagram>@_bella_isa_05</TextButtonInstagram>
         </ContainerButtonInstagram>

         </ButtonInstagram>
         </ContainerPhoto>
         <ContainerPhoto>
         <Photo
 source={require('./Felipe.jpeg')}
 />
         <Name>Felipe Santana</Name>
         
         <Description>Desenvolvedor da maquete</Description>
         <Description>14 anos</Description>

         <ButtonInstagram 
         onPress={
          () => {
             Linking.openURL('https://api.instagram.com/lipesx.silva/')
          }
         }>

<ContainerButtonInstagram>
         <Faether
         name = 'instagram'
         size = {35}
         color = '#ffff'
         />
         <TextButtonInstagram>@lipesx.silva</TextButtonInstagram>
         </ContainerButtonInstagram>

         </ButtonInstagram>
         </ContainerPhoto>
         <ContainerPhoto>
         <Photo
 source={require('./Nicolas.jpeg')}
 />
         <Name>Nicolas Mingorance</Name>
         
         <Description>Pesquisador</Description>
         <Description>13 anos</Description>
         
         <ButtonInstagram 
         onPress={
          () => {
             Linking.openURL('https://api.instagram.com/nicolas_mingorance/')
          }
         }>

<ContainerButtonInstagram>
         <Faether
         name = 'instagram'
         size = {35}
         color = '#ffff'
         />
         <TextButtonInstagram>@nicolas_mingorance</TextButtonInstagram>
         </ContainerButtonInstagram>
        
         </ButtonInstagram>
         </ContainerPhoto>
<ContainerPhoto>
         <Photo
 source={require('./Vinicius.jpg')}
 />
         <Name>Vinícius Appa</Name>
         
         <Description>Pesquisador</Description>

         <Description>14 anos</Description>
         <ButtonInstagram 
         onPress={
          () => {
             Linking.openURL('https://api.instagram.com/vinicius_appavaz/')
          }
         }>

<ContainerButtonInstagram>
         <Faether
         name = 'instagram'
         size = {35}
         color = '#ffff'
         />
         <TextButtonInstagram>@vinicius_appavaz</TextButtonInstagram>
         </ContainerButtonInstagram>

         </ButtonInstagram>
         </ContainerPhoto>
  </ContainerSlider>
         </ContainerInternal>
         <ButtonNavigator onPress={()=> Navigation.navigate('Welcome') }>
          <ContainerButtonNavigator>
          
            <TextButtonNavigator> Welcome </TextButtonNavigator>
            <MaterialCommunityIcons
          name = "arrow-top-right"
          size = {40}
          color = '#ffffff'
          />
          </ContainerButtonNavigator>
         </ButtonNavigator>
       
         <ButtonNavigator onPress={()=> Navigation.navigate('ADT') }>
          <ContainerButtonNavigator>
          
            <TextButtonNavigator> Avaliar trabalho </TextButtonNavigator>
            <MaterialCommunityIcons
          name = "arrow-top-right"
          size = {40}
          color = '#ffffff'
          />
          </ContainerButtonNavigator>
         </ButtonNavigator>
         <ButtonNavigator onPress={()=> Navigation.navigate('PA') }>
          <ContainerButtonNavigator>
          
            <TextButtonNavigator> Fazer pergunta </TextButtonNavigator>
            <MaterialCommunityIcons
          name = "arrow-top-right"
          size = {40}
          color = '#ffffff'
          />
          </ContainerButtonNavigator>
         </ButtonNavigator>
         <ButtonNavigator onPress={()=> Navigation.navigate('IAD')}>
          <ContainerButtonNavigator>
            
         
            <TextButtonNavigator> Informações adicionais </TextButtonNavigator>
            <MaterialCommunityIcons
          name = "arrow-top-right"
          size = {40}
          color = '#ffffff'
          />
          </ContainerButtonNavigator>
         </ButtonNavigator>
         <ButtonNavigator onPress={()=> Navigation.navigate('CEA')}>
          <ContainerButtonNavigator>
            
          <MaterialCommunityIcons
          name = "arrow-u-left-top"
          size = {40}
          color = '#ffffff'
          />
            <TextButtonNavigator> Curiosidades </TextButtonNavigator>
         
          </ContainerButtonNavigator>
         </ButtonNavigator>
       
    </Container>
  )
}

