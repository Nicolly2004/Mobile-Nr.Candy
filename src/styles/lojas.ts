import styled from "styled-components/native";
import { Image } from "expo-image";



export const LojaCover = styled(Image)`
   width: 100%;
   height: 150px;
   object-fit: cover;
`;

export const LojaLogo = styled(Image)`
   width: 60px;
   height: 60px;
   border-radius: 30px;
   object-fit: cover;
`;

export const LojaName = styled.Text`
   font-weight: 700;
   font-size: 25px;
`;

export const LojaDescriptions = styled.Text``;