import * as types from '../module/TodoListActions';

const initialState = {
    input:'',
    todos:[]
}

export default function todoReducer(state= initialState, action){
    switch(action.type){
        case types.CREATE:
            return{
                ...state,
                todos:state.todos.concat({
                    id: action.id,
                    text: state.input
                }),
                input:''
            };
        case types.REMOVE:
            return{
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id),
            };

        case types.CHANGE:
            return{
                ...state,
                input: action.input
            }
        default :
            return state;
    }
}