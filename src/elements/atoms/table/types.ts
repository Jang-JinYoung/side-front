import { StyleHTMLAttributes } from "react";

export interface IUl {
  title: string | number;
  isHidden?: boolean;
  liList: ILi[];
}

export interface ILi {
  onClick: () => void;
  title: string | number;
}

const liData: ILi[] = [
  {title: "", onClick: () => console.log("")},
]