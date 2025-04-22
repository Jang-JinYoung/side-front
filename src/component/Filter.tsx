import { TCommonCode } from "@type/CommonCode";

const Filter = ({ statistics, codes }: { statistics: any, codes: any }) => {

    return (
        <div className="w-1/5 bg-gray-50 p-4 border-r shadow-md">
            {/* 총입금/총지출/잔액 */}
            <SummaryInformation statistics={statistics} />

            {/* 필터 */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    유형
                </label>
                <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            name="transactionCode"
                            value={"10000000"}
                            // checked={formData.transactionCode === code.code}
                            // onChange={onChange}
                            className="form-radio"
                        />
                        <span className="ml-2">전체</span>
                    </label>
                    {
                        codes &&
                        codes.map((code: TCommonCode) =>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="transactionCode"
                                    value={code.code}
                                    // checked={formData.transactionCode === code.code}
                                    // onChange={onChange}
                                    className="form-radio"
                                />
                                <span className="ml-2">{code.codeKorName}</span>
                            </label>
                        )
                    }
                </div>

                {/* <select
                    className="w-full p-2 border rounded-lg mb-4"
                    onChange={(e) => console.log(e.target.value)}
                >
                    <option value="">전체 보기</option>
                    <option value="income">입금</option>
                    <option value="expense">지출</option>
                </select> */}

                {/* 날짜 필터 */}
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="date"
                >
                    시작
                </label>
                {/* <Input.Date value={formatDay({})} onChange={() => console.log("A")} /> */}
                <label
                    className="block text-gray-700 text-sm font-bold mb-2 mt-5"
                    htmlFor="date"
                >
                    종료
                </label>
                {/* <Input.Date value={formatDay({})} onChange={() => console.log("A")} /> */}
            </div>
        </div>
    );
}

const SummaryInformation = ({ statistics }: { statistics: any }) => {
    return (
        <div className="mb-6">
            <div className="mb-2">
                <span className="block text-gray-600">수입</span>
                <span className="text-green-500 font-bold text-xl">+{statistics?.income} 원</span>
            </div>
            <div className="mb-2">
                <span className="block text-gray-600">지출</span>
                <span className="text-red-500 font-bold text-xl">-{statistics?.expense} 원</span>
            </div>
            <div className="mb-2">
                <span className="block text-gray-600">잔액</span>
                <span className="text-gray-500 font-bold text-xl">{statistics?.balance} 원</span>
            </div>
        </div>
    );
};


export default Filter;