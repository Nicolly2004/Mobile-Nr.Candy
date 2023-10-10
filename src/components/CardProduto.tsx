import { ContainerColumn, ContainerRow } from "../styles/global"
import {FC} from 'react';
import { 
       PrincipalCardProduto,
       PrincipalCardProdutoTitle,
       PrincipalLojaDesc,
       PrincipalProdutoImg,
       PrincipalProdutoPrice,
       PrincipalProdutoTempo 
} from "../styles/principal"
import { ProdutoProps } from "../services/produtos";


interface CardProdutoProps{
    toggleModal: (produto: ProdutoProps) => void;
    produto:ProdutoProps;
}

export const CardProduto: FC<CardProdutoProps> = ({toggleModal,produto}) => {
    return (
        <PrincipalCardProduto onPress={() => toggleModal(produto)}>
        <ContainerRow alignItems = "center" gap = "14px" grow={1}>
        <PrincipalProdutoImg
         source={{
            uri: produto.imagem,
        }}
    />
    <ContainerColumn>
    <PrincipalCardProdutoTitle>{produto.nome}</PrincipalCardProdutoTitle>
    <PrincipalProdutoPrice> 
        {produto.preco.toLocaleString('pt-br', {
            style: "currency",
            currency: "BRL",
        })}
    </PrincipalProdutoPrice>

    <ContainerRow>
    <PrincipalProdutoTempo>{produto?.loja?.tempo}</PrincipalProdutoTempo>
    <PrincipalLojaDesc>•</PrincipalLojaDesc>
    {produto?.loja?.taxa_entrega === 0 ? <PrincipalProdutoPrice>Grátis</PrincipalProdutoPrice>:
     <PrincipalLojaDesc>{produto?.loja?.taxa_entrega?.toLocaleString('pt-br', {
        style: "currency",
        currency: "BRL",
     })}
     </PrincipalLojaDesc>
    }
    </ContainerRow>
    </ContainerColumn>
</ContainerRow>
</PrincipalCardProduto>
    )
}