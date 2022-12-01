import { createStore,combineReducers,applyMiddleware } from 'redux';
import userreducer from './reducer/userreducer';
import loginreducer from './reducer/loginreducer';
import thunk from "redux-thunk";
import buildingreducer from './reducer/buildingreducer';
import roomreducer from './reducer/roomreducer';
import tanentreducer from './reducer/tanentreducer';

const configure=()=>{
 const store=createStore(combineReducers({
     userregister:userreducer,
     loginreducer:loginreducer,
     buildingDetails:buildingreducer,
     roomDetails:roomreducer,
     tanentDetails:tanentreducer
 }),applyMiddleware(thunk))
 return store
}
export default configure