import { 
    CartBody, 
    CartContainer,
    CartFooter, 
    CartHeader, 
    CartItem, 
    CartItemImage, 
    CartItemName, 
    CartItemPrice, 
    CartList, 
    CartTitle,
    CartDeleteButton,
    CartButton,
    CartColumn,
    CartItemQuantity,
    CartRow,
    CartTotalRow,
    CartTotal,
    CartTotalValue
} from "../styles/cart"
import { Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useCart } from '../contexts/CartContext';
import * as Linking from 'expo-linking';
import { cadastraPedido, checkout } from "../services/checkout";
import { ProdutoProps } from "../services/produtos";


export const Cart = () => {
    const {produtos, clearCart,valorTotal,removeProduto} = useCart();

    const handleCheckout = async () => {
    const pedidoData = {produtos};
    const response = await cadastraPedido(pedidoData);

    if(response.status === 20) {
        const {data: {payment_url},
    } = await checkout(response.data.id);
        await Linking.openURL(payment_url);
        clearCart();
    }
  };

  return (
    <CartContainer>
        <CartHeader>
            <CartTitle>Carrinho</CartTitle>
        </CartHeader>

        <CartBody>
            <CartList
            data={produtos}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return(
                <CartItem>
                    <CartItemImage source={{uri: item.imagem}}/>

                    <CartColumn>
                        <CartItemName>{item.nome}</CartItemName>
                    <CartRow>
                        <CartItemQuantity>{item.quantidade}x</CartItemQuantity>
                        <CartItemPrice>
                            {item.preco.toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </CartItemPrice>
                        </CartRow>
                    </CartColumn>
                    <CartDeleteButton onPress={() => removeProduto(item.id)}>
                        <Icon name="trash" color="#FFF" />
                    </CartDeleteButton>
                </CartItem>
              );
            }}/>
        </CartBody>
        <CartTotalRow>
            <CartTotal>Total</CartTotal>
            <CartTotalValue>
                {valorTotal.toLocaleString('pt-br',{
                    style: "currency",
                    currency: "BRL",
                })}
            </CartTotalValue>
        </CartTotalRow>
        <CartFooter>
            <CartButton onPress={handleCheckout}>
                <Text>Finalize seu Pedido</Text>
            </CartButton>
        </CartFooter>
    </CartContainer>
  )

}