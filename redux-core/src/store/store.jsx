import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk' // Được sử dụng khi gọi hàm bất đồng bộ
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {}

const middleware = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store