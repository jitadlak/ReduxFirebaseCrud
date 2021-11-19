import { FETCH_DATA, GET_DATA, DELETE_DATA } from "./actionType";

const initialState={
    data:""
}

export const dataReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_DATA:
            return{...state, data: action.payload}
            case FETCH_DATA:
                return {...state, data: action.payload}
            default:
                return state
    }
}