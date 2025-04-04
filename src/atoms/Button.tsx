interface IButton {
    onClick: () => void;
    text: string;
    className?: string;
}

const Button = ({ onClick, text, className }: IButton) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={className}
        >
            {text}
        </button>
    );
};

const Cancel = ({ onClick }: { onClick: () => void } ) => {
    return (

        <Button
            onClick={onClick}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            text="취소" 
        />
    );
}
Button.Cancel = Cancel;


const Save = ({ onClick }: { onClick: () => void } ) => {
    return (
        <Button
            onClick={onClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            text="저장"
        />
    );
}

Button.Save = Save;

export default Button;
