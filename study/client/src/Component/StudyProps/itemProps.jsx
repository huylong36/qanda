export const ItemProps = ({ data }) => {
    return (
        <div style={{ width: "30%", background: "green", color: "white", margin: "20px" }}>
            <div>{data.name}</div>
            <div>{data.age}</div>

        </div>
    )
}