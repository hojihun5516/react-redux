export const CREATE = "CREATE_TODOLIST";
export const REMOVE="REMOVE_TODOLIST";
export const CHANGE="CHANGE_TODOLIST";

var index=0;

export function create() {
    return {
        type: CREATE,
        id: index++
    }
}

export function remove(id){
    return {
        type: REMOVE,
        id: id
    }
}

export function change(e){
    return{
        type: CHANGE,
        input: e.target.value
    }
}
