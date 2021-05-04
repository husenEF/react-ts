import { requests } from "./api"
import { DefaultResponse } from "../models/gResponse"
import { LoginPayload, LoginResponse, RegisterPayload } from "../models/iAuth"

export const reqLogin = (payload: LoginPayload): Promise<DefaultResponse<LoginResponse>> => requests.post("/signin", payload)

export const reqRegister = (payload: RegisterPayload): Promise<string> => requests.post("/signup", payload)
