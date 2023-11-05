import React, { useState } from 'react';
import { IMarker } from '../template/plan/PlanTemplate';

interface IProps extends IMarker {
  onPlanRemoveBtnClick: ({ lat, lng }: IMarker) => void;
  onSetPlaceNameBtnAction: ({ lat, lng, name }: IMarker) => void;
}

const Box = (props: IProps) => {
  const { lat, lng, name, onPlanRemoveBtnClick, onSetPlaceNameBtnAction } =
    props;

  const [placeName, setPlaceName] = useState<string>('');

  return (
    <div className="trip-plan mt-10">
      <span
        className="btn-trash"
        role="button"
        onClick={() => onPlanRemoveBtnClick({ lat, lng })}
      />
      {name ? (
        <span className="trip-plan-txt">{name}</span>
      ) : (
        <div className="trip-plan-txt">
          <input
            placeholder="장소 이름을 적어주세요"
            name="placeName"
            value={placeName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPlaceName(e.target.value)
            }
          ></input>
          <button
            className="ml-10"
            onClick={() =>
              onSetPlaceNameBtnAction({ lat, lng, name: placeName })
            }
          >
            저장
          </button>
        </div>
      )}
    </div>
  );
};

export default Box;
