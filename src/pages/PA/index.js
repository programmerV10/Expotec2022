import React, {useState, useRef} from 'react';
import firebase from '../../services/firebaseConnection';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  TextInput
} from 'react-native';
import {
  Container,
  ContainerInternal,
  Title,
  ButtonSubmit,
  TextButtonSubmit,
  ButtonNavigator,
  TextButtonNavigator,
  ContainerButtonNavigator,
  QuestionInput,
  NameInput,
} from './styles';
import{ useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
console.disableYellowBox=true;

export default function PA(){
    const [name, setName] = useState("");
    const [question, setQuestion] = useState("");
    const Navigation = useNavigation();
    const NameInputRef = useRef(null);
  const QuestionInputRef = useRef(null);
  function Submit(){ 
    var user = Math.floor(Math.random() * 10000) + 1;
    if(name!==""){
      firebase.database().ref('Questions').child('users').child(user).set({
        name: name,
        question: question,
      }).then(()=>{
        Alert.alert('Enviado com sucesso', 'Sua pergunta foi enviado e será respondido na apresentação.');
        NameInputRef.current.clear();
        QuestionInputRef.current.clear();
        Navigation.navigate('SN');
      })
      .catch((error)=>{ Alert.alert('Erro ao enviar', error);})
    } else if(name==="") {
      firebase.database().ref('Questions').child('users').child(user).set({
        name: "Anônimo",
        question: question,
      }).then(()=>{
        Alert.alert('Enviado com sucesso', 'Sua pergunta foi enviado e será respondido na apresentação.');
        NameInputRef.current.clear();
        QuestionInputRef.current.clear();
        Navigation.navigate('SN');
      })
      .catch((error)=>{ Alert.alert('Erro ao enviar', error);})
    }
    }
    function Cancel(){
      NameInputRef.current.clear();
        QuestionInputRef.current.clear();
        Navigation.navigate('SN');
    }
    return (
        <Container>
          <ContainerInternal>
            <Title>
              Perguntas:
            </Title>
            <NameInput
            placeholder="Nome (Não obrigatório)"
            onChangeText={(text)=>setName(text)}
            ref={NameInputRef}
            placeholderTextColor="#808080#"
            />
        <QuestionInput
        placeholder="Pergunta"
        onChangeText={(text)=>setQuestion(text)}
        ref={QuestionInputRef}
        placeholderTextColor="#808080"
        />
            <ButtonSubmit
              activeOpacity={0.7}
              onPress={() => Alert.alert('Confirmação', 'Quer enviar sua avaliação?',
              [
                {
                  text: "Não", 
                },
                {
                  text: "Sim",
                  onPress: () => Submit()
                }
              ])}>
              <TextButtonSubmit>
                Enviar pergunta
              </TextButtonSubmit>
              <MaterialCommunityIcons
              name = "arrow-top-right"
              size = {40}
              color = '#ffffff'
              />
            </ButtonSubmit>
             <ButtonNavigator onPress={()=> Alert.alert('Confirmação', 'Quer mesmo não avaliar?',
            [
              {
                text: "Não", 
              },
              {
                text: "Sim",
                onPress: () => Cancel()
               
              }
            ])}>
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