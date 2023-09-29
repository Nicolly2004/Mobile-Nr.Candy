import { SafeAreaView, Text } from "react-native";
import { AuthButtons, AuthCard, AuthCardFooter, AuthContainer, AuthLinks, AuthTitle } from "../../styles/auth";
import { Input } from "../../components/Input";


export default function LoginPage() {
     








    return (
    <AuthContainer>
        <AuthCard>
            <AuthTitle>
                Login
            </AuthTitle>
            <Input 
              label="E-mail" 
              keyboardType="email-address" 
              placeholder="usuario@email.com"
              />
            <Input label="Senha" 
              secureTextEntry 
              />

            <AuthButtons>
                <Text>Logar</Text>
            </AuthButtons>

            <AuthCardFooter>
                <Text>Ainda não possui uma conta? {" "}</Text>
                <AuthLinks href="">Inscreva-se</AuthLinks>
            </AuthCardFooter>
        </AuthCard>
    </AuthContainer>
    );
}