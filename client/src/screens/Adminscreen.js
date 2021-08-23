import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { enquirySeenByAdmin, getEnquiryToAdmin } from '../actions/enquiryActions';
import Loading from '../components/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoNotificationsSharp } from 'react-icons/io5';





export default function BInchargescreen() {

    const userstate = useSelector(state => state.loginUserReducer);
    const { currentUser } = userstate;

    const enquiriesstate = useSelector(state => state.getEnquiryToAdminReducer);
    const { loading , allEnquiries } = enquiriesstate;

    const dispatch = useDispatch();

    useEffect(() => {

        if (!currentUser.isAdmin) {
            window.location.href = '/'
        }
        else{
            dispatch(getEnquiryToAdmin())
        }

    }, [])

    const notify = () => 
    {
        if(allEnquiries !== null){
            allEnquiries.map(enquiry => {
                if(!enquiry.adminSeen){
                    toast.dark(`Enquiry From ${enquiry.username}`);
                }
            })
        }
        else{
            toast(`No Notifications`);
        }
        
    }

    return (
        <div>
            <h1>User's Enquiries</h1>
            
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
                                {enquiry.adminSeen ? (<h1>Seen</h1>) : (<button  className="btn" onClick={() => dispatch(enquirySeenByAdmin(enquiry._id))}>Seen</button>)}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            <button className="float-start" onClick={notify}>Notification <IoNotificationsSharp /></button>
            <ToastContainer />
        </div>
    )
}
