import styled from "styled-components/native";
import { Link } from "expo-router";

export const AuthInput = styled.TextInput`
background-color: #E9D8FD;
padding: 6px;
border-radius: 10px;
`;

export const AuthTitle = styled.Text`
font-size: 25px;
padding-bottom: 4px;
`;

export const AuthLabel = styled.Text`
padding-bottom: 6px;
font-size: 15px;
`;

export const AuthFormControl = styled.View`
padding-bottom: 8px;
gap: 2px;
`;

export const AuthLinks = styled(Link)`
color: #BA55D3	;
`;

export const AuthButtons = styled.TouchableHighlight`
background-color: #BA55D3;
padding: 4px;
border-radius: 5px;
align-items: center;
`;

export const AuthCard = styled.View`
padding: 15px;
border-radius: 20px;
background-color: #fff;
gap: 5px;
width: 300px;
`;

export const AuthContainer = styled.SafeAreaView`
flex: 1;
flex-grow: 1;
align-items: center;
justify-content: center;
background-color: #edef;
`;

export const AuthCardFooter = styled.View`
border-top-width: 2px ;
border-top-color: #91a1a5;
padding: 4px;
margin-top: 6px;
`;

