import Button from '@atoms/button/Button';

interface IProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ButtonWrap = ({
  onConfirm,
  onCancel
}: IProps) => {
  return (
    <div>
      <Button
        text="취소"
        onClick={onCancel}
      />
      <Button
        text="확인"
        onClick={onConfirm}
      />
    </div>
  );
};

export default ButtonWrap;
