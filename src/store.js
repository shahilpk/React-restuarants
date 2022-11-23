import { createStore,combineReducers,applyMiddleware } from 'redux'
import{restaurantListReducer} from '../src/Reducer/restuarantReducer'
import thunk from 'redux-thunk';

const reducers=combineReducers({
restuarantReducer:restaurantListReducer
})

const middleware =[thunk]

//creating  store -used to access all component in the entire application
const store =createStore(reducers,applyMiddleware(...middleware))


export default store