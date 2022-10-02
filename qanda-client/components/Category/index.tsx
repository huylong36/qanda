import { Button, Container, Skeleton } from "@mui/material"
import { useEffect, useState } from "react"
import { useAppSelector } from "../../redux/hooks"
import { categoryState } from "../../redux/reducers/category.slice"
import { getQuestionByCategoryId } from "../../utils/api/questionApi"
import { QuestionItem } from "../QuestionItem"

export const Category = () => {
    const [questions, setQuestions] = useState()
    const categories: any = useAppSelector(categoryState)

    useEffect(() => {
        getQuestionByCategoryId('63316a2375dfae99ee9e295b').then((res) => {
            setQuestions(res.data.questions)
        });
    }, [])
    const getQuestion = (categoryId) => {
        getQuestionByCategoryId(categoryId).then((res) => {
            setQuestions(res.data.questions)
        });
    }
    return (
        <>
            <Container>
                {categories?.categories?.category?.map((category, index: number) => (
                    <>
                        <Button key={index + "123"} onClick={() => getQuestion(category._id)}>{category.name}</Button>
                    </>
                ))}
                {categories.loading ? <><Skeleton />  <Skeleton />  <Skeleton /> </> : <QuestionItem questions={questions} />}

            </Container>
        </>
    )
}