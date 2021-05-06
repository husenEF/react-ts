
export interface LoginPayload {
    email: string,
    password: string
}

export interface LoginResponse {
    id: number,
    name: string,
    password: string,
    email: string,
    token: string,
    createdAt: string,
    updatedAt: string
}

export interface RegisterPayload extends LoginPayload {
    name: string
}

export interface IForm {
    email: string,
    password: string
}

export interface ILogin {
    isLogin: boolean,
    loading: boolean,
    form: IForm,
    error?: string
}
