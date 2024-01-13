import React from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
  Linking,
} from 'react-native';
import{ useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import{
Container,
ContainerInternal,
Title,
ButtonNavigator,
TextButtonNavigator,
ContainerButtonNavigator,
} from './styles';
export default function IAD(){
  const Navigation = useNavigation();
return(
<Container>
<ContainerInternal>

  <Title>
    Essa tela é para informações adicionais como fonte bibliografica,
     contato e nossas políticas de privacidade:
  </Title>
  <Title>
    Nossa política de privacidade:
  </Title>
  <ButtonNavigator onPress={
    ()=>  Linking.openURL('https://sites.google.com/view/v10productions/privacy')
    }>
          <ContainerButtonNavigator>
          
            <TextButtonNavigator> Políticas da V10 PRODUCTIONS </TextButtonNavigator>
            <MaterialCommunityIcons
          name = "arrow-top-right"
          size = {40}
          color = '#ffffff'
          />
          </ContainerButtonNavigator>
         </ButtonNavigator>
         <Title>
    Caso você queira entrar em contato para 
    relatar bugs, dicas de melhorar o app 
    ou entre outros:
  </Title>
         <Title>
    Contato 1 - Email Outlook:
  </Title>
         <ButtonNavigator onPress={
    ()=>  Linking.openURL('mailto:Vvalentivmps10@outlook.com')
    }>
          <ContainerButtonNavigator>
          <MaterialCommunityIcons
          name = "email"
          size = {40}
          color = '#ffffff'
          />
            <TextButtonNavigator> Vvalentivmps10 </TextButtonNavigator>
            
          </ContainerButtonNavigator>
         </ButtonNavigator>
         <Title>
    Contato 2 - Email Gmail:
  </Title>
  <ButtonNavigator onPress={
    ()=>  Linking.openURL('mailto:Vvalentimps@gmail.com')
    }>
          <ContainerButtonNavigator>
          <MaterialCommunityIcons
          name = "email"
          size = {40}
          color = '#ffffff'
          />
            <TextButtonNavigator> Vvalentimps </TextButtonNavigator>
            
          </ContainerButtonNavigator>
         </ButtonNavigator>
         <Title> Fontes bibliográficas:</Title>
         <ButtonNavigator onPress={
    ()=>  Linking.openURL('https://tidalwatt.com/#company')
    }>
          <ContainerButtonNavigator>
         
            <TextButtonNavigator> TIDALWATT </TextButtonNavigator>
            <MaterialCommunityIcons
          name = "arrow-top-right"
          size = {40}
          color = '#ffffff'
          />
          </ContainerButtonNavigator>
         </ButtonNavigator>
         <ButtonNavigator onPress={
    ()=>  Linking.openURL('https://pt.wikipedia.org/wiki/Energia_azul')
    }>
          <ContainerButtonNavigator>
         
            <TextButtonNavigator> Wikipedia </TextButtonNavigator>
            <MaterialCommunityIcons
          name = "arrow-top-right"
          size = {40}
          color = '#ffffff'
          />
          </ContainerButtonNavigator>
         </ButtonNavigator>
         <ButtonNavigator onPress={
    ()=>  Linking.openURL('https://esferaenergia.com.br/blog/fontes-de-energia/energia-azul/')
    }>
          <ContainerButtonNavigator>
         
            <TextButtonNavigator> EsferaAzul </TextButtonNavigator>
            <MaterialCommunityIcons
          name = "arrow-top-right"
          size = {40}
          color = '#ffffff'
          />
          </ContainerButtonNavigator>
         </ButtonNavigator>
         <ButtonNavigator onPress={
    ()=>  Linking.openURL('https://www.google.com.br')
    }>
          <ContainerButtonNavigator>
         
            <TextButtonNavigator> Google / Internet </TextButtonNavigator>
            <MaterialCommunityIcons
          name = "arrow-top-right"
          size = {40}
          color = '#ffffff'
          />
          </ContainerButtonNavigator>
         </ButtonNavigator>
         <Title>
  Navegação:
  </Title>
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
  <ButtonNavigator onPress={()=> Navigation.navigate('SN') }>
          <ContainerButtonNavigator>
          <MaterialCommunityIcons
          name = "arrow-u-left-top"
          size = {40}
          color = '#ffffff'
          />
            <TextButtonNavigator> Finalização </TextButtonNavigator>
        
          </ContainerButtonNavigator>
         </ButtonNavigator>
  
</ContainerInternal>
</Container>
);
}