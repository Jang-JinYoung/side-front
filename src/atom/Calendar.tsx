import { useState } from "react";
import { formatDay, isDateToday, twoDigitFormat } from "@util/dayUtils";
import { TransactionCode, TRecordTransaction } from "@type/RecordTransaction";
import dayjs from "dayjs";
import { formatCurrency } from "@util/numberUtils";
import { TextColor } from "@util/textColorUtil";

interface IProps {
    year: number,
    month: number,
    data: any;
    buttonAction: {
        onDateClick: (date: number) => void;
        onNavigate: (year: number, month: number) => void
    }
}

const Calendar = ({ year, month, data, buttonAction }: IProps) => {
    // 현재날짜
    const currentDate = dayjs(formatDay({date: `${year}-${month}-${1}`}));

    // 해당 월의 일 수 계산
    const daysInMonth = currentDate.daysInMonth();

    // 해당 월의 첫 번째 날의 요일 계산 (0 = 일요일, 6 = 토요일)
    const firstDay = currentDate.startOf("month").day();

    const onClick = (month: number) => {
        if(month === 13) {
            buttonAction.onNavigate(year+1, 1);
        } else if(month === 0) {
            buttonAction.onNavigate(year-1, 12);
        } else {
            buttonAction.onNavigate(year, month);
        }
    }

    return (
        <div className="w-full max-w-4xl mx-auto border rounded-lg shadow-lg">
            {/* 헤더 */}
            <div className="flex justify-between items-center p-4 bg-gray-100 border-b">
                <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={() => onClick(month-1)}
                >
                    ◀
                </button>
                <span className="text-lg font-bold">{`${year}년 ${month}월`}</span>
                <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={() => onClick(month+1)}
                >
                    ▶
                </button>
            </div>

            {/* 달력 */}
            <table className="table-fixed w-full border-collapse">
                <thead>
                    <tr>
                        {
                            ["일", "월", "화", "수", "목", "금", "토"].map((day) => (
                                <th key={day} className="p-2 text-sm font-medium text-gray-600">
                                    {day}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: Math.ceil((daysInMonth + firstDay) / 7) }, (_, weekIndex) => (
                        <tr key={weekIndex}>
                            {Array.from({ length: 7 }, (_, dateIndex) => {
                                const date = weekIndex * 7 + dateIndex - firstDay + 1;

                                const isToday = isDateToday(year, month-1, date) ? 'bg-yellow-200' : 'bg-gray-100';

                                const key = twoDigitFormat(year, month, date);

                                const transactions = data[key];
                                const isValidDate = date > 0 && date <= daysInMonth;

                                const cursor = isValidDate ? "cursor-pointer" : ""

                                const day = new Date(year, month-1, date).getDay();

                                let dayStyle = "";
                                if (day === 6) { // 토요일
                                    dayStyle = TextColor.BLUE;
                                } else if (day === 0) { // 일요일
                                    dayStyle = TextColor.RED;
                                }

                                return (
                                    <td
                                        key={dateIndex}
                                        className={`h-30 w-30  border text-center bg-gray-100 ${cursor} relative ${isToday}`}
                                        onClick={() => {
                                            if (isValidDate) {
                                                buttonAction.onDateClick(date);
                                            }
                                        }}
                                    >
                                        {isValidDate ? (
                                            <>
                                                <span className={`absolute top-1 left-1 text-sm font-bold ${dayStyle}`}>
                                                    {date}
                                                </span>

                                                {
                                                    transactions &&
                                                    <div className="flex flex-col items-center justify-center h-full">
                                                        {
                                                            transactions.map((t: TRecordTransaction) =>
                                                                <div
                                                                    key={t.transactionId}
                                                                    className={`text-base ${t.transactionCode === TransactionCode.EXPENSE ? `${TextColor.RED}` : `${TextColor.GREEN}`}`}>
                                                                    {formatCurrency(t.amount)}
                                                                </div>
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
