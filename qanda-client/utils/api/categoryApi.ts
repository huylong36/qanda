import { AxiosResponse } from "axios";
import { ApiClient } from "./fetcher";

export const apiGetCategory = async () => {
    const response: AxiosResponse<any> = await ApiClient.get('/get-category');
    return response;
};