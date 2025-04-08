import { useEffect, useState } from 'react';
import { TRecordTransaction } from '@type/RecordTransaction';
import { formatDay } from '@util/dayUtils';
import Calendar from '@atom/Calendar';
import dayjs from 'dayjs';
import SlidingPanel from '@atom/SlidePanel';
import Modal from '@atom/Modal';
import Button from '@atom/Button';

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
        <div className="h-screen flex flex-col">
            {/* <div className="h-1/2 p-4 bg-gray-100">
                <div className="w-full h-full bg-white rounded-lg shadow-md p-4">
                    <지출PieChart data={rowData} />
                </div>
            </div> */}

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
