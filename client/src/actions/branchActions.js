import axios from 'axios';
export const getBranchesByPincode = (pincode) => async dispatch => {

    dispatch({type: 'GET_BRANCHES_BY_PINCODE_REQUEST'})
    // console.log(typeof(parsestring(pincode)));

    try {
        const response = await axios.post("/api/branches/getBranchesByPincode" ,{pincode});
        console.log(response.data);
        dispatch({type: 'GET_BRANCHES_BY_PINCODE_SUCCESS', payload: response.data});
    } catch (error) {
        dispatch({type: 'GET_BRANCHES_BY_PINCODE_FAILED',payload:error})
    }
}

// export const loginUser = (user) => async (dispatch,getdata) => {

//     dispatch({type: 'USER_LOGIN_REQUEST'})

//     try {
//         const response = await axios.post('/api/users/login',user);
//         console.log(response);
//         dispatch({type: 'USER_LOGIN_SUCCESS',payload:response.data});

//         const currentUser = getdata().loginUserReducer.currentUser;
//         localStorage.setItem('currentUser',JSON.stringify(currentUser));
//         window.location.href='/';

//     } catch (error) {
//         dispatch({type : 'USER_LOGIN_FAILED',payload:error});
//     }
// }

// export const logoutUser = () => dispatch =>{
//     localStorage.removeItem('currentUser');
//     window.location.href='/login'
// }

// export const getAllUsers = () =>async dispatch => {

//     dispatch({type : 'GET_USERS_REQUEST'});

//     try {
//         const response =await axios.get('/api/users/getallusers')
//         console.log(response);
//         dispatch({type : 'GET_USERS_SUCCESS',payload: response.data}) ;
//     } catch (error) {
//         dispatch({type : 'GET_USERS_FAILED' ,payload: error});
//     }

// }

// export const deleteUser = (userid) => async dispatch => {
//     try {
//         await axios.post('/api/users/deleteuser',userid)
//         alert(`User Deleted Successfully`)
//         window.location.reload();
//     } catch (error) {
//         alert(`something went wrong`)
//     }
// }
