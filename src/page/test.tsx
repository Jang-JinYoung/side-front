import { useState } from 'react';
import { TRecordTransaction, TRecordTransactionDetail, TRecordTransactionRegist } from '@type/RecordTransaction';
import Calendar from '@atom/Calendar';
import { useMutation, useQueries, useQuery, useQueryClient } from '@tanstack/react-query';
import { createTransaction, deleteTransaction, getTransaction, getTransactions, updateTransaction } from '@service/api/transactionApi';
import SlidingPanel from '@atom/SlidePanel';
import Modal from '@atom/Modal';
import Button from '@atom/Button';
import { groupBy } from 'lodash';
import { twoDigitFormat } from '@util/dayUtils';
import Filter from '@component/Filter';
import { getCodeByCodeName } from '@service/api/codeApi';

export interface TransactionData<T> {
    transactionId: number;
    transactionDate: string;
    transactionCode: string;
    categoryCode: string;
    amount: number;
    description: string;
}

export interface CategoryTotal {
    [category: string]: number;
}

const Test = () => {
    const queryClient = useQueryClient();



    const [transactionId, setTransactionId] = useState<number>();

    // 목록 조회
    const { isLoading, data } = useQuery({
        queryKey: ['transacion', 'list'],
        queryFn: getTransactions,
    });

    // 상세 조회
    const { data: transaction } = useQuery({
        queryKey: ['transacion', transactionId],
        queryFn: () => getTransaction({ transactionId }),
        enabled: !!transactionId, // transactionId가 있을 때만 실행
    });

    // 등록
    const { mutate: createMutate } = useMutation({
        mutationFn: createTransaction,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['transacion', 'list'] });
        }
    });

    // 삭제
    const { mutate: deleteMutate } = useMutation({
        mutationFn: deleteTransaction,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['transacion', 'list'] });
            window.alert("삭제되었습니다.");
        }
    });

    // 수정
    const { mutate: updateMutate } = useMutation({
        mutationFn: updateTransaction,
        onSuccess: () => {
            setIsModalOpen(false);
            queryClient.invalidateQueries({ queryKey: ['transacion', 'list'] });
            window.alert("수정되었습니다.");

        }
    });

    /**
     * @field codes[0] 입금 카테고리 코드
     * @field codes[1] 지출 카테고리 코드
     */
    const codes = useQueries({
        queries: [
            {
                queryKey: ['code', 'list', "TransactionCode"],
                queryFn: () => getCodeByCodeName("TransactionCode"),
            },
            {
                queryKey: ['code', 'list', "IncomeCategoryCode"],
                queryFn: () => getCodeByCodeName("IncomeCategoryCode"),
            },
            { 
                queryKey: ['code', 'list', "ExpenseCategoryCode"],
                queryFn: () => getCodeByCodeName("ExpenseCategoryCode"),
            },
        ],
    });

    // 등록
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 상세
    const [isSlideOpen, setSlideOpen] = useState<boolean>(false);
    const [clickedDate, setClickedDate] = useState<number>();

    /* 달력 클릭 */
    const onCalendarClick = (date: number) => {
        setClickedDate(date);
        setSlideOpen(true);
    }

    /* 슬라이드 버튼 클릭 */
    const SlideButtonAction = {
        // 수정버튼
        onUpdate: (transactionId: number) => {
            setTransactionId(transactionId);
            setIsModalOpen(true);
        },
        // 삭제버튼
        onDelete: (transactionId: number) => {
            const isConfirmed = window.confirm("삭제하시겠습니까?");
            if (isConfirmed) {
                deleteMutate(transactionId);
            }
        }
    };

    const ModalButtonAction = {
        onSave: (item: TRecordTransaction) => {
            createMutate(item);
            setIsModalOpen(false);
        },
        onUpdate: (item: TRecordTransactionDetail) => {
            const isConfirmed = window.confirm("수정하시겠습니까??");
            if (isConfirmed) {
                updateMutate(item);
            }
        }
    };

    return (
        <div className="h-screen flex">

            {
                isModalOpen &&
                <Modal
                    codes={codes}
                    onClose={() => setIsModalOpen(false)}
                    transaction={transaction}
                    onSave={ModalButtonAction.onSave}
                    onUpdate={ModalButtonAction.onUpdate}
                />
            }

            {/* 좌측 여백: 총입금/총지출/잔액 및 필터 */}
            <Filter />

            {
                !isLoading &&
                <Calendar
                    data={groupBy(data, 'transactionDate')}
                    onClick={onCalendarClick}
                />
            }

            <Button.Floating onClick={() => setIsModalOpen(true)} />

            <SlidingPanel
                isOpen={isSlideOpen}
                setOpen={() => setSlideOpen(false)}
                data={clickedDate ? groupBy(data, 'transactionDate')[twoDigitFormat(2025, 4, clickedDate)] : null}
                onUpdate={SlideButtonAction.onUpdate}
                onDelete={SlideButtonAction.onDelete}
            />
        </div>
    );
};

export default Test;
