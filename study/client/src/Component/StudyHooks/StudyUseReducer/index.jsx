import { useReducer } from "react";
const reducer2 = (state, action) => { // state : gia tri ban dau , action: lang nghe hanh dong de tra ve 
    console.log('state', state)
    switch (action.type) {
        case 'GAN_GIA_TRI':
            return action.data
        default:
            break;
    }
}
const StudyUseReducer = () => {
    const [count, dispatch] = useReducer(reducer2, 0)
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch({
                type: 'GAN_GIA_TRI',
                data: 10
            })}>Gan gia tri</button>
        </div>
    )
}
export default StudyUseReducer;
