import axios from "axios";

const settings = {
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'e7156d4e-c0dd-4e6f-9677-cba03b85d7b2'
    }
}

const instance = axios.create({
    ...settings
})

type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}

type BaseResponseType<D = {}> = {
    data: D
    fieldsErrors: Array<string>
    messages: Array<string>
    resultCode: number

}
/*
type ResponseCreateType = {
    fieldsErrors: Array<string>
    resultCode: number
    messages: Array<string>
    data: {
        item: TodolistType
    }
}

type ResponseUpdateDeleteType = {
    data: {}
    fieldsErrors: Array<string>
    messages: Array<string>
    resultCode: number
}*/


export const todoListAPI = {

    updateTodoList(todoListId: string, title: string) {
        return instance.put<BaseResponseType>(
            `todo-lists/${todoListId}`, {title})
    },

    createTodolist(title: string) {
        return instance.post<BaseResponseType<{item: TodolistType}>>(
            `1.1/todo-lists`, {title})
    },

    deleteTodoList(todoListId: string) {
        return instance.delete<BaseResponseType>(
            `todo-lists/${todoListId}`)
    },

    getTodolist() {
        return instance.get<Array<TodolistType>>(
            `1.1/todo-lists`)
    }
}

