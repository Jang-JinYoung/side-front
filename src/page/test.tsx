import { useState } from 'react';
import { TRecordTransaction } from '@type/RecordTransaction';
import Calendar from '@atom/Calendar';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createTransaction, deleteTransaction, getTransactionList } from '@service/api/transactionApi';
import SlidingPanel from '@atom/SlidePanel';
import Modal from '@atom/Modal';
import Button from '@atom/Button';
import SummaryInformation from '@component/SummaryInformation';
import { groupBy } from 'lodash';
import { twoDigitFormat } from '@util/dayUtils';
import Filter from '@component/Filter';

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
    const queryClient = useQueryClient();


    // 목록 조회
    const { isLoading, data } = useQuery({
        queryKey: ['transacion', 'list'],
        queryFn: () => getTransactionList(),
    });

    // 등록
    const { mutate: createMutate } = useMutation({
        mutationFn: createTransaction,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['transacion', 'list'] });
        }
    })

    // 삭제
    const { mutate: deleteMutate } = useMutation({
        mutationFn: deleteTransaction,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['transacion', 'list'] });
        }
    })
    // 등록
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 상세
    const [isSlideOpen, setSlideOpen] = useState<boolean>(false);
    const [clickedDate, setClickedDate] = useState<number>();

    const onModalSave = (item: TRecordTransaction) => {
        createMutate(item);
        setIsModalOpen(false);
    }

    const onCalendarClick = (date: number) => {
        setClickedDate(date);
        setSlideOpen(true);
    }

    const onDelete = (id: number) => {
        deleteMutate(id);
    }

    return (
        <div className="h-screen flex">

            {
                isModalOpen &&
                <Modal
                    onClose={() => setIsModalOpen(false)}
                    onSave={onModalSave}
                />
            }

            {/* 좌측 여백: 총입금/총지출/잔액 및 필터 */}
            <Filter />

            {
                !isLoading &&
                <Calendar
                    data={groupBy(data, 'date')}
                    onClick={onCalendarClick}
                />
            }

            <Button.Floating onClick={() => setIsModalOpen(true)} />

            <SlidingPanel
                isOpen={isSlideOpen}
                setOpen={() => setSlideOpen(false)}
                data={clickedDate ? groupBy(data, 'date')[twoDigitFormat(2025, 4, clickedDate)] : null}
                onDelete={onDelete}
            />
        </div>
    );
};

export default Test;
