export type TonClick = () => void;

interface IButton {
    onClick: TonClick;
    text: string;
    className?: string;
}

const Button = ({ onClick, text, className }: IButton) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`}
        >
            {text}
        </button>
    );
};

const Cancel = ({ onClick }: { onClick: TonClick } ) => {
    return (
        <Button
            onClick={onClick}
            className="bg-gray-500 hover:bg-gray-700"
            text="취소" 
        />
    );
}
Button.Cancel = Cancel;


const Save = ({ onClick }: { onClick: TonClick } ) => {
    return (
        <Button
            onClick={onClick}
            className="bg-blue-500 hover:bg-blue-700"
            text="저장"
        />
    );
}

Button.Save = Save;

export default Button;
