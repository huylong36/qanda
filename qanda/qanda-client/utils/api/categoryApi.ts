import { get, post } from "./fetcher";

export const apiGetCategory = async () => {
    const { data, error } = await get({
        endpoint: "/get-category",
    });
    return error ? [] : data;
}