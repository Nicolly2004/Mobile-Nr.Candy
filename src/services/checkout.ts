import { AxiosResponse } from 'axios';
import { api } from '../settings/api';

const REQUEST_URL = '/pedidos';

interface PedidoForm {
    produtos: {id: number | string, quantidade : number}[]
}

interface Pedido {
    id: string | number,
    valor_total: number,
    user_id: number | string,
}

interface CheckoutResponse {
    payment_url: string,
}

export const cadastraPedido = (pedido: PedidoForm) => {
    return api.post<PedidoForm,AxiosResponse<Pedido>>(REQUEST_URL,pedido);
}

export const checkout = (pedidoId: number | string) => {
    return api.post<any,AxiosResponse<CheckoutResponse>>(`${REQUEST_URL}/${pedidoId}/checkout`)
}