import SummaryInformation from "./SummaryInformation";

const Filter = () => {
    return (
        <div className="w-1/5 bg-gray-50 p-4 border-r shadow-md">
            {/* 총입금/총지출/잔액 */}
            <SummaryInformation />

            {/* 필터 */}
            <div>
                <select
                    className="w-full p-2 border rounded-lg mb-4"
                    onChange={(e) => console.log(e.target.value)}
                >
                    <option value="">전체 보기</option>
                    <option value="income">입금만 보기</option>
                    <option value="expense">지출만 보기</option>
                </select>

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

export default Filter;