import { AxiosResponse } from 'axios';
import { LojaProps } from "./lojas";
import { api } from "../settings/api";
import { PaginatedResponse } from "./commom";


export interface ProdutoProps{
    id: number,
    preco: number,
    nome: string,
    descricao: string,
    imagem:string,
    images: string[];
    loja: LojaProps,
}

export interface ProdutoRequest extends Omit<ProdutoProps, "id" | "loja" | "imagem">{}

const RESOURCE_URL = "/produtos";

export const getProdutos = () => {
    return api.get<PaginatedResponse<ProdutoProps>>(RESOURCE_URL);
}

export const getProduto = (id: number) => {
    return api.get<ProdutoProps>(`${RESOURCE_URL}/ ${id}`);
}

export const createProduto = (body: ProdutoRequest) => {
    return api.post<ProdutoRequest,AxiosResponse<ProdutoProps>>(RESOURCE_URL);
}

export const updateProduto = (id: number, body: Partial<ProdutoRequest>) => {
    return api.put<ProdutoRequest,ProdutoProps>(`${RESOURCE_URL}/${id}`);
}

export const deleteProduto = ( id:number) => {
    return api.delete(`${RESOURCE_URL}/${id}`);
}