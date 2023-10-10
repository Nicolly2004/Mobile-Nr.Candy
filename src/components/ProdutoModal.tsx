
import { FC, useState,useEffect } from 'react';
import Modal from 'react-native-modal';
import {
     ModalActionButton, 
     ModalActionText, 
     ModalBody, 
     ModalCloseButton,
     ModalContainer, 
     ModalDescription, 
     ModalFooter,
     ModalFooterRow, 
     ModalHeader, 
     ModalImage, 
     ModalInput, 
     ModalInputButton, 
     ModalPrice, 
     ModalProdutoDetails, 
     ModalTitle,
     ModalProdutoRow
} from '../styles/produtoModal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { PrincipalLojaDesc } from '../styles/principal';
import { ProdutoProps } from '../services/produtos';
import { useCart } from '../contexts/CartContext';


interface ModalProdutoProps {
    toggleModal: () => void;
    handleCloseModal: () => void;
    modalVisible: boolean;
    produto: ProdutoProps;
}

export const ProdutoModal: FC<ModalProdutoProps> = ({
    produto,
    modalVisible,
    handleCloseModal,
    toggleModal
}) => {
    const [quantidade,setQuantidade] = useState(1);
    const {addProduto} = useCart();

    useEffect(() => {
        setQuantidade(1);
    },[produto]);

    useEffect(() => {
        setQuantidade(1);
    },[produto]);

    const incrementaQtd = () => {
        if(quantidade >= 50) return;
        setQuantidade(quantidade + 1);
    }

    const decrementaQtd = () => {
        if(quantidade <= 1) return;
        setQuantidade(quantidade - 1);
    }

    const handleAddToCart = () => {
        addProduto({
            ...produto,
               quantidade
        });
        handleCloseModal();
    }

    if(!produto.id) return null;
 
    return (
        <Modal isVisible={modalVisible} animationIn="slideInUp" animationOut="bounceOutDown">
            <ModalContainer>
                <ModalHeader>
                    <ModalTitle>{produto.nome}</ModalTitle>
                    <ModalCloseButton onPress={toggleModal}>
                        <Icon name='times' />
                    </ModalCloseButton>
                </ModalHeader>

                <ModalBody>
                    <ModalProdutoDetails>
                        <ModalImage source={{
                            uri: produto.imagem,
                        }}
                 />

                <ModalDescription>{produto.descricao}</ModalDescription>
                    </ModalProdutoDetails>
                    <ModalProdutoDetails>
                        <ModalPrice>
                            {produto.preco.toLocaleString('pt-br',{
                                style: "currency",
                                currency: "BRL",
                            })}
                        </ModalPrice>
                        <PrincipalLojaDesc>•</PrincipalLojaDesc>
           <ModalDescription>{produto.loja.tempo}</ModalDescription>
                    </ModalProdutoDetails>

                    <ModalProdutoRow>
                    <Icon name='motorcycle'  color = "#b2b2b2"/>
                {produto.loja.taxa_entrega === 0 ? (
                    <ModalPrice>Grátis</ModalPrice>
                ):(
                    <ModalDescription>{produto.loja.taxa_entrega.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL',
                    })}
                    </ModalDescription>
                )}
                    </ModalProdutoRow>
                </ModalBody>

                <ModalFooter>
            <ModalFooterRow>
                <ModalInputButton onPress={incrementaQtd}>
                    <Icon name='plus' color="#c34cd3"/>
                </ModalInputButton>
                <ModalInput keyboardType='number-pad' 
                value={quantidade.toString()} 
                onChangeText={(value:string) => {
                    setQuantidade(Number(value));
                }}
                />
                <ModalInputButton onPress={decrementaQtd}>
                    <Icon name='minus' color="#c34cd3"/>
                </ModalInputButton>
            </ModalFooterRow>
            <ModalActionButton onPress={handleAddToCart}>
                <ModalActionText>Adicionar</ModalActionText>
            </ModalActionButton>
            <ModalPrice>{(quantidade * produto.preco).toLocaleString('pt-br' ,{
                style: "curency",
                currency: "BRL",
            })}
            </ModalPrice>
        </ModalFooter>
        </ModalContainer>
        </Modal>
    )

}