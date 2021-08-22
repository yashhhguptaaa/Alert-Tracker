export const getBranchesByPincodeReducer = (state ={},action) => {

    switch (action.type){
        case 'GET_BRANCHES_BY_PINCODE_REQUEST' :return {
            loading:true
        }
        case 'GET_BRANCHES_BY_PINCODE_SUCCESS' :return {
            loading:false,
            success:true,
            currentBranches : action.payload

        }
        case 'GET_BRANCHES_BY_PINCODE_FAILED' :return {
            loading:false,
            error : action.payload
        }
        default:
            return state

    }
}