import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { logoutUser } from '../actions/userActions';

export default function Navbar() {

    // const cartstate = useSelector(state => state.cartReducer);
    const userstate = useSelector(state => state.loginUserReducer);
    const { currentUser } = userstate;
    // const dispatch = useDispatch()

    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
                <a className="navbar-brand" href="/">Bettle Nut</a>
                <div style={{display:'flex'}} class=" nav-item dropdown ms-auto">
                    {
                        currentUser != null ?
                            (<div>
                                <button style={{backgroundColor:'white',border:'none',outline:'none',marginTop:'6px'}} class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {currentUser.username}
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#" >Logout</a></li>
                                </ul>
                            </div>)
                            :
                            (<div><li style={{listStyle:'none' , fontSize:'18px',marginTop:'2px',marginLeft:'15px'}}><a className="dropdown-item" href="/login">Login</a></li></div>)
                    }
                </div>
            </nav>
        </div>
    )
}