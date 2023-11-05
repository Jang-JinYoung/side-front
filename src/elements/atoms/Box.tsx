import React from 'react';
import { IMarker } from '../template/plan/PlanTemplate';

interface IProps extends IMarker {
  onClick: () => void;
}

const Box = (props: IProps) => {
  const { name, onClick } = props;

  return (
    <div className="trip-plan mt-10">
      <span className="btn_trash" role="button" onClick={onClick} />
      <span className="pl-10">{name}</span>
    </div>
  );
};

export default Box;
