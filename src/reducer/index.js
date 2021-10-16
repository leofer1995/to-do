
const initialState = {
    todos:[],
    todoAdd:[],
    modal:{
        render:false,
        type:'',
    },
    edit:'',
    render:[],
    pages:1,
    page:1,
}

const rootReducer = (state = initialState, action) => {

    if(action.type === 'RENDER_MODAL'){
        
        return {
            ...state,
            modal:{
                render:!state.modal.render,
                type:action.payload,
                edit:'',
            }
        }
    }

    if(action.type === 'ADD_TODO_RANDOM'){
        return {
            ...state,
            todoAdd:[...state.todoAdd, ...action.payload],
        }
    }

    if(action.type === 'DELETE'){
        const todosAdd = state.todoAdd.filter(todo=> todo.fact !== action.payload)
        return {
            ...state,
            todoAdd: todosAdd,
        }
    }

    if(action.type === 'ADD_TODO'){
        return {
            ...state,
            todoAdd:[...state.todoAdd, {fact:action.payload, done: false}],
        }
    }

    if(action.type === 'AGG_TODOS'){
        return {
            ...state,
            todos:[...state.todos,...state.todoAdd],
            todoAdd:[],
            modal:{
                render:!state.modal.render,
                type:action.payload,
            },
            render:[...state.todos,...state.todoAdd],
        }
    }

    if(action.type === 'CHECK_TODO'){
        const check = state.todos.map(todo=>{
            if(todo.fact === action.payload){
                todo.done = !todo.done
            }
            return todo;
        });
        return {
            ...state,
            todos:check,
            render:check,
        }
    }

    if(action.type ==='DELETE_TODO'){
        const filt = state.todos.filter(todo => todo.fact !== action.payload)
        return {
            ...state,
            todos: filt,
            render: filt,
        }
    }

    if(action.type === 'MODAL_EDIT'){
        return {
            ...state,
            edit:action.payload.name,
            modal:{
                render:!state.modal.render,
                type:action.payload.renderType,
            }
        }
    }

    if(action.type === 'EDIT_TODO'){
        const edit = state.todos.map(todo => {
            if(todo.fact === state.edit){
                todo.fact = action.payload
            }
            return todo
        });
        return {
            ...state,
            todos:edit,
            edit:'',
            modal:{
                ...state.modal,
                render:!state.modal.render,
            },
            render: edit
        }
    }

    if(action.type === 'SEARCH'){
        const render = state.todos.filter(todo => 
            todo.fact.toLowerCase().includes(action.payload.toLowerCase())
        );

        return {
            ...state,
            render:render,
        }
    }



    return state
}

export default rootReducer;