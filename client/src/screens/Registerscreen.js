import React, { useState, useEffect } from 'react';
import {useDispatch ,useSelector} from 'react-redux';
import {registerUser} from '../actions/userActions';
import Loading from '../components/Loading';
import Success from '../components/Success';
import Error from '../components/Error';

export default function Registerscreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const registerstate = useSelector(state => state.registerUserReducer);
    const {loading , success ,error} = registerstate;
    const dispatch = useDispatch();
    function register(){
        if(password !== cpassword){
            alert( `Passwords Not Matched`)
        }
        else{
            const user ={
                username,
                password
            }
            console.log("User : ",user);
            dispatch(registerUser(user));
        }
    }

    return (
        <div className="register">
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded">

                    {loading && <Loading />}
                    { success && <Success success="User Registered Successfully"/> } 
                    {error && <Error error='Email Already Registered'/>} 
                    <h2 className="text-center" style={{ fontSize: '35px' }}>REGISTER</h2>
                    <div>
                        <input required type="text" placeholder="username" className="form-control" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
                        {/* <input required type="email" placeholder="email" className="form-control" value={email} onChange={(e) => {setEmail(e.target.value)}}/> */}
                        <input required type="password" placeholder="password" className="form-control" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                        <input required type="password" placeholder="confirm password" className="form-control" value={cpassword} onChange={(e) => {setCpassword(e.target.value)}}/>
                        <button onClick={register } className="btn mt-3 mb-3">REGISTER</button>
                        <br/>
                        <a style={{color:'black',textDecoration:'none'}} href="/login">Click Here To Login</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
