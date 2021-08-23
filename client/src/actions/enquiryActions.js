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

export const getEnquiriesByPincode = (pincode) =>async (dispatch) => {

    dispatch({type : 'GET_ENQUIRIES_BY_PINCODE_REQUEST'});
    
    try {
        const response =await axios.post('/api/enquiries/getenquirybypin', {pincode})
        console.log(response);
        dispatch({type : 'GET_ENQUIRIES_BY_PINCODE_SUCCESS',payload: response.data}) ;
    } catch (error) {
        dispatch({type : 'GET_ENQUIRIES_BY_PINCODE_FAILED' ,payload: error});
    }


}


export const enquirySeenByIncharge = (enquiryid) => async (dispatch,getdata) => {

    try {
        const response = await axios.post('/api/enquiries/seenEnquiry', {enquiryid})
        console.log(response);

        const pincode = getdata().loginUserReducer.currentUser.pincode;
        console.log(pincode);
        const enquiries =await axios.post('/api/enquiries/getenquirybypin', {pincode})
        console.log(enquiries);
        dispatch({type : 'GET_ENQUIRIES_BY_PINCODE_SUCCESS',payload: enquiries.data}) ;
    
    } catch (error) {
        console.log(error)
    }
}

export const getEnquiryToAdmin = () => async (dispatch) => {

    dispatch({type : 'GET_ENQUIRIES_TO_ADMIN_REQUEST'});

    try {
        const response =await axios.get('/api/enquiries/getAllEnquiry')
        console.log(response);
        dispatch({type : 'GET_ENQUIRIES_TO_ADMIN_SUCCESS',payload: response.data}) ;
    } catch (error) {
        dispatch({type : 'GET_ENQUIRIES_TO_ADMIN_FAILED' ,payload: error});
    }

}