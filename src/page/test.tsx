import { useState } from 'react';
import { TRecordTransaction } from '@type/RecordTransaction';
import Calendar from '@atom/Calendar';
import { useQuery } from '@tanstack/react-query';
import { getTransactionList } from '@service/api/transactionApi';
import SlidingPanel from '@atom/SlidePanel';
import Modal from '@atom/Modal';
import Button from '@atom/Button';
import SummaryInformation from '@component/SummaryInformation';
import Input from '@atom/Input';
import { groupBy } from 'lodash';
import dayjs from 'dayjs';
import { formatDay } from '@util/dayUtils';

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


export type GroupedData = {
    [yearMonth: string]: TRecordTransaction[];
};


const Test = () => {

    const { isLoading, data } = useQuery({
        queryKey: ['transacion', 'list'],
        queryFn: () => getTransactionList(),
    });

    // 등록
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [groupedData, setGroupData] = useState<GroupedData>({});

    // 상세
    const [isSlideOpen, setSlideOpen] = useState<boolean>(false);
    const [clickedDate, setClickedDate] = useState<number>();


    return (
        <div className="h-screen flex">

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

            {/* 좌측 여백: 총입금/총지출/잔액 및 필터 */}
            <div className="w-1/4 bg-gray-50 p-4 border-r shadow-md">
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


            {
                !isLoading &&
                    <Calendar
                        data={groupBy(data, 'date')}
                        onClick={(date: number) => {
                            setClickedDate(date);
                            setSlideOpen(true);
                        }}
                    />
            }

            <Button.Floating onClick={() => setIsModalOpen(true)} />
            <SlidingPanel
                isOpen={isSlideOpen}
                setOpen={() => setSlideOpen(false)}
                data={clickedDate ? groupBy(data, 'date')[clickedDate] : null}
            />
        </div>
    );
};

export default Test;
