import React from "react";
import { Button } from "react-bootstrap";

/*
타입정의
https://react-bootstrap.github.io/components/buttons/
*/

interface IButtonProps {
  variant?: string;
  text?: string;
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}

const CustomButton = ({ variant, text, onClick }: IButtonProps) => {
  return (
    <Button variant={variant ?? "success"} onClick={onClick}>
      {text}
    </Button>
  );
};

export default CustomButton;
