interface IButtonProps {
  name?: string;
  value?: string | number;
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ name, value, text, onClick }: IButtonProps) => {
  return (
    <button
      style={{
        width: 90,
        height: 40,
        borderRadius: 15,
        marginRight: 10,
        // backgroundColor: '#469bf0',
        // backgroundColor: '#469bf0',
      }}
      className=""
      name={name}
      value={value}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
