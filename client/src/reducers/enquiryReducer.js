export const newEnquiryReducer = (state ={},action) => {

    switch (action.type){
        case 'NEW_ENQUIRY_REQUEST' :return {
            loading:true
        }
        case 'NEW_ENQUIRY_SUCCESS' :return {
            loading:false,
            success:true,
            currentEnquiry : action.payload

        }
        case 'NEW_ENQUIRY_FAILED' :return {
            loading:false,
            error : action.payload
        }
        default:
            return state

    }
}

export const getEnquiriesByPincodeReducer = (state ={},action) => {

    switch (action.type){
        case 'GET_ENQUIRIES_BY_PINCODE_REQUEST' :return {
            loading:true
        }
        case 'GET_ENQUIRIES_BY_PINCODE_SUCCESS' :return {
            loading:false,
            success:true,
            userenquiries : action.payload

        }
        case 'GET_ENQUIRIES_BY_PINCODE_FAILED' :return {
            loading:false,
            error : action.payload
        }
        default:
            return state

    }
}

export const getEnquiryToAdminReducer = (state ={},action) => {

    switch (action.type){
        case 'GET_ENQUIRIES_TO_ADMIN_REQUEST' :return {
            loading:true
        }
        case 'GET_ENQUIRIES_TO_ADMIN_SUCCESS' :return {
            loading:false,
            success:true,
            allEnquiries : action.payload

        }
        case 'GET_ENQUIRIES_TO_ADMIN_FAILED' :return {
            loading:false,
            error : action.payload
        }
        default:
            return state

    }
}