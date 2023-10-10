import { api } from "../settings/api";
import { PaginatedResponse } from "./commom";
import { ProdutoProps } from "./produtos";


const RESOURCE_URL = '/lojas';

export interface LojaProps {
    id: number,
    nota:number,
    taxa_entrega:number,
    pedido_minimo: number,
    nome: string,
    tempo: string,
    categoria: string,
    imageCover: string,
    imageLogo: string,
    produtos: ProdutoProps[];
}

interface LojaRequest extends Omit<LojaProps, "id" | "produtos"| "imagemCover" | "imageLogo" | "nota"> {
    logo?: string,
    cover?: string,
}

export const getLojas = () => {
    return api.get<PaginatedResponse<LojaProps>>(RESOURCE_URL);
}

export const getLoja = (id:number) => {
    return api.get<LojaProps>(`${RESOURCE_URL}/${id}`);
}

export const createLoja = ( body:LojaRequest) => {
    return api.post<LojaRequest,LojaProps>(RESOURCE_URL);
}

export const updateLoja = (id:number, body: Partial<LojaRequest>) => {
    return api.put<LojaRequest,LojaProps>(`${RESOURCE_URL}/${id}`,body);
}

export const deleteLoja = (id:number) => {
    return api.put<LojaRequest,LojaProps>(`${RESOURCE_URL}/${id}`);
}