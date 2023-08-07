import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {clearAction, listSumsAction, sumInputAction} from "../redux/actions";
import Sum from "../components/Sum";

function SumOfInputsPage() {
    const dispatch = useDispatch();
    const [value, setValue] = useState('')
    const {sumList} = useSelector(state => state.sumOfInputReducer)

    const changeValue = (e) => {
        setValue(e.target.value)
    }

    const sumInput = () => {
        dispatch(sumInputAction(value))
        dispatch(listSumsAction())
    }

    const clear = () => {
        dispatch(clearAction())
    }

    return (
        <div>
            <input onChange={changeValue} type="number"/>
            <button onClick={sumInput}>add</button>
            <button onClick={clear}>clear</button>
            <ul>
                {sumList.map((sum, idx) => <Sum key={idx} sum={sum} />)}
            </ul>
        </div>
    );
}

export default SumOfInputsPage;