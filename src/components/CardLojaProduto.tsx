import { FC } from "react";
import { ContainerColumn } from "../styles/global";
import { ProdutoContainer, ProdutoDesc, ProdutoImg, ProdutoName, ProdutoPrice } from "../styles/produto";
import { TouchableOpacity } from "react-native";
import { ProdutoProps } from "../services/produtos";



interface CardLojaProdutoProps {
    toggleModal: (produto:ProdutoProps) => VideoColorSpace;
    produto: ProdutoProps;
}

export const CardLojaProduto: FC<CardLojaProdutoProps> = ({toggleModal,produto}) => {
     return (
        <TouchableOpacity onPress={() => toggleModal(produto)}>
            <ProdutoContainer>
            <ContainerColumn>
              
              <ProdutoName>{produto.nome}</ProdutoName>
              <ProdutoDesc>{produto.descricao}</ProdutoDesc>
              <ProdutoPrice>
                {produto.preco?.tolocaleString('pt-br',{
                    style: "currency",
                    currency: "BRL",
                })}
              </ProdutoPrice>
            </ContainerColumn>
            <ProdutoImg
            source={{
                uri: produto.imagem,
            }}
            />
            </ProdutoContainer>
        </TouchableOpacity>
     )
}