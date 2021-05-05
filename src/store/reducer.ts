import { RESET, SET_DATA_LOGIN, SET_LOGIN } from "./const"

type State = {
    readonly counter: number
}
const initialState: State = {
    counter: 0
}

interface iAction {
    type: string,
    value?: any
}

export const counterReducer = (state: State = initialState, action: iAction) => {
    switch (action.type) {
        // case RESET:

        //     break;
        case "INC":
            return { ...state, counter: state.counter + 1 }
        default:
            return state;

    }
}