import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { enquirySeenByIncharge, getEnquiriesByPincode } from '../actions/enquiryActions';
import Loading from '../components/Loading';


export default function BInchargescreen() {

    const userstate = useSelector(state => state.loginUserReducer);
    const { currentUser } = userstate;

    const enquiriesstate = useSelector(state => state.getEnquiriesByPincodeReducer);
    const { loading , userenquiries } = enquiriesstate;

    const dispatch = useDispatch();

    useEffect(() => {

        if (!currentUser.isBranchIncharge) {
            window.location.href = '/'
        }
        else{
            dispatch(getEnquiriesByPincode(currentUser.pincode))
        }

    }, [])

    

    return (
        <div>
            <h1>Orders List</h1>
            {loading && (<Loading />)}

            <table className="table table-striped table-bordered table-responsive-sm">
                <thead className="table-dark">
                    <tr>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Phone No.</th>
                        <th>Address</th>
                        <th>Pincode</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {userenquiries && userenquiries.map(enquiry => {
                        return <tr>
                            <td>{enquiry.username}</td>
                            <td>{enquiry.email}</td>
                            <td>{enquiry.phone}</td>
                            <td>{enquiry.address}</td>
                            <td>{enquiry.pincode}</td>
                            <td>{enquiry.createdAt.substring(0, 10)}</td>
                            <td>
                                {enquiry.bInchargeSeen ? (<h1>Seen</h1>) : (<button  className="btn" onClick={() => dispatch(enquirySeenByIncharge(enquiry._id))}>Seen</button>)}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
