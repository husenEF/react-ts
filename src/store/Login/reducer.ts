import { iAction } from "../../models/iAction"
import { ILogin } from "../../models/iAuth"


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