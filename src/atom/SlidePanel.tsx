import Button, { TonClick } from "./Button";
import { TransactionCode, TRecordTransaction, TRecordTransactionDetail } from "@type/RecordTransaction";

interface IProps {
    isOpen: boolean,
    setOpen: TonClick,
    data?: TRecordTransactionDetail[] | null,
    onDelete: (id: number) => void;
    onUpdate: (id: number) => void;
};

const SlidingPanel = ({ isOpen, setOpen, data, onDelete, onUpdate }: IProps) => {


    return (
        <div className="relative">

            {/* 슬라이드 패널 */}
            <div
                className={`fixed top-0 right-0 h-full w-[20%] bg-gray-800 text-white transform transition-transform duration-500 ease-in-out overflow-y-auto ${isOpen ? "translate-x-0" : "translate-x-full"} `}
            >
                <Button
                    className="absolute top-4 right-4 bg-red-500"
                    onClick={setOpen}
                    text="X"
                />

                <div className="overflow-y-scroll h-full  p-4 mt-15">
                    {
                        data ? data.map((t: TRecordTransactionDetail, index) =>
                            <Card key={index} data={t} onDelete={onDelete} onUpdate={onUpdate} />
                        ) : (
                            <div>내용을 추가해보세요!</div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

interface ICard { 
    data: TRecordTransactionDetail, 
    onDelete: (id: number) => void, 
    onUpdate: (id: number) => void 
}

const Card = ({ data, onDelete, onUpdate }: ICard) => {

    const { transactionCode, categoryCode, description, amount, transactionId } = data;

    return (
        <div className="relative">

            <div className="flex items-center justify-between p-4 bg-gray-100 border rounded-lg shadow-md mb-5">
                {/* 좌측 영역 */}
                <div>
                    {/* 지출/입금 카테고리 */}
                    <span
                        className={`block text-sm font-bold ${transactionCode === TransactionCode.EXPENSE ? "text-red-500" : "text-green-500"}`}
                    >
                        {transactionCode === TransactionCode.EXPENSE ? "출금" : "입금"} - {categoryCode}
                    </span>
                    {/* 설명 */}
                    <p className="text-gray-700 text-sm mt-1">{description}</p>
                </div>

                {/* 우측 금액 */}
                <div className="text-right">
                    <span
                        className={`text-lg font-bold ${transactionCode === TransactionCode.EXPENSE ? "text-red-500" : "text-green-500"}`}
                    >
                        {amount.toLocaleString()} 원
                    </span>
                </div>

                <div className="absolute top-2 right-2 flex space-x-2">
                    {/* 연필 아이콘 (수정 버튼) */}
                    <button
                        onClick={() => onUpdate(transactionId)} // 수정 핸들러 함수
                        className="text-gray-500 hover:text-gray-700 cursor-pointer"
                        aria-label="Edit"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M3 17.25V21h3.75l11-11.03L14 6.25l-11 11zM17.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a1 1 0 00-1.41 0L13 4l2.34 2.34c.39.39 1 .39 1.37-.3z" />
                        </svg>
                    </button>

                    {/* X 아이콘 (삭제 버튼) */}
                    <button
                        onClick={() => onDelete(transactionId)} // 삭제 핸들러 함수
                        className="text-gray-500 hover:text-red-500 cursor-pointer"
                        aria-label="Delete"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

            </div>

        </div>
    );
};

export default SlidingPanel;
