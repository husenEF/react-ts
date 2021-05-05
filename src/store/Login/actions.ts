import { iAction } from "../../models/iAction";
import { SET_DATA, SET_LOGIN } from "./const";


export const setLogin = (): iAction => ({ type: SET_LOGIN })
export const setData = (k: string, v: string): iAction => ({ type: SET_DATA, value: { key: k, val: v } })