import { useState } from "react";
import { formatDay, isDateToday } from "@util/dayUtils";
import { TRecordTransaction } from "@type/RecordTransaction";
import dayjs from "dayjs";

interface IProps {
    data: any;
    onClick: (date: number) => void;
}



const Calendar = ({ data, onClick }: IProps) => {
    // 현재날짜
    const currentDate = dayjs(formatDay({}));

    const [calendarDate, setCalendarDate] = useState(currentDate);

    // 연도와 월 계산
    const year = calendarDate.year();
    const month = calendarDate.month(); // 0부터 시작 (0 = 1월)

    // 해당 월의 일 수 계산
    const daysInMonth = calendarDate.daysInMonth(); // 현재 월의 총 일 수

    // 해당 월의 첫 번째 날의 요일 계산 (0 = 일요일, 6 = 토요일)
    const firstDay = calendarDate.startOf("month").day();

    const changeMonth = (offset: number) => {
        const newDate = calendarDate.add(offset, "month"); // 현재 날짜에서 월을 더하거나 뺌
        setCalendarDate(newDate); // 상태 업데이트
    };



    return (
        <div className="w-full max-w-4xl mx-auto border rounded-lg shadow-lg">
            {/* 헤더 */}
            <div className="flex justify-between items-center p-4 bg-gray-100 border-b">
                <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={() => changeMonth(-1)}
                >
                    ◀
                </button>
                <span className="text-lg font-bold">{`${year}년 ${month + 1}월`}</span>
                <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={() => changeMonth(1)}
                >
                    ▶
                </button>
            </div>

            {/* 달력 */}
            <table className="table-fixed w-full border-collapse">
                <thead>
                    <tr>
                        {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
                            <th key={day} className="p-2 text-sm font-medium text-gray-600">
                                {day}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: Math.ceil((daysInMonth + firstDay) / 7) }, (_, weekIndex) => (
                        <tr key={weekIndex}>
                            {Array.from({ length: 7 }, (_, dateIndex) => {
                                const date = weekIndex * 7 + dateIndex - firstDay + 1;

                                const isToday = isDateToday(year, month, date) ? 'bg-yellow-200 font-bold' : 'bg-gray-100';
                                const ExpenseStyle = 'text-red-500';
                                const IncomeStyle = 'text-green-500';
                                const isValidDate = date > 0 && date <= daysInMonth;
                                const cursor  = isValidDate ? "cursor-pointer" : ""

                                return (
                                    <td
                                        key={dateIndex}
                                        className={`h-30 w-30  border text-center bg-gray-100 ${cursor} relative ${isToday}`}
                                        onClick={() => {
                                            if (isValidDate) {
                                                onClick(date);
                                            }
                                        }}
                                    >
                                        {isValidDate ? (
                                            <>
                                                <span className="absolute top-1 left-1 text-sm font-bold">{date}</span>

                                                {
                                                    data &&
                                                    <div className="flex flex-col items-center justify-center h-full">
                                                        {
                                                            data[date]?.map((t: TRecordTransaction) =>
                                                                <div key={t.id} className={`text-base ${t.type === "EXPENSE" ? `${ExpenseStyle}` : `${IncomeStyle}`}`}>{(t.amount).toLocaleString()} </div>
                                                            )
                                                        }
                                                    </div>
                                                }
                                            </>
                                        ) : null}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};



export default Calendar;
