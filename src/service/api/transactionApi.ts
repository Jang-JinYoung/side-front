import axios from "@service/axios";

export const getTransactionList = () => {
    return axios({
        method: 'get',
        url: '/',
    }).then((res: any) => {
        
        return res.data;
    });
}