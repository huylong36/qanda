import { AxiosResponse } from "axios";
import { ApiClient } from "./fetcher";

export const createQuestionApi = async (params?: any) => {
    const response: AxiosResponse<any> = await ApiClient.post(`/question/create-question`, params);
    return response;
};
export const getQuestionByCategoryId = async (categoryId: any) => {
    const response: AxiosResponse<any> = await ApiClient.post(`/question/get-question?category=${categoryId}`);
    return response;
}; 