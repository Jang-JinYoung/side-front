import { useEffect, useState } from 'react';
import { TRecordTransaction } from '@type/RecordTransaction';
import { formatDay } from '@util/dayUtils';
import Calendar from '@atom/Calendar';
import dayjs from 'dayjs';
import SlidingPanel from '@atom/SlidePanel';
import Modal from '@atom/Modal';
import Button from '@atom/Button';
import SummaryInformation from '@component/SummaryInformation';
import Input from '@atom/Input';

export interface TransactionData {
    id: number;
    date: string;
    type: string;
    category: string;
    amount: number;
    description: string;
}

export interface CategoryTotal {
    [category: string]: number;
}

const data: TRecordTransaction[] = [
    {
        id: 1,
        date: '2025-04-01',
        type: 'EXPENSE',
        category: '식비',
        amount: 35000,
        description: '점심 식사',
    },
    {
        id: 2,
        date: '2025-04-01',
        type: 'EXPENSE',
        category: '교통비',
        amount: 4500,
        description: '버스 요금',
    },
    {
        id: 3,
        date: '2025-04-02',
        type: 'EXPENSE',
        category: '쇼핑',
        amount: 68000,
        description: '의류 구매',
    },
    {
        id: 4,
        date: '2025-04-02',
        type: 'INCOME',
        category: '급여',
        amount: 2500000,
        description: '4월 급여',
    },
    {
        id: 5,
        date: '2025-04-03',
        type: 'EXPENSE',
        category: '생활비',
        amount: 42000,
        description: '마트 장보기',
    },
    {
        id: 6,
        date: '2025-04-03',
        type: 'EXPENSE',
        category: '여가',
        amount: 15000,
        description: '영화 관람',
    },
    {
        id: 7,
        date: '2025-04-03',
        type: 'EXPENSE',
        category: '기타',
        amount: 10000,
        description: '경조사비',
    },
    {
        id: 8,
        date: '2025-04-07',
        type: 'EXPENSE',
        category: '기타',
        amount: 10000,
        description: '경조사비',
    },
];

export type GroupedData = {
    [yearMonth: string]: TRecordTransaction[];
};


const Test = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [rowData, setRowData] = useState<TRecordTransaction[]>(data);

    const [groupedData, setGroupData] = useState<GroupedData>({});

    const [isSlideOpen, setSlideOpen] = useState<boolean>(false);
    const [clickedDate, setClickedDate] = useState<number>();


    useEffect(() => {
        const groupedData = rowData.reduce<GroupedData>((acc, record) => {
            const date = dayjs(formatDay({ date: record.date })).date(); // 'YYYY-MM-DD' 형식의 날짜를 키로 사용


            if (!acc[date]) {
                acc[date] = [];
            }

            acc[date].push(record);

            return acc;
        }, {});

        setGroupData(groupedData);

    }, [rowData]);

    return (
        <div className="h-screen flex">

            {
                isModalOpen &&
                <Modal
                    onClose={() => setIsModalOpen(false)}
                    onSave={(item: TRecordTransaction) => {
                        setRowData([...rowData, item])
                        setIsModalOpen(false);
                    }}
                />
            }

            {/* 좌측 여백: 총입금/총지출/잔액 및 필터 */}
            <div className="w-1/4 bg-gray-50 p-4 border-r shadow-md">
                {/* 총입금/총지출/잔액 */}
                <SummaryInformation />

                {/* 필터 */}
                <div>
                    {/* <select
                        className="w-full p-2 border rounded-lg mb-4"
                        onChange={(e) => console.log(e.target.value)}
                    >
                        <option value="">전체 보기</option>
                        <option value="income">입금만 보기</option>
                        <option value="expense">지출만 보기</option>
                    </select> */}

                    {/* 날짜 필터 */}
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="date"
                    >
                        시작
                    </label>
                    <Input.Date value="1" onChange={() => console.log("A")} />
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2 mt-5"
                        htmlFor="date"
                    >
                        종료
                    </label>
                    <Input.Date value="1" onChange={() => console.log("A")} />
                </div>
            </div>


            <Calendar
                data={groupedData}
                onClick={(date: number) => {
                    setClickedDate(date);
                    setSlideOpen(true);
                }}
            />

            {/* <div className="h-1/2 p-4 ">
                <div className="w-full h-full bg-white rounded-lg shadow-md">
                    <Grid rowData={rowData} />
                </div>
            </div> */}

            <Button.Floating onClick={() => setIsModalOpen(true)} />
            <SlidingPanel
                isOpen={isSlideOpen}
                setOpen={() => setSlideOpen(false)}
                data={clickedDate ? groupedData[clickedDate] : null}
            />
        </div>
    );
};

export default Test;
