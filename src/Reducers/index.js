import { combineReducers } from "redux";
import { TaskReducer } from './Task';
import { TasksReducer } from './Tasks';

export const reducers = combineReducers({
   task: TaskReducer,
   tasks: TasksReducer
})