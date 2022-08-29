import { useState } from "react";

const StudyState = () => {
    const [count, setCount] = useState(0) // state
    const styleDiv = {
        background: 'yellow',
        width: "300px",
        height: "300px",
        margin: "30px auto",
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
    }
    return (
        <>
            <div style={styleDiv}>
                <button onClick={() => setCount(count - 1)}>-</button>
                <span style={{ margin: "0 20px" }}>{count}</span>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
        </>
    )
}
export default StudyState;