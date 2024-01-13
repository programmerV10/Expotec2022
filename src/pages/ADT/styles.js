import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    justify-content: center;
    text-align: center;
`;
export const ContainerRatingBar = styled.SafeAreaView`
margin-top: 42px;
flex-direction: row;
padding: 5px;
justify-content: center;
`;
export const ContainerInternal = styled.ScrollView`
`;
export const ButtonStar = styled.TouchableOpacity`
padding: 10px;
`;

export const Star = styled.Image`
    width: 50px;
    height: 50px;
`;

export const Title = styled.Text`
  text-align: center;
    font-size: 23px;
    color: #000;
    margin-top: 15px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
 justify-content: center;
    flex-direction: row;
    height: 42px;
border-radius:10px;
margin: 7px;
margin-top: 42px;
background-color: #6495ed;
`;

export const TextButtonSubmit = styled.Text`
    color: #fff;
    text-align: center;
    font-size: 30px;
`;

export const ButtonNavigator = styled.TouchableOpacity`
height: 42px;
border-radius:10px;
margin: 7px;
background-color: #6495ed;
  `;

  export const TextButtonNavigator = styled.Text`
color: #ffffff;
font-size: 30px;
  `;

export const ContainerButtonNavigator = styled.View`
align-items: center;
justify-content: center;
flex-direction: row;
`;
export const CommentInput = styled.TextInput`
border-radius:10px;
border-color: #6495ed;
border-width: 4px;
margin: 7px;
padding: 10px;
margin-top: 42px;
`;

export const NameInput = styled.TextInput`
border-radius:10px;
border-color: #6495ed;
border-width: 4px;
margin: 7px;
padding: 10px;
margin-top: 42px;
`;