const SummaryInformation = () => {
    return (
        <div className="mb-6">
            <div className="mb-2">
                <span className="block text-gray-600">수입</span>
                <span className="text-green-500 font-bold text-xl">+2,500,000 원</span>
            </div>
            <div className="mb-2">
                <span className="block text-gray-600">지출</span>
                <span className="text-red-500 font-bold text-xl">-1,200,000 원</span>
            </div>
            <div className="mb-2">
                <span className="block text-gray-600">잔액</span>
                <span className="text-gray-500 font-bold text-xl">+1,300,000 원</span>
            </div>
        </div>
    );
};

export default SummaryInformation;