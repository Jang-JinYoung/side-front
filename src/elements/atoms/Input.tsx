import React from 'react';

export interface IInput {
    className?: string;
    name: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = () => {
    return null;
}


export interface ICheckBox extends IInput {
    checked?: boolean;
}

const CheckBox = (props: ICheckBox) => {
    return (
        <input type="checkbox" {...props}/>
    )
};

Input.CheckBox = CheckBox;

export interface IInputText extends IInput {
    placeholder?: string;
}

const Text = (props: IInput) => {
    return (
        <input type="text" {...props}/>
    )
}

Input.Text = Text;


export default Input;
