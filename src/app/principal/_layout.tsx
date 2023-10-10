import { Stack,useGlobalSearchParams } from "expo-router";
import { Pressable,TouchableOpacity } from "react-native";
import  Icon from 'react-native-vector-icons/FontAwesome5';
import {useRouter} from 'expo-router';
import { BackButton } from "../../styles/global";
import { Providers } from "../Providers";
import {useState, useEffect} from 'react';
import { getLoja } from "../../services/lojas";
import  Popover from "react-native-popover-view";
import { Cart } from "../../components/Cart";

export default function PrincipalPageLayout() {
    const router = useRouter();
    const globalParams = useGlobalSearchParams();
    const [loja,setLoja] = useState<string>("");



     useEffect(() => {
        if (globalParams.id && typeof globalParams.id === 'string') {
            getLoja(Number(globalParams.id))
               .then(({data}) => {
                console.log(data);
                setLoja(data.nome);
               })
               .catch((error) => {});
        }
     },[globalParams?.id]);


    return (
        <Providers>
     <Stack 
     screenOptions={{
        headerRight({tintColor}) {
            return (             <Popover
            from={
                <TouchableOpacity>
                    <Icon name="shopping-cart" color={tintColor} size={20} />
                </TouchableOpacity>
            }
            >
             <Cart />
            </Popover>
            );
        },
     }}
     >
        <Stack.Screen name="index"
        options={{
            title:"My Food",
            headerTintColor: "#00ccff",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerStyle: {
                backgroundColor: "#1f1d1de"
            },
        }}
        />
        <Stack.Screen 
           name="lojas/index" 
           options={{
                    title: "Lojas",
                    headerTintColor: "#FFF",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerLeft({tintColor}) {
                        return (
                        <Pressable onPress={() => {
                            router.back();
                        }}
                        >
                        <Icon name="angle-left" color={tintColor} size={20}/>
                        </Pressable>
                        );
                    },
                    headerStyle:{
                backgroundColor: "#c93c9f"
            },
        }}
        />
        <Stack.Screen name="lojas/[id]"
         options={{
            title: loja,
            headerTintColor: "#FFF",
            headerTitleAlign: "center",
            headerShadowVisible: false,
           // presentation: "modal",
            headerLeft({tintColor}) {
                return (
                <BackButton onPress={() => {
                    router.back();
                }}
                >
                <Icon name="angle-left" color={tintColor} size={20}/>
                </BackButton>
                );
            },
            headerStyle:{
        backgroundColor: "#c93c9f"
    },
}}
        />
    </Stack>
    </Providers>
    );
}
