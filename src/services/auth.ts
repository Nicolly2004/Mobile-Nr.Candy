import { AxiosResponse } from "axios";
import { api } from "../settings/api";



const RESOURCE_URL = "/auth";


interface LoginResponse {
    token:string;
    tipo:string;
}


export interface LoginForm {
    email:string;
    password: string;
}

export interface RegisterForm {
    email:string;
    password: string;
    password_confirmation: string;
    name: string;
}

interface RegisterResponse {
    name: string;
    email: string;    
}

export const login = (email: string, password:string) => {
    return api.post
    <LoginForm,AxiosResponse<LoginResponse>>
    (`${RESOURCE_URL}/login`,{email,password});
}

export const register = (body: RegisterForm) => {
    return api.post
    <RegisterForm,AxiosResponse<RegisterResponse>>
    (`${RESOURCE_URL}/register`,body);
}
