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