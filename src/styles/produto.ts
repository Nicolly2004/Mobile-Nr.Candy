import { Image} from 'react-native';
import styled from 'styled-components/native';


export const ProdutoImg = styled(Image)`
width: 60px;
height: 60px;
object-fit: cover;
border-radius: 6px;
`;

export const ProdutoName = styled.Text`
font-weight: 700;
font-size: 14px;
`;

export const ProdutoDesc = styled.Text`
font-size: 12px;
color: #c3c3c3;
`;

export const ProdutoContainer = styled.View`
flex-direction: row;
padding: 4px;
margin-top: 2px;
justify-content: space-between;
flex-grow: 1;
`;

export const ProdutoPrice = styled.Text`
font-size: 12px;
color: #3CB371;
`;

