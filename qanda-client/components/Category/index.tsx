import { useRouter } from "next/router"
import { apiGetCategory } from "../../utils/api/categoryApi"
import NextLink from "../NextLink"

export const Category = () => {
    const router = useRouter()
    apiGetCategory().then((res) => {
        console.log('res', res)
    })
    return (
        <>
            <NextLink href="/subject/math">Toán</NextLink>
            <NextLink href="/subject/12">Văn</NextLink>
            <NextLink href="/subject/123">Anh</NextLink>
        </>
    )
}