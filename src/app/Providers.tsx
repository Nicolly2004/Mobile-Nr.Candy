import {FC,ReactNode} from "react";
import { AuthProvider } from '../contexts/AuthContext';
import Toast from 'react-native-toast-message';
import { CartProvider } from '../contexts/CartContext';


interface ProviderProps {
    children: ReactNode | ReactNode[];
}

export const Providers: FC<ProviderProps> = ({children}) => {
    return (
    <AuthProvider>
        <CartProvider>{children}</CartProvider>
        <Toast />
    </AuthProvider>
  );
}