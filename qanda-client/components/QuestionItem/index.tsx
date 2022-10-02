export const QuestionItem = ({ questions }) => {
    return (
        <>
            <div>

                {questions?.map((question) => (
                    <>
                        <div>
                            {question.name}
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}