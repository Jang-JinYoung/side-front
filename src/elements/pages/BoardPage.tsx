import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import { axios } from '@service/';
// import { useQuery } from 'react-query';
// import usePopupStroe from '@store/popup';
// import { CustomButton } from '@atoms/';
// import Header from '@components/common/Header';
// import { utils } from '@lib/';
// import data from "./data.json";

const pagination = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const BoardPage = () => {
  // const [inputValue, setInputValue] = useState('');
  // const { isOpen, toggle } = usePopupStroe();
  const navigate = useNavigate();
  const page =
    Number(new URLSearchParams(useLocation().search).get('page')) ?? 1;

  // 500ms 간격으로 onChange 이벤트를 호출하는 함수를 생성
  // const throttledOnChange = useCallback(
  //   _.throttle((e) => {
  //     // setInputValue(e.target.value);
  //   }, 500),
  //   [],
  // );

  // const onClickSearch = () => {};

  return (<div>board</div>)
};

export default BoardPage;
