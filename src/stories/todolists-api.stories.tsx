import React, {useEffect, useState} from 'react'
import {todoListAPI} from "../api/todolist-api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const promise = todoListAPI.getTodolist()
        promise.then((response) => {
            setState(response.data)
        })
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'NEW TODO'
        const promise = todoListAPI.createTodolist(title)

        promise.then((response) => {
            setState(response.data.data.item)
        })
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoListId = '5c08fdb0-d00d-4f3b-976c-f7ba20203a03'
        const promise = todoListAPI.deleteTodoList(todoListId)
        promise.then((response) => {
            setState(response.data)
        })
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoListId = '5c08fdb0-d00d-4f3b-976c-f7ba20203a03'
        const title = 'VUE !>>>>'
        const promise = todoListAPI.updateTodoList(todoListId, title)

        promise.then((response) => {
            setState(response.data)
        })
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
    }, [])

    return <div> {JSON.stringify(state)}</div>
}



