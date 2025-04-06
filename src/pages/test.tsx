import React, { useState } from 'react';
import Grid from '@atom/Grid';
import ExpensePieChart from '@atom/Chart';
import Modal from '@atom/Modal';
import { TRecordTransaction } from '@type/RecordTransaction';

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
        type: 'Expense',
        category: '식비',
        amount: -35000,
        description: '점심 식사',
    },
    {
        id: 2,
        date: '2025-04-01',
        type: 'Expense',
        category: '교통비',
        amount: -4500,
        description: '버스 요금',
    },
    {
        id: 3,
        date: '2025-04-02',
        type: 'Expense',
        category: '쇼핑',
        amount: -68000,
        description: '의류 구매',
    },
    {
        id: 4,
        date: '2025-04-02',
        type: 'Income',
        category: '급여',
        amount: 2500000,
        description: '4월 급여',
    },
    {
        id: 5,
        date: '2025-04-03',
        type: 'Expense',
        category: '생활비',
        amount: -42000,
        description: '마트 장보기',
    },
    {
        id: 6,
        date: '2025-04-03',
        type: 'Expense',
        category: '여가',
        amount: -15000,
        description: '영화 관람',
    },
    {
        id: 7,
        date: '2025-04-03',
        type: 'Expense',
        category: '기타',
        amount: -10000,
        description: '경조사비',
    },
];

const Test = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [rowData, setRowData] = useState<TRecordTransaction[]>(data);

    return (
        <div className="h-screen flex flex-col">
            <div className="h-1/2 p-4 bg-gray-100">
                <div className="w-full h-full bg-white rounded-lg shadow-md p-4">
                    <ExpensePieChart data={rowData} />
                </div>
            </div>

            <div className="h-1/2 p-4 bg-gray-200">
                <div className="w-full h-full bg-white rounded-lg shadow-md">
                    <Grid rowData={rowData} />
                </div>
            </div>

            <button
                className="absolute bottom-6 right-6 w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
                onClick={() => setIsModalOpen(true)}
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
        </div>
    );
};

export default Test;
