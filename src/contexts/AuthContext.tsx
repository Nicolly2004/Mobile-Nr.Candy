import { FC,createContext,ReactNode,useContext,useState,useEffect } from "react";
import { RegisterForm, login, register } from "../services/auth";
import { api } from "../settings/api";
import { getData, storeData } from "../services/storage";



interface AuthContextProps {
    signIn: (email: string,password: string) => Promise<boolean>;
    signUp: (body: RegisterForm) => Promise<boolean>;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: FC<AuthProviderProps> = ({children}) => {
    const [jwt,setJWT] = useState<string | null>(null);

    useEffect(() => {
        getData("jwt_key").then((jwt) => {
            if(jwt) {
                setJWT(jwt);
            }
        });
    },[]);

    useEffect(() => {
        if(jwt) {
            api.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
            storeData("jwt_key",jwt);
        } 
    }, [jwt]);

    const signIn = async (email: string, password: string): Promise<boolean> => {
        try{
            const {data} = await login(email,password);
            setJWT(data.token);
            return true;
        }catch(error: any) {
            console.log(error);
            return false;
        }
};


   const signUp = async(body:RegisterForm): Promise<boolean> => {
    try{
        const {data} = await register(body);
        return true;
    }catch(error:any) {
        return false;
    }
}
    return (
        <AuthContext.Provider value={{signIn,signUp}}>
            {children}
        </AuthContext.Provider>
    )
}