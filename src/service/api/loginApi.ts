import axios from "axios";

/**
 * 로그인
 * @returns 
 */
export const snsLogin = async (sns: string, code: string) => {
    return axios({
        method: 'get',
        url: `/login/callback?sns=${sns}&code=${code}`,
    }).then((res: any) => {
        return res.data;
    });
};
