import { Link } from "expo-router";
import { FC } from "react";
import { LojaImg, PrincipalCardLoja, PrincipalLojaDesc, PrincipalLojaDetails,PrincipalLojaName, PrincipalLojaRow, PrincipalLojaStar } from "../styles/principal";
import { LojaProps } from '../services/lojas';
import  Icon from "react-native-vector-icons/FontAwesome5";
import { ContainerRow } from "../styles/global";



interface CardLojaProps {
    loja: LojaProps;
}


export const CardLoja: FC<CardLojaProps> = ({loja}) => {
   return (
      <Link href={`/principal/lojas/${loja.id}`} asChild>
        <PrincipalCardLoja>
             <LojaImg 
             source={{
                uri: loja.imageLogo,
             }}
             />
             <PrincipalLojaDetails>
                <PrincipalLojaName>{loja.nome}</PrincipalLojaName>

                <PrincipalLojaRow>

                    <PrincipalLojaStar>
                        <Icon name="star" color="#dffc3d" size={14}/>
                        <PrincipalLojaDesc color="#2360cf">{loja.nota}</PrincipalLojaDesc>
                    </PrincipalLojaStar>

                    <PrincipalLojaDesc>•</PrincipalLojaDesc>
                    <PrincipalLojaDesc>{loja.categoria}</PrincipalLojaDesc>

                </PrincipalLojaRow>

                <ContainerRow>
                    <PrincipalLojaDesc>{loja.tempo}</PrincipalLojaDesc>
                    <PrincipalLojaDesc>•</PrincipalLojaDesc>
                    <PrincipalLojaDesc color={loja.taxa_entrega > 0 ? null : "#55d323"}>
                        {loja.taxa_entrega > 0 ? loja.taxa_entrega : "Grátis"}
                    </PrincipalLojaDesc>
                </ContainerRow>
             </PrincipalLojaDetails>
        </PrincipalCardLoja>
      </Link>
   );
}