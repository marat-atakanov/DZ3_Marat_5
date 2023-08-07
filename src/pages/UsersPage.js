import {useDispatch, useSelector} from "react-redux";
import {changeInputAction, addUserAction, deleteAllAction} from "../redux/actions";
import User from "../components/User";

export default function UsersPage () {
    const dispatch = useDispatch();
    const {value, users} = useSelector(state => state.usersReducer)

    const changeInput = (e) => {
        dispatch(changeInputAction(e.target.value))
    }

    const addUser = () => {
        dispatch(addUserAction(value))
    }

    const deleteAll = () => {
        dispatch(deleteAllAction());
    }


    return (
        <>
            <h1>{value}</h1>
            <input type="text" onChange={changeInput} value={value}/>
            <button onClick={addUser}>add</button>
            <button onClick={deleteAll}>delete all</button>
            <ul>
                {users.map((user, idx) => <User key={idx} user={user}/>)}
            </ul>
        </>
    )
}