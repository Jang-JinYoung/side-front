import axios from "@service/axios";
import { TRecordTransactionDetail, TRecordTransactionRegist } from "@type/RecordTransaction";

/**
 * 목록 조회
 * @returns 
 */
export const getTransactions = async () => {
    return axios({
        method: 'get',
        url: '/transaction',
    }).then((res: any) => {
        return res.data;
    });
};

/**
 * 상세 조회
 * @returns 
 */
export const getTransaction = async ({transactionId}: {transactionId?: number}) => {
    return axios({
        method: 'get',
        url: `/transaction/${transactionId}`,
    }).then((res: any) => {
        return res.data;
    });
};

export const getStatistics = async () => {
    return axios({
        method: 'get',
        url: `/transaction/statistics`
    }).then((res: any) => {
        return res.data
    });
};

/**
 * 생성
 * @param params 
 * @returns 
 */
export const createTransaction = async (transaction: TRecordTransactionRegist) => {
    return axios({
        method: 'post',
        url: '/transaction',
        data: transaction
    }).then((res: any) => {
        return res.data;
    });
};

/**
 * 수정
 * @param id 
 * @returns 
 */
export const updateTransaction = async (transaction: TRecordTransactionDetail) => {
    return axios({
        method: 'put',
        url: `/transaction/update/${transaction.transactionId}`,
        data: transaction,
    }).then((res: any) => {
        return res.data;
    });
};

/**
 * 삭제
 * @param id 
 * @returns 
 */
export const deleteTransaction = async (transactionId: number) => {
    return axios({
        method: 'put',
        url: `/transaction/delete/${transactionId}`,
    }).then((res: any) => {
        return res.data;
    });
};