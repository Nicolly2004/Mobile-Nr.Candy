import { Input } from "../../../components/Input"
import { Text } from "react-native";
import { 
    AuthButtons, 
    AuthCard, 
    AuthCardFooter, 
    AuthContainer, 
    AuthLinks, 
    AuthTitle
} from "../../../styles/auth"


export default function PasswordPage() {
    return (
        <AuthContainer>
            <AuthCard>
            <AuthTitle>
                Recuperar Senha
            </AuthTitle>

            <Input 
              id="email"
              label="E-mail" 
              keyboardType="email-address" 
              placeholder="nicolly@email.com"
              />
            <Input 
              id="novaSenha"
              label="Nova Senha" 
              secureTextEntry 
              />
              <Input
               id="confirme"
               label="Confirme sua Senha" 
               secureTextEntry 
              />

            <AuthButtons>
                <Text>Recuperar</Text>
            </AuthButtons>

            <AuthCardFooter>
            <Text>Já possui uma conta? {" "}</Text>
                <AuthLinks href="/">Faça Login</AuthLinks>

            </AuthCardFooter>
        </AuthCard>
        </AuthContainer>
    )
}