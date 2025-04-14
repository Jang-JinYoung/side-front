import axios from "@service/axios";

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

export const createTransaction = async (params?: any) => {

    return axios({
        method: 'post',
        url: '/transaction',
        data: params
    }).then((res: any) => {
        return res.data;
    });
};