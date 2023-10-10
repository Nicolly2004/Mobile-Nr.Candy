import styled from 'styled-components/native';

export const Divider = styled.View`
   border-bottom-width: 1px;
   border-bottom-color: #c3c3c3;
   border-bottom-style: solid;
   flex-grow: 1;
`;

export const ContainerRow = styled.View`
flex-direction: row;
flex-wrap: wrap;
justify-content: initial;
align-items: initial;
gap: 5px;
justify-items: initial;
`;

export const ContainerColumn = styled.View`
flex-direction: column;
flex-wrap: wrap;
justify-content: initial;
align-items: initial;
gap: 5px;
justify-items: initial;
`;

export const BackButton = styled.TouchableOpacity`
padding: 5px;
`;

export const Container = styled.ScrollView<ContainerProps>`
padding: 1px;
`;