import axios from "@service/axios";

/**
 * 목록 조회
 * @returns 
 */
export const getAllCode = async () => {
    return axios({
        method: 'get',
        url: '/code',
    }).then((res: any) => {
        return res.data;
    });
};


/**
 * 특정 코드 조회
 */
export const getCodeByCodeName = async (codeName?: string) => {
    return axios({
        method: 'get',
        url: `/code/${codeName}`,
    }).then((res: any) => {
        return res.data;
    });
};