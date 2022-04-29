import {createStore,combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { NewUsers,userRigister, userSign,ActiveUsers,UserProfile } from './reducers/Userreducer';
//import { createStateSyncMiddleware, initMessageListener } from 'redux-state-sync';
import Cookie from 'js-cookie'
import { getMovie,getListOfMovies } from './reducers/Moviesreducer';
import { getLists } from './reducers/Listreducer';
// import { Action } from './actions/actioninterfaces/Actioninterfaces';
import { getSocket } from './reducers/SocketReducer';
import { Messagingreducer } from './reducers/Messagingreducer';
var userInfoSign:object;
userInfoSign={}
if (Cookie.get('userInfoSign'))
userInfoSign=JSON.parse(Cookie.get('userInfoSign')!)
 

// const config = {
//     predicate: (action:Action) =>
//     (action.type === "REQUEST_RIGISTER" ||

//      action.type === "REQUEST_SIGN"||

//      action.type==="SUCCESS_RIGISTER"||

//      action.type==="SUCCESS_SIGN"||

//      action.type==="SUCCESS_SIGNOUT"
//      )
// };
// const middlewares = [createStateSyncMiddleware(config)];
const initialstate:any={userSign:{userInfoSign},userRigister:{}} 
 const reducer=combineReducers({
    userSign:userSign,
    userRigister:userRigister,
    getMovie:getMovie,
    getLists:getLists,
    ActiveUsers:ActiveUsers,
    NewUsers:NewUsers,
    getListOfMovies:getListOfMovies,
    UserProfile:UserProfile,
    getSocket:getSocket,
    Messagingreducer:Messagingreducer

}) 
//,...middlewares
 
const store=createStore(reducer,initialstate,composeWithDevTools(applyMiddleware(thunk)));
//initMessageListener(store);

export default store
export type RootState = ReturnType<typeof reducer>; 