import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { getAllPizzasReducer, addPizzaReducer, getPizzaByIdReducer, editPizzaReducer } from './reducers/pizzaReducers';
// import { cartReducer } from './reducers/cartReducer';
import { registerUserReducer , loginUserReducer} from './reducers/userReducer';
import { getEnquiriesByPincodeReducer, getEnquiryToAdminReducer, newEnquiryReducer } from './reducers/enquiryReducer';
import { getBranchesByPincodeReducer } from './reducers/branchReducer';


// import { placeOrderReducer, getUserOrdersReducer , getAllOrdersReducer} from './reducers/orderReducer';


const finalReducer = combineReducers({
    // getAllPizzasReducer: getAllPizzasReducer,
    // cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    newEnquiryReducer: newEnquiryReducer,
    getBranchesByPincodeReducer: getBranchesByPincodeReducer,
    getEnquiriesByPincodeReducer : getEnquiriesByPincodeReducer,
    getEnquiryToAdminReducer : getEnquiryToAdminReducer
    // placeOrderReducer: placeOrderReducer,
    // getUserOrdersReducer: getUserOrdersReducer,
    // addPizzaReducer: addPizzaReducer,
    // getPizzaByIdReducer: getPizzaByIdReducer,
    // editPizzaReducer: editPizzaReducer,
    // getAllOrdersReducer : getAllOrdersReducer,
    // getAllUsersReducer : getAllUsersReducer

});

// const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
const currentEnquiry = localStorage.getItem('currentEnquiry') ? JSON.parse(localStorage.getItem('currentEnquiry')) : null;


const initialState = {
    // cartReducer: {
    //     cartItems: cartItems
    // },
    loginUserReducer: {
        currentUser: currentUser
    }
    ,
    newEnquiryReducer:{
        currentEnquiry : currentEnquiry
    }
};
const composeEnhancers = composeWithDevTools({});

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;