const SummaryInformation = () => {
    return (
        <div className="mb-6">
            <h2 className="text-lg font-bold mb-4">요약 정보</h2>
            <div className="mb-2">
                <span className="block text-gray-600">총 입금</span>
                <span className="text-green-500 font-bold text-xl">+2,500,000 원</span>
            </div>
            <div className="mb-2">
                <span className="block text-gray-600">총 지출</span>
                <span className="text-red-500 font-bold text-xl">-1,200,000 원</span>
            </div>
            <div>
                <span className="block text-gray-600">잔액</span>
                <span className="text-blue-500 font-bold text-xl">+1,300,000 원</span>
            </div>
        </div>
    );
};

export default SummaryInformation;