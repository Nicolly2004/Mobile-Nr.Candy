import { forwardRef } from 'react';
import { TextInputProps } from 'react-native';
import { AuthFormControl, AuthInput, AuthLabel,ErrorMessage} from '../styles/auth';
import { FieldError } from 'react-hook-form';


interface InputBaseInterface extends TextInputProps{
    label: string;
    id: string;
    error?: FieldError;
}

const InputBase = ({label,error, ...resto}: InputBaseInterface,ref: any) => {
   return (
    <AuthFormControl>
        <AuthLabel>{label}</AuthLabel>
        <AuthInput ref={ref} {...resto} />
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </AuthFormControl>
   ) ;
};

export const Input = forwardRef(InputBase);