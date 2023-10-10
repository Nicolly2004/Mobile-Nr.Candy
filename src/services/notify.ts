import Toast from "react-native-toast-message";


type ToastType = "success" | "error" | "info";

const notify = (type: ToastType, message:string, title?:string) => {
    Toast.show({
        type,
        text2:message,
        ...(title ? {text1 : title} : {}),
    });
}

export const notifySuccess = (message: string, title?:string) => {
    notify("success", message,title);
}

export const notifyError = (message: string, title?: string) => {
    notify("error", message,title);
}

export const notifyInfo = (message: string, title?: string) => {
    notify("info", message,title);
}