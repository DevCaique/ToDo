import { useState, useReducer } from 'react'
import { Todo } from '../Todo'

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo',
    CLEAR_TODOS: 'clear-todos'
}


function reducer(todos, action) {

    switch (action.type) {
        case ACTIONS.ADD_TODO:
            if (todos.id === null) return { ...todos }

            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
        case ACTIONS.CLEAR_TODOS:
            return todos.filter(todo)
        default:
            return todos
    }

}

function newTodo(name) {

    return { id: Date.now(), name: name, complete: false }

}


export function Todos({ todo }) {

    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')

    function handleSubmit(e) {

        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
        setName('')

    }


    return (

        <div className="todos">

            <form className="todos-form" onSubmit={handleSubmit}>
                <input className="todos-input" type="text" value={name} onChange={e => setName(e.target.value)} />
                <button className="todos-submit not-selectable" type="submit"> + </button>
            </form>

            <div className="todo-item-container">
                {todos.map(todo => {
                    return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
                })}
            </div>

        </div>

    )

}   