import { useState } from 'react';
import { TransactionCode, TRecordTransaction, TRecordTransactionDetail, } from '@type/RecordTransaction';
import Calendar from '@atom/Calendar';
import { useMutation, useQueries, useQuery, useQueryClient } from '@tanstack/react-query';
import { createTransaction, deleteTransaction, getStatistics, getTransaction, getTransactions, updateTransaction } from '@service/api/transactionApi';
import SlidingPanel from '@atom/SlidePanel';
import Modal from '@atom/Modal';
import Button from '@atom/Button';
import { groupBy } from 'lodash';
import { formatDay, twoDigitFormat } from '@util/dayUtils';
import Filter from '@component/Filter';
import { getCodeByCodeName } from '@service/api/codeApi';
import { useSearchParams } from 'react-router-dom';
export interface TransactionData {
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

const MainPage = () => {

    // 검색값
    const [searchParams, setSearchParams] = useSearchParams();
    const year = searchParams.get('year') ? Number(searchParams.get('year')) : new Date().getFullYear();
    const month = searchParams.get('month') ? Number(searchParams.get('month')) : new Date().getMonth() + 1;
    const transactionCode = searchParams.get('transactionCode') ? searchParams.get('transactionCode') : TransactionCode.ALL

    const queryClient = useQueryClient();

    const [transactionId, setTransactionId] = useState<number | undefined>();

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
            queryClient.invalidateQueries({ queryKey: ['transacion'] });
        }
    });

    // 삭제
    const { mutate: deleteMutate } = useMutation({
        mutationFn: deleteTransaction,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['transacion'] });
            window.alert("삭제되었습니다.");
        }
    });

    // 수정
    const { mutate: updateMutate } = useMutation({
        mutationFn: updateTransaction,
        onSuccess: () => {
            setIsModalOpen(false);
            queryClient.invalidateQueries({ queryKey: ['transacion'] });
            window.alert("수정되었습니다.");
            setTransactionId(undefined)

        }
    });

    /**
     * @field result[0] 입금 카테고리 코드
     * @field result[1] 지출 카테고리 코드
     * @field result[2] 데이터
     * @field result[3] 통계값
     */
    const result = useQueries({
        queries: [
            {
                queryKey: ['code', 'list', "IncomeCategoryCode"],
                queryFn: () => getCodeByCodeName("IncomeCategoryCode"),
            },
            {
                queryKey: ['code', 'list', "ExpenseCategoryCode"],
                queryFn: () => getCodeByCodeName("ExpenseCategoryCode"),
            },
            {
                queryKey: ['transacion', 'list', year, month],
                queryFn: () => getTransactions(year, month),
            },
            {
                queryKey: ['transacion', 'statistics', year, month],
                queryFn: () => getStatistics(year, month),
            }
        ],
    });

    // 등록
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 상세
    const [isSlideOpen, setSlideOpen] = useState<boolean>(false);
    const [clickedDate, setClickedDate] = useState<number>();

    const CalendarButtonAction = {
        /* 달력 클릭 */
        onDateClick: (date: number) => {
            setClickedDate(date);
            setSlideOpen(true);
        },
        // 페이지 이동
        onNavigate: (year: number, month: number) => {
            // navigate(url);
            setSearchParams({ year: year.toString(), month: month.toString() });
        }
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

    /* 모달 버튼 클릭 */
    const ModalButtonAction = {
        // 닫기버튼
        onClose: () => setIsModalOpen(false),
        // 저장버튼
        onSave: (item: TRecordTransaction) => {
            createMutate(item);
            setIsModalOpen(false);
        },
        // 수정버튼
        onUpdate: (item: TRecordTransactionDetail) => {
            const isConfirmed = window.confirm("수정하시겠습니까??");
            if (isConfirmed) {
                updateMutate(item);
            }
        }
    };

    const FilterButtonAction = {
        // 검색
        onSearch: () => {
            //
        }
    }

    return (
        <div className="h-screen flex">
            {
                isModalOpen ?
                    <Modal
                        codes={result}
                        transactionDate={clickedDate ? formatDay({ date: `${year}-${month}-${clickedDate}`, template: "YYYY-MM-DD" }) : null}
                        transaction={transaction}
                        buttonAction={ModalButtonAction}
                    /> :
                    <Filter
                        statistics={result[3].data}
                        buttonAction={FilterButtonAction}
                    />
            }

            {
                !result[3].isLoading &&
                <Calendar
                    year={year}
                    month={month}
                    buttonAction={CalendarButtonAction}
                    data={groupBy(result[2].data, 'transactionDate')}
                />
            }

            <Button.Floating
                onClick={() => setIsModalOpen(true)}
            />

            <SlidingPanel
                isOpen={isSlideOpen}
                title={`${year}년 ${month}월 ${clickedDate}일`}
                onAdd={() => setIsModalOpen(true)}
                onClose={() => setSlideOpen(false)}
                data={clickedDate ? groupBy(result[2].data, 'transactionDate')[twoDigitFormat(year, month, clickedDate)] : null}
                onUpdate={SlideButtonAction.onUpdate}
                onDelete={SlideButtonAction.onDelete}

            />
        </div>
    );
};

export default MainPage;
