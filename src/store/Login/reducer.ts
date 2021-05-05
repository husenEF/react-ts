import { iAction } from "../../models/iAction"

interface IForm {
    email: string,
    password: string
}

interface ILogin {
    isLogin: boolean,
    loading: boolean,
    form: IForm,
    error?: string
}

const initialState: ILogin = {
    isLogin: false,
    loading: false,
    form: { email: "", password: "" },
    error: ""
}

const logiReducer = (state = initialState, action: iAction): ILogin => {
    switch (action.type) {
        case action.value:
            return { ...state, isLogin: true }

        default:
            return state

    }
}

export default logiReducer