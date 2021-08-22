import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Loading from '../components/Loading';


export default function BInchargescreen() {

    const userstate = useSelector(state => state.loginUserReducer);
    const { currentUser } = userstate;

    const enquiriesstate = useSelector(state => state.getEnquiryToAdminReducer);
    const { loading , allEnquiries } = enquiriesstate;

    const dispatch = useDispatch();

    useEffect(() => {

        if (!currentUser.adminSeen) {
            window.location.href = '/'
        }
        else{
            dispatch()
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
                    {allEnquiries && allEnquiries.map(enquiry => {
                        return <tr>
                            <td>{enquiry.username}</td>
                            <td>{enquiry.email}</td>
                            <td>{enquiry.phone}</td>
                            <td>{enquiry.address}</td>
                            <td>{enquiry.pincode}</td>
                            <td>{enquiry.createdAt.substring(0, 10)}</td>
                            <td>
                                {enquiry.adminSeen ? (<h1>Seen</h1>) : (<button  className="btn" >Seen</button>)}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
