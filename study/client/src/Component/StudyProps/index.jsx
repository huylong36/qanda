import { ItemProps } from "./itemProps";

const StudyProps = () => {
    const data = [
        {
            name: "long",
            age: "22",
        },
        {
            name: "huy",
            age: "22",
        }
    ]
    return (
        <div>
            {data.map((item) => (
                <>
                    <ItemProps data={item} />
                </>
            ))}
        </div>
    )
}
export default StudyProps;