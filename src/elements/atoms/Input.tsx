import React from 'react';

interface IProps {
    name: string;
    value: string | number;
    onChange: () => void;
    checked?: boolean;
}

const Input = () => {
    return null;
}


const CheckBox = (props: IProps) => {
    return (
        <input type="checkbox" {...props}/>
    )
};

Input.CheckBox = CheckBox;

export default Input;
