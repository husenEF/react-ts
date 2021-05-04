import Axios, { AxiosResponse } from "axios"

const instance = Axios.create({
    baseURL: 'https://phone-book-api.herokuapp.com/api/v1',
    timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data.data;

export const requests = {
    get: (url: string) => instance.get(url).then(responseBody),
    post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
    put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
    delete: (url: string) => instance.delete(url).then(responseBody),
};
