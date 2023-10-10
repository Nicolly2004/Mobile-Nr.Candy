import { Text } from "react-native";
import { Input } from "../../../components/Input";
import {
     AuthButtons,
     AuthCard, 
     AuthCardFooter, 
     AuthContainer, 
     AuthLinks, 
     AuthTitle 
} from "../../../styles/auth";
import { useRouter } from 'expo-router';
import {useForm} from 'react-hook-form'
import { Form } from "../../../components/Form";
import *as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';


const validation = yup.object().shape({
    name: yup.string().required("O nome é obrigatório!!!"),
    email: yup.string().required("O e-mail é obrigatório!!!").email("E-mail inválido!!!"),
    password: yup.string().required("A senha é obrigatória!!!").min(8,"A senha deve ter no mínimo 8 caracteres..."),
    password_confirmation: yup.string().oneOf([yup.ref("password")], "As senhas devem coicidir..."),
})


export default function RegisterPage() {
    const router = useRouter();
    const {
        handleSubmit,
        setValue,
        formState: {errors},
        register,
    } = useForm({
        resolver: yupResolver(validation),
    })

    const handleRegister = async (data:any) => {
        console.log(data);
    }

    return( 
    <AuthContainer>
       <AuthCard>
            <AuthTitle>
                Cadastro
            </AuthTitle>
            <Form {...{register,setValue,errors}}>
            <Input 
              id="name"
              label="Nome Completo" 
              placeholder="Nicolly Reis de Souza"
              />
            <Input 
              id="email"
              label="E-mail" 
              keyboardType="email-address" 
              placeholder="nicolly@email.com"
              />
            <Input 
              label="Senha" 
              id="password"
              secureTextEntry 
              />
            <Input label="Confirme sua Senha" 
              id="password_confirmation"
              secureTextEntry 
              />
            </Form>

            <AuthButtons>
                <Text>Cadastrar</Text>
            </AuthButtons>

            <AuthCardFooter>

            <Text>Já possui uma conta? {" "}
                <AuthLinks href="/" onPress={() => router.replace("/")}>
                    Faça Login
                </AuthLinks>
            </Text>


                <Text>Esqueceu a senha?{" "}
                <AuthLinks href="/password">Recupere-a</AuthLinks>
                </Text>

            </AuthCardFooter>
        </AuthCard>
    </AuthContainer>
   )
}