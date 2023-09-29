import { forwardRef } from 'react';
import { TextInputProps } from 'react-native';
import { AuthFormControl, AuthInput, AuthLabel } from '../styles/auth';

interface InputBaseInterface extends TextInputProps{
    label: string;
}

const InputBase = ({label, ...resto}: InputBaseInterface,ref: any) => {
   return (
    <AuthFormControl>
        <AuthLabel>{label}</AuthLabel>
        <AuthInput ref={ref} {...resto} />
    </AuthFormControl>
   ) ;
};

export const Input = forwardRef(InputBase);