import * as types from '../module/CalcActions';

const initialState = {
    diff : 0,
    result : 0
}

export default function calcReducer(state= initialState, action){
    switch(action.type){
        case types.ADD:
            return{
                ...state,
                result: parseInt(state.result)+parseInt(state.diff)
            }
        
        case types.SUB:
            return{
                ...state,
                result: state.result-state.diff
            }
        case types.SET_DIFF:
            return{
                ...state,
                diff: action.diff
            }
        default :
            return state;
    }
}