import { CardLoja } from '../../components/CardLoja';
import { ContainerColumn, ContainerRow } from "../../styles/global";
import { CardProduto } from "../../components/CardProduto";
import { useState,useEffect } from "react";
import { ProdutoModal } from "../../components/ProdutoModal";
import { LojaProps, getLojas } from "../../services/lojas";
import { ActivityIndicator} from 'react-native';
import { RefreshControl } from "react-native-gesture-handler";
import { ProdutoProps, getProduto, getProdutos } from "../../services/produtos";
import {
    PrincipalContainer, 
    PrincipalSection, 
    PrincipalSectionLink,
    PrincipalSectionTitle,
    PrincipalRowTitle,
    PrincipalList
    
} from "../../styles/principal";



export default function PrincipalPage() {

    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [produto,setProduto] = useState({} as ProdutoProps);
    const [lojas,setLojas] = useState<LojaProps[]>([]);
    const [isLojaLoading,setIsLojaLoading] = useState(false);
    const [isProdutoLoading,setIsProdutoLoading] = useState(false);
    const [produtos, setProdutos] = useState<ProdutoProps[]>([]);

    const loadLojas = () => {
        setIsLojaLoading(true);
        getLojas()
             .then(({data}) => {
             setLojas(data.data);
             setIsLojaLoading(false);
        })
        .catch((error) => {});
    };

    const loadProdutos = () => {
        setIsProdutoLoading(true);
        getProdutos()
            .then(({data}) => {
            setProdutos(data.data);
            setIsProdutoLoading(false);
        })
        .catch((error) => {});
    }
 
    useEffect(() => {
            loadLojas();
            loadProdutos();
    }, []);

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
    };

    const handleOpenModal = (produto: ProdutoProps) => {
        setProduto(produto);
        toggleModal();
    }

    const handleCloseModal = () => {
        setModalIsOpen(false);
        setProduto({} as ProdutoProps);
    };


    return ( 
    <PrincipalContainer>
       <PrincipalSection>
        <PrincipalRowTitle>
            <PrincipalSectionTitle>Lojas</PrincipalSectionTitle>
            <PrincipalSectionLink href="/principal/lojas">
                Ver Todas
            </PrincipalSectionLink>
        </PrincipalRowTitle>
        <PrincipalList>

      {isLojaLoading ? (
         <ActivityIndicator size="small" color="#6c6ad1" />
      ): 
        lojas?.map((loja,index:number) => (
          <CardLoja key={index} loja={loja} />
      ))
        }

      </PrincipalList>
       </PrincipalSection>
       <PrincipalSection>
       <ContainerColumn grow={1}>
        <PrincipalRowTitle>
            <PrincipalSectionTitle>Produtos</PrincipalSectionTitle>
            <PrincipalSectionLink href="">Ver Todos</PrincipalSectionLink>
        </PrincipalRowTitle>

        <PrincipalList  >
           {isProdutoLoading ? (
           <ActivityIndicator size="small" color="#e367e7" />
           ) : (
            produtos?.map((produto, index:number) => (
               <CardProduto
                toggleModal={handleOpenModal} 
                produto={produto}
                key={index} 
                />
            ))
        )}
        </PrincipalList>

        </ContainerColumn>
       </PrincipalSection>
       <ProdutoModal  
       modalVisible={modalIsOpen}
      produto={produto} 
      toggleModal={toggleModal}
      handleCloseModal={toggleModal} 
      />
      <RefreshControl  
      refreshing={isLojaLoading}
      onRefresh={() => {
        loadLojas();
      }}
      />
    </PrincipalContainer>
    );
}