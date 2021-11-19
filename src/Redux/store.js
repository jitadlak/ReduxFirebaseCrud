import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { dataReducer } from './reducer'

const rootReducer = combineReducers({
    dataReducer
})

export const store= createStore(rootReducer, applyMiddleware(thunk))