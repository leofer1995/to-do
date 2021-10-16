import axios from 'axios'

export const renderModal = (renderType) => {

    return {
        type: 'RENDER_MODAL',
        payload: renderType,
    }
}

export const addRandom = (numberTodos) => {
    return async function (dispatch) {
        const todosAdd = [];
        for (let i = 0; i < numberTodos; i++){
            const response = await axios('https://catfact.ninja/fact?max_length=140');
            todosAdd.push({
                fact:response.data.fact,
                done: false,
            });
        }
        console.log(todosAdd,'oeeeeeeeeeeeee')
        dispatch({
            type:'ADD_TODO_RANDOM',
            payload:todosAdd
        });
    }
}

export const addTodo = (input) => {
    return {
        type:'ADD_TODO',
        payload:input,
    }
}

export const onDelete = (name) => {
    return {
        type: 'DELETE',
        payload: name,
    }
} 

export const addListTodo = () => {
    return {
        type:'AGG_TODOS',
    }
}

export const todoComplete = (name) => {
    return {
        type:'CHECK_TODO',
        payload:name,
    }
}

export const deleteTodo = (name) => {
    return {
        type: 'DELETE_TODO',
        payload: name,
    }
}

export const renderModalEdit = (renderType, name) => {
    return {
        type: 'MODAL_EDIT',
        payload:{renderType, name}
    }
}

export const editTodo = (textEdit) => {
    return {
        type: 'EDIT_TODO',
        payload: textEdit,
    }
} 

export const search = (text) => {
    return {
        type: 'SEARCH',
        payload: text,
    }
}