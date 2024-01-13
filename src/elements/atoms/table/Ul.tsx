import { useState } from 'react';
import { IUl, ILi } from './types';

const Ul = ({ title, liList, isHidden }: IUl) => {

  /* li 숨기는 setState */
  const [hidden, setHidden] = useState<boolean | undefined>(
    /* isHidden이 true일때만 사용한다 */
    isHidden ? false : undefined,
  );
  
  return (
    <div>
      <h1 onClick={() => {
        /* isHidden이 true일때만 사용한다 */
        if(isHidden) {
          setHidden(!hidden);
        }
      }}>
        {title}
      </h1>
      {
        !hidden &&
        <ul>
          {liList.map((li: ILi) => (
            <li onClick={li.onClick}>{li.title}</li>
          ))}
        </ul>
      }
    </div>
  );
};

export default Ul;
