
import  { styled } from 'styled-components/native'
import {Image} from 'expo-image'


export const ModalContainer = styled.View`
 background-color: #FFF;
 padding: 4px 15px 2px;
 border-radius: 7px;
`;

export const ModalBody = styled.View`
    margin-bottom: 10px;
    border-radius: 20px;
`;

export const ModalFooter = styled.View`
    flex-direction: row;
    justify-content: end;
    gap: 8px;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 4px;
`;

export const ModalHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ModalCloseButton = styled.TouchableOpacity`
padding: 8px;
`;

export const ModalFooterRow = styled.View`
flex-direction: row;
gap: 8px;
`;

export const ModalTitle = styled.Text`
font-weight: 700;
font-size: 15px;
`;

export const ModalImage = styled(Image)`
 width: 100px;
 height: 100px;
 object-fit: cover;
 border-radius: 10px;
`;

export const ModalDescription = styled.Text`
flex: auto;
color:#b2b2b2;
`;

export const ModalPrice = styled.Text`
color: #3CB371 ;
`;

export const ModalProdutoDetails = styled.View`
flex-direction: row;
gap: 6px;
margin-right: 8px;
margin-top: 8px;
margin-bottom: 8px;
text-align: right;
`;

export const ModalInput = styled.TextInput`
font-weight: 700;
text-align: center;
font-size: 20px;
`;

export const ModalProdutoRow = styled.View`
align-items: center;
gap: 4px;
flex-direction: row;
`;

export const ModalActionText = styled.Text`
font-weight: 700;
color: #FFF;
`;

export const ModalActionButton = styled.TouchableOpacity`
background-color: #FF6347;
padding: 8px;
border-radius: 4px;
`;

export const ModalInputButton = styled.TouchableOpacity`
padding: 8px;
border-radius: 4px;
align-items: center;
justify-content: center;
`;
