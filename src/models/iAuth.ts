
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