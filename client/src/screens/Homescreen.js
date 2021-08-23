import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newEnquiry } from '../actions/enquiryActions';



export default function Homescreen() {

    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [pincode, setPincode] = useState('');


    const dispatch = useDispatch();


    const userstate = useSelector(state => state.loginUserReducer);
    const { currentUser } = userstate;

    function specBranches (){

        if(currentUser === null) {
            alert(`You have to login first`)
            window.location.href = '/login';
        }
        else{
            const enquiry = {
                email,
                phone,
                address,
                pincode,
                currentUser
            }
            console.log(enquiry);
            dispatch(newEnquiry(enquiry));

        }


    }

    return (
        <div class="home">
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded">




                    <h2 className="text-center" style={{ fontSize: '35px' }}>Contact Details</h2>
                    <div>
                        <input required type="text" placeholder="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <input required type="text" placeholder="address" className="form-control" value={address} onChange={(e) => { setAddress(e.target.value) }} />
                        <input required type="text" placeholder="phone" className="form-control" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                        <input required type="text" placeholder="pincode" className="form-control" value={pincode} onChange={(e) => { setPincode(e.target.value) }} />

                        <button className="btn mt-3 mb-3" onClick ={specBranches} >Bettle Nuts</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
