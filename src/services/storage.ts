import { setItemAsync, deleteItemAsync, getItemAsync } from "expo-secure-store"


export const storeData = async (key: string, value: string) => {
    try{
        await setItemAsync(key,value);
    } catch(error) {
        console.log(error);
    }
}

export const deleteData = async (key: string) => {
    try {
        await deleteItemAsync(key);
    }catch(error) {
        console.log(error);
    }
}

export const getData = async (key: string, defaultValue: string | null= null) => {
    try {
        const value = await getItemAsync(key);

        if (value != null) {
            return value;
        } else {
            return defaultValue;
        }
    } catch(error) {
        console.log(error);
        return defaultValue;
    }
}