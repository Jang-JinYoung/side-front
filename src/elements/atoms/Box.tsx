import React from 'react';
import { IMarker } from '../template/plan/PlanTemplate';

interface IProps extends IMarker {
  onClick: () => void;
}

const Box = (props: IProps) => {
  const { lat, lng, name, onClick } = props;

  return (
    <div
      className="mt-10"
      style={{
        width: '250px',
        height: '100px',
        border: '1px solid black',
      }}
    >
      <button style={{ float: 'right' }} onClick={onClick}>
        123
      </button>
      <div>{name}12</div>
      <div>위도: {lat}</div>
      <div>경도: {lng}</div>
    </div>
  );
};

export default Box;
