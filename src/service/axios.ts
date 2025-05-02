import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
// import { InternalAxiosRequestConfig } from "axios-hooks";

// const host = 'http://3.37.127.128:4000';
const host = process.env.HOST;


axios.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // 요청을 보내기 전에 처리할 작업을 구현합니다.
        // config 객체를 변경하여 요청을 수정할 수 있습니다.

        // API
        
        config.headers['Content-Type'] = 'application/json';
        config.url = `${host}${config.url}`;


        return config;
    },
    (error) => {
        // 요청이 실패할 경우 처리할 작업을 구현합니다.
        return Promise.reject(error);
    },
);

axios.interceptors.response.use(
    (response: AxiosResponse) => {
        // 응답을 받은 후 처리할 작업을 구현합니다.
        // response 객체를 변경하여 응답을 수정할 수 있습니다.
        return response;
    },
    (error) => {
        // 응답이 실패할 경우 처리할 작업을 구현합니다.
        return Promise.reject(error);
    },
);

export default axios;
