import styled from "styled-components/native";
import { Image } from "expo-image";

export const CartContainer = styled.View`
padding: 8px;
width: 250px;
`;

export const CartHeader = styled.View`
flex: 1;
align-items: center;
border-bottom-width: 0.5px;
border-bottom-color: #ccc;
margin-bottom: 4px;
`;

export const CartBody = styled.View`
flex: 1;
`;

export const CartTitle = styled.Text`
font-weight: 700;
font-size: 15px;
`;

export const CartFooter = styled.View`

border-top-width: 0.5px;
border-top-color: #ccc;
margin-top: 4px;`;

export const CartButton = styled.TouchableOpacity`
width: 100%;
align-items: center;
padding: 8px;
border-radius: 4px;
background-color: #BA55D3;
margin-top: 2px;
`;

export const CartItem = styled.View`
flex-direction: row;
align-items: center;
gap: 8px;
`;

export const CartItemImage = styled(Image)`
width: 50px;
height: 50px;
border-radius: 8px;
object-fit: cover;
`;

export const CartItemName = styled.Text`
font-weight: 700;
`;

export const CartItemPrice = styled.Text`
color: #12f20f;
font-size: 12px;
`;

export const CartItemQuantity = styled.Text`
color: #b2b2b2;
font-size: 12px;
`;

export const CartDeleteButton = styled.TouchableOpacity`
padding: 4px;
border-radius: 4px;
background-color: #4299e1;
`;

export const CartColumn = styled.View`
flex:1;
gap:2px;
`;

export const CartRow = styled.View`
flex-direction: row;
gap: 2px;
`;

export const CartTotalRow = styled.View`
flex-direction: row;
gap: 2px;
border-top-width: 0.5px;
border-top-color: #ccc;
margin-top: 4px;
justify-content: space-between;
`;

export const CartTotal = styled.Text`
font-weight: 700;
`;

export const CartTotalValue = styled.Text``;