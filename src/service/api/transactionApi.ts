import axios from "@service/axios";
import { TRecordTransactionRegist } from "@type/RecordTransaction";

/**
 * 목록 조회
 * @returns 
 */
export const getTransactionList = async () => {
    return axios({
        method: 'get',
        url: '/transaction',
    }).then((res: any) => {
        return res.data;
    });
};

/**
 * 생성
 * @param params 
 * @returns 
 */
export const createTransaction = async (params: TRecordTransactionRegist) => {

    return axios({
        method: 'post',
        url: '/transaction',
        data: params
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
        method: 'delete',
        url: `/transaction/${transactionId}`,
    }).then((res: any) => {
        return res.data;
    });
};