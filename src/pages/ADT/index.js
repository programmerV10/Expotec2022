import React, {useState, useRef} from 'react';
import firebase from '../../services/firebaseConnection';
import {Alert, Keyboard} from 'react-native';
import {
  ButtonStar,
  Star,
  Container,
  ContainerInternal,
  Title,
  ButtonSubmit,
  TextButtonSubmit,
  ButtonNavigator,
  TextButtonNavigator,
  ContainerButtonNavigator,
  NameInput,
  CommentInput,
  ContainerRatingBar,
} from './styles';
import{ useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
console.disableYellowBox=true;
export default function ADT(){
  const [defaultRating, setDefaultRating] = useState(3);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const Navigation = useNavigation();
  const NameInputRef = useRef(null);
  const CommentInputRef = useRef(null);
function Submit(){ 
  Keyboard.dismiss;
  
  var user = Math.floor(Math.random() * 10000) + 1;
  if(name!==""){
    firebase.database().ref('Evaluation').child('users').child(user).set({
      name: name,
      note: defaultRating + "/5",
      comment: comment,
    }).then(()=>{     
      Alert.alert('Avaliado com sucesso', 'Obrigado por avaliar nosso trabalho!');
      NameInputRef.current.clear();
      CommentInputRef.current.clear();
      Navigation.navigate('SN');
    })
    .catch((error)=>{ Alert.alert('Erro ao avaliar', error.message);})
  } else if(name==="") {
    firebase.database().ref('Evaluation').child('users').child(user).set({
      name: "Anônimo",
      note: defaultRating + "/5",
      comment: comment,
    }).then(()=>{
      Alert.alert('Avaliado com sucesso', 'Obrigado por avaliar nosso trabalho!');
      NameInputRef.current.clear();
      CommentInputRef.current.clear();
      Navigation.navigate('SN');
    })
    .catch((error)=>{ Alert.alert('Erro ao avaliar', error.message);})
  }
  }
  function Cancel(){
    NameInputRef.current.clear();
      CommentInputRef.current.clear();
      Navigation.navigate('SN');
  }
  const RatingBar = () => {
    return (
      <ContainerRatingBar>
        {maxRating.map((item, key) => {
          return (
            <ButtonStar
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Star
                source={
                  item <= defaultRating
                    ? require('./star_filled.png')
                    : require('./star_corner.jpg')
                }
              />
            </ButtonStar>
          );
        })}
      </ContainerRatingBar>
    );
  };

  return (
    <Container>
      <ContainerInternal>
        <Title>
          Avalie o trabalho:
        </Title>
        <NameInput
        placeholder="Nome (Não obrigatório)"
        onChangeText={(text)=>setName(text)}
        ref={NameInputRef}
        placeholderTextColor="#808080"
        />
        <RatingBar/>
    <CommentInput
    placeholder="Comentário"
    onChangeText={(text)=>setComment(text)}
    ref={CommentInputRef}
    placeholderTextColor="#808080"
    />
        <ButtonSubmit
          activeOpacity={0.7}
          onPress={
            () => Alert.alert('Confirmação', 'Quer enviar sua avaliação?',
            [
              {
                text: "Não", 
              },
              {
                text: "Sim",
                onPress: () => Submit()
              }
            ])
            
            }>
          <TextButtonSubmit>
            Enviar avaliação
          </TextButtonSubmit>
          <MaterialCommunityIcons
          name = "arrow-top-right"
          size = {40}
          color = '#ffffff'
          />
        </ButtonSubmit>
         <ButtonNavigator onPress={()=> 
         Alert.alert('Confirmação', 'Quer mesmo não avaliar?',
            [
              {
                text: "Não", 
              },
              {
                text: "Sim",
                onPress: () => Cancel()
               
              }
            ]) }>
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
};

