import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import pizzas from '../pizzasdata';


export default function Homescreen() {

    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [pincode, setPincode] = useState('');


    // const dispatch = useDispatch();
    // const pizzasstate = useSelector(state => state.getAllPizzasReducer);
    // const { pizzas, loading, error } = pizzasstate;
    // useEffect(() => {
    //     dispatch(getAllPizzas())
    // }, [])

    return (
        <div class="home">
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded">




                    <h2 className="text-center" style={{ fontSize: '35px' }}>Contact Details</h2>
                    {/* {loading && <Loading />}
                    {success && <Success success="User Login Successfully" />}
                    {error && <Error error='Invalid Credientals' />} */}
                    <div>
                        <input required type="text" placeholder="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <input required type="text" placeholder="address" className="form-control" value={address} onChange={(e) => { setAddress(e.target.value) }} />
                        <input required type="text" placeholder="phone" className="form-control" value={address} onChange={(e) => { setPhone(e.target.value) }} />
                        <input required type="text" placeholder="pincode" className="form-control" value={address} onChange={(e) => { setPincode(e.target.value) }} />

                        <button className="btn mt-3 mb-3" >Bettle Nuts</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
