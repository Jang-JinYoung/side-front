import Button from '@atoms/button/Button';
import ButtonWrap from '@components/ButtonWrap';

const SheetPage = () => {

  const onConfirm = () => {
    console.log("확인");
  };

  const onCancel = () => {
    console.log("취소");
  };

  return (
    <ButtonWrap onConfirm={onConfirm} onCancel={onCancel} />
  );
};

export default SheetPage;
