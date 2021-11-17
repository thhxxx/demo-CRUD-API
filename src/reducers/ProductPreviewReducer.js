import {createSlice} from "@reduxjs/toolkit";

const LoginReducer = createSlice({
    name: "LoginReducer",
    initialState: {
        tokenLogin: !!localStorage.getItem("tokenLogin")
    },
    reducers: {
        login: (state, action) => {
            const {account, password} = action.payload
            if (account === "admin" && password === "admin") {
                localStorage.setItem("tokenLogin", account)
                state.tokenLogin = true
            }
        },
        logout: (state) => {
            // eslint-disable-next-line no-restricted-globals
            if (confirm("Are you sure you want to sign out?")){
                localStorage.removeItem("tokenLogin")
                state.tokenLogin = false
            }
        },
    }
})

export const {login, logout} = LoginReducer.actions
export default LoginReducer.reducer