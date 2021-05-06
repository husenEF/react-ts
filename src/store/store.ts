import { combineReducers, createStore, Reducer } from "redux";

import { counterReducer, State } from "./reducer"
import LoginReducer from "./Login/reducer"
import { ILogin } from "../models/iAuth";

const rootReducer: Reducer<{ demo: State, login: ILogin }> = combineReducers({
    demo: counterReducer,
    login: LoginReducer
})
const store = createStore(rootReducer)
export default store