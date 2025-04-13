import { useState } from 'react';
import Modal from '@atom/Modal';
import { TRecordTransaction } from '@type/RecordTransaction';
import Calendar from '@atom/Calendar';
import { useQuery } from '@tanstack/react-query';
import { getTransactionList } from '@service/api/transactionApi';
import { groupBy } from 'lodash';

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

const Test = () => {

    const { isLoading, data } = useQuery({
        queryKey: ['transacion', 'list'],
        queryFn: () => getTransactionList(),
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="h-screen flex flex-col">
            {/* <div className="h-1/2 p-4 bg-gray-100">
                <div className="w-full h-full bg-white rounded-lg shadow-md p-4">
                    <ExpensePieChart data={rowData} />
                </div>
            </div> */}

            {
                isModalOpen &&
                <Modal
                    onClose={() => setIsModalOpen(false)}
                    onSave={(item: TRecordTransaction) => {
                        // setRowData([...rowData, item])
                        setIsModalOpen(false);
                    }}
                />
            }

            {!isLoading && <Calendar data={groupBy(data, "date")} />}

            {/* <div className="h-1/2 p-4 ">
                <div className="w-full h-full bg-white rounded-lg shadow-md">
                    <Grid rowData={rowData} />
                </div>
            </div> */}

            <button
                className="absolute bottom-15 right-6 w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
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
        </div>
    );
};

export default Test;
