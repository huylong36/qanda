import axios from "axios";
const axiosInstant = axios.create();
export const ApiConfig = async (url: string, payload: any) => {
    return await axiosInstant.post(`${url}`, payload)
        .then(response => response)
        .catch(error => error);
}