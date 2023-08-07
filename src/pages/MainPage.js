import {useDispatch, useSelector} from "react-redux";
import {changeTitleAction, withParamsAction} from "../redux/actions";

export default function MainPage() {
    const dispatch = useDispatch();
    const {title} = useSelector(state => state.titleReducer)

    const changeTitle = () => {
        dispatch(changeTitleAction())
    }
    const withParams = () => {
        dispatch(withParamsAction("Hello geeks"))
    }


    return(
        <>
            <h1>{title}</h1>
            <button onClick={changeTitle}>change title</button>
            <button onClick={withParams}>with params</button>
        </>
    )
}