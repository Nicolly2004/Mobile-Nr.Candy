import { FC, ReactElement, createElement, useEffect } from "react";


interface FormProps {
    children: ReactElement[] | ReactElement;
    setValue: any;
    register: any;
    errors: any;
}

export const Form: FC<FormProps> = ({
    children,
    register,
    errors,
    setValue,
}) => {
    
    useEffect(() => {
        (Array.isArray(children)? [...children]: [children]).forEach((child) => {
            if(child.props.id)
            register(child.props.id);
        });
    },[register]);

    return <>
    {(Array.isArray(children) ? [...children]: [children]).map(child => {
        return child.props.id ? createElement(child.type, {
            ...{
                onChangeText: (value: string) => 
                setValue(child.props.id, value,true),
                key: child.props.id,
                ...child.props,
                error: errors [child.props.id],
            }
        }) : child
    })}
    </>
}