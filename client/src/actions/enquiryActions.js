import axios from 'axios';

export const newEnquiry = (enquiry) => async(dispatch,getdata) => {


    dispatch({type : 'NEW_ENQUIRY_REQUEST'});

    try {
        const response = await axios.post('/api/enquiries/newenquiry',enquiry);
        dispatch({type : 'NEW_ENQUIRY_SUCCESS',payload:response.data});

        const currentEnquiry = getdata().newEnquiryReducer.currentEnquiry;
        localStorage.setItem('currentEnquiry',JSON.stringify(currentEnquiry));
        window.location.href='/branches';
        console.log(response);

    } catch (error) {
        dispatch({type : 'NEW_ENQUIRY_FAILED',payload:error});
        console.log(error);
    }
}

// export const getUserOrders = () =>async (dispatch,getState) => {
//     const currentUser = getState().loginUserReducer.currentUser
//     dispatch({type : 'GET_USER_ORDERS_REQUEST'});

    
//     try {
//         const response =await axios.post('/api/orders/getuserorders', {userid : currentUser._id})
//         console.log(response);
//         dispatch({type : 'GET_USER_ORDERS_SUCCESS',payload: response.data}) ;
//     } catch (error) {
//         dispatch({type : 'GET_USER_ORDERS_FAILED' ,payload: error});
//     }


// }

// export const getAllOrders = () =>async (dispatch,getState) => {
//     dispatch({type : 'GET_ALL_ORDERS_REQUEST'});

    
//     try {
//         const response =await axios.get('/api/orders/getallorders')
//         console.log(response);
//         dispatch({type : 'GET_ALL_ORDERS_SUCCESS',payload: response.data}) ;
//     } catch (error) {
//         dispatch({type : 'GET_ALL_ORDERS_FAILED' ,payload: error});
//     }

// }

// export const deliverOrder = (orderid) => async dispatch => {

//     try {
//         const response = await axios.post('/api/orders/deliverorder', {orderid})
//         console.log(response);
//         alert(`Order Delivered`)
//         const orders =await axios.get('/api/orders/getallorders')
//         dispatch({type : 'GET_ALL_ORDERS_SUCCESS',payload: orders.data}) ;
//     } catch (error) {
//         console.log(error)
//     }
// }