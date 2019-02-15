import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {combineReducers}  from "redux-immutable";
// 合并
const reducers = combineReducers({

})
                                    //异步action
const store  = createStore(reducers,applyMiddleware(thunk));

export default store;