import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/' });
const requestHandler = (config: AxiosRequestConfig) => {
    config.params = {
        ...config.params,
    };

    return config;
};

let failedQueue: any = [];

const processQueue = (error: any, token: string = '') => {
    failedQueue.forEach((prom: any) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};

const responseErrorHandler = async (err: AxiosError) => {
    const data: any = err?.response?.data;
    const message = data?.message;

    if (message) throw new Error(message);
    return Promise.reject(err);
};

axiosInstance.interceptors.request.use(requestHandler, (err) => Promise.reject(err));
axiosInstance.interceptors.response.use((response: any) => response, responseErrorHandler);

export { axiosInstance as ApiClient };