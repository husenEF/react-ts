import { requests } from "./api"

import { DefaultResponse } from "../models/gResponse"
import { Contact } from "../models/iContact"

export const getAllContact = (): Promise<DefaultResponse<Contact[]>> => requests.get("/contacts")

export const saveContact = (payload: Contact): Promise<DefaultResponse<Contact>> => requests.post("/contacts", payload)

export const updateById = (payload: Contact, id: number): Promise<DefaultResponse<Contact>> => requests.put(`/contacts/${id}`, payload)

export const getById = (id: number): Promise<DefaultResponse<Contact>> => requests.get(`/contacts/${id}`)