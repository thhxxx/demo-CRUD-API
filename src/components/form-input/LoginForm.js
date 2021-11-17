import {useState} from "react";
import {useDispatch} from "react-redux";
import {login} from "../../reducers/LoginReducer";

export const LoginForm = () => {
    const [account, setAccount] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    return (
        <div className="login">
            <input
                type="text"
                placeholder="Account"
                value={account}
                onChange={event => setAccount(event.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={event => setPassword(event.target.value)}
            />
            <button
                onClick={() => dispatch(login({account, password}))}
            >Login
            </button>
        </div>
    )
}