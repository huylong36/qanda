import { Button, Container } from "@mui/material"
import { useRouter } from "next/router"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { questionState } from "../../redux/reducers/question.slice"
import { apiGetCategory } from "../../utils/api/categoryApi"
import { getQuestionByCategoryId } from "../../utils/api/questionApi"
import NextLink from "../NextLink"
import { QuestionItem } from "../QuestionItem"

export const Category = () => {
    const router = useRouter()
    const [questions, setQuestions] = useState()
    // const categories = useSelector(state => state.categories.categories)
    // const dispatch = useDispatch();
    // const getQuestion = (categoryId) => {
    //     getQuestionByCategoryId(categoryId).then((res) => {
    //         setQuestions(res.data.questions)
    //     });
    // }
    console.log('questions', questions)
    return (
        <>
            <Container>
                {/* {categories.map((category, index: number) => (
                    <>
                        <Button key={index + "123"} onClick={() => getQuestion(category._id)}>{category.name}</Button>
                    </>
                ))} */}
                <QuestionItem questions={questions} />
            </Container>
        </>
    )
}