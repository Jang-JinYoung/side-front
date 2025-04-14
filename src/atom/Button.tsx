export type TonClick = () => void;

interface IButton {
    onClick: TonClick;
    text: string;
    className?: string;
};

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

const Cancel = ({ onClick }: { onClick: TonClick }) => {
    return (
        <Button
            onClick={onClick}
            className="bg-gray-500 hover:bg-gray-700"
            text="취소"
        />
    );
};
Button.Cancel = Cancel;


const Save = ({ onClick }: { onClick: TonClick }) => {
    return (
        <Button
            onClick={onClick}
            className="bg-blue-500 hover:bg-blue-700"
            text="저장"
        />
    );
};
Button.Save = Save;

const Floating = ({ onClick }: { onClick: TonClick }) => {
    return (
        <button
            className="absolute bottom-15 right-6 w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                />
            </svg>
        </button>
    );
};
Button.Floating = Floating;


export default Button;
