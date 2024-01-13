import styled from "styled-components/native";

export const Container = styled.ScrollView`
`;

export const ContainerInternal = styled.SafeAreaView`
align-items: center;
flex-direction: row;
`;

export const Photo = styled.Image`
height: 150px;
width: 150px;
margin-top: 5px;
border-radius: 15px;
border-width: 2px;
border-color: #6495ed;
`;

export const ContainerSlider = styled.ScrollView`
`;

export const ContainerPhoto = styled.View`
align-items: center;
margin: 10px;
`;

export const Name = styled.Text`
font-size: 18px;
font-weight: bold;
color: #000000;
margin: 5px;
`;

export const Description = styled.Text`
font-Size: 18px;
color: #000000;
margin: 5px;
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

export const ButtonInstagram = styled.TouchableOpacity`
height: 45px;
border-radius:10px;
margin: 7px;
background-color: #ff1493;
`;

export const ContainerButtonInstagram = styled.View`
align-items: center;
justify-content: center;
flex-direction: row;
margin-left: 7px;
`;

export const TextButtonInstagram = styled.Text`
color: #ffffff;
font-size: 18px;
margin: 10px;
  `;

export const ButtonGitHub = styled.TouchableOpacity`
height: 45px;
border-radius:10px;
margin: 7px;
background-color: #171515;
`;

export const ContainerButtonGitHub = styled.View`
align-items: center;
justify-content: center;
flex-direction: row;
margin-left: 7px;
`;

export const TextButtonGitHub = styled.Text`
color: #ffffff;
font-size: 18px;
margin: 10px;
  `;
  