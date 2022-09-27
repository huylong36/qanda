import { ApiConfig } from "./config"

export const apiUploadFile = async (file: any) => {
    return ApiConfig('/upload', file)
}