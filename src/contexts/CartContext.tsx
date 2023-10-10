import { getData, storeData } from '../services/storage';
import { ReactNode, FC,createContext, useContext,useState, useEffect } from 'react';
import { ProdutoProps } from '../services/produtos';


interface CartProdutoProps extends ProdutoProps {
    quantidade: number;
}

interface CartContextData {
    produtos: CartProdutoProps[];
    addProduto: (produto: CartProdutoProps) => void;
    removeProduto: (id:number) => void;
    clearCart: () => void;
    valorTotal: number;
}

interface CartProviderProps {
    children: ReactNode | ReactNode[];
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const useCart = () => useContext(CartContext);

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
    const [produtos,setProdutos] = useState<CartProdutoProps[]>([]);
    const [valorTotal,setValorTotal] = useState(0);

    useEffect(() => {
        if (produtos.length == 0) {
            getData('cart').then((data) => {
                if (data) {
                    setProdutos(JSON.parse(data));
                }
            });
        }
    },[]);

    useEffect(() => {
        (produtos.length > 0) 
        storeData('cart',JSON.stringify(produtos));  
        setValorTotal(
            produtos.reduce((valorAnterior,produto) => {
              if(!produto) return valorAnterior;
              return valorAnterior + produto.preco * produto.quantidade;
        },0)
        );
    },[produtos]);

    const buscarProduto = (id:number | string) => {
        return produtos.find(item => {
            if(!item) return false;
            return item.id == id;
        })
    }

    const addProduto = (item: CartProdutoProps) => {
        const produto = buscarProduto(item.id);
        if (produto) {
            const produtoIndex = produtos.indexOf(produto);
            const newProdutos = [...produtos];
            newProdutos[produtoIndex].quantidade +- item.quantidade;
            setProdutos(newProdutos);
            return;
        }
        setProdutos([...produtos,item]);
    };

    const removeProduto = (id: number | string ) => {
        const produto = buscarProduto(id);
        if(!produto) return;
        const produtoIndex = produtos.indexOf(produto);
        const newProdutos = [...produtos];
        newProdutos.splice(produtoIndex,1);
        setProdutos(newProdutos);
    };

    const clearCart = () => {
        setProdutos([]);
        storeData("cart", "[]");
        setValorTotal(0);
    };

    return (
    <CartContext.Provider
            value={{addProduto,produtos,removeProduto,clearCart,valorTotal}}>
            {children}
    </CartContext.Provider>
    )
}