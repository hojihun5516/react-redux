export const ADD = "ADD_CALCULATOR";
export const SUB="SUB_CALCULATOR";
export const SET_DIFF="DIFF_CALCULATOR";

export function add() {
    return {
        type: ADD
    }
}

function addin() {
    return {
        type: ADD
    }
}


export function sub(){
    return{
        type: SUB
    }
}

export function setDiff(e){
    return{
        type:SET_DIFF,
        diff : e.target.value
    }
}

export function thunkAdd(){
    return function (dispatch) {
        return addin.then(
            console.log('finish')
)    }
}