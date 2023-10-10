import { Image, Text } from 'react-native';
import styled from "styled-components/native";
import { Link } from 'expo-router';

interface PrincipalLojaDescProps{
    color?:string;
}

export const PrincipalSection = styled.View`
   padding-top: 8px;
   padding-left: 4px;
   padding-right: 4px;
   flex: 1;
   flex-grow: 1;
`;

export const PrincipalSectionTitle = styled.Text`
   font-weight: 700;
   font-size: 15px;
`;

export const PrincipalSectionLink = styled(Link)`
   font-weight: 700;
   font-size: 15px;
   color: #3182ce;
   `;

export const LojaImg = styled(Image)`
    width: 60px;
    height: 60px;
    border-radius: 30px;
`;


export const PrincipalCardLoja = styled.TouchableOpacity`
  padding: 4px;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const PrincipalLojaDetails = styled.View`
  justify-content: space-between;
  grid-area: 4px;
`;

export const PrincipalLojaRow = styled.View`
   justify-content: space-between;
   flex-direction: row;
`;

export const PrincipalLojaStar = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;


export const PrincipalCardProduto = styled.TouchableOpacity`
    flex: 1 ;
    flex-grow: 1;
    flex-direction: row;
`;


export const PrincipalProdutoPrice = styled.Text`
color: #3CB371;
`;

export const PrincipalRowTitle = styled.View`
    flex-direction: row;
    flex-grow: 1;
    justify-content: space-between;
    margin-bottom: 4px;
    border-bottom-width: 0.5px;
    border-bottom: #c3c3c3;
`;

export const PrincipalList = styled.View`
    padding: 2px;
    flex-grow: 1;
    gap: 4px;
`;

export const PrincipalProdutoTempo = styled.Text`
color: #7f7f7f
`;


export const PrincipalCardProdutoTitle = styled.Text``;
export const PrincipalLojaName = styled.Text``;
export const PrincipalContainer = styled.ScrollView``;
export const PrincipalCard = styled.View``;
export const PrincipalLojaDesc = styled.Text<PrincipalLojaDescProps>``;
export const PrincipalProdutoImg = styled(Image)``;
