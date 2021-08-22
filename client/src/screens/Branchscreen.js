import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBranchesByPincode } from '../actions/branchActions';
import Error from '../components/Error';
import Loading from '../components/Loading';
// import Success from '../components/Success';



export default function Branchscreen() {

    const enquirystate = useSelector(state => state.newEnquiryReducer);
    const { currentEnquiry } = enquirystate;
    console.log(currentEnquiry);

    const branchesstate = useSelector(state => state.getBranchesByPincodeReducer)
    const {currentBranches , error , loading} = branchesstate;

    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getBranchesByPincode(currentEnquiry.pincode))

    }, [])
    return (
        <div>
            <h1>Bettle Nut's Branches</h1>
            {loading && (<Loading />)}
            {error && (<Error error="Something went wrong" />)}

            <table className="table table-bordered table-responsive-sm">
                <thead className="thead" style={{ backgroundColor: 'lightgrey' }}>
                    <tr>
                        <th>Institution Name</th>
                        <th>City</th>
                        <th>Contact Number</th>
                        <th>Branch Incharge</th>
                        <th>Address</th>
                        <th>Branch Name</th>
                        <th>Pincode</th>

                    </tr>
                </thead>
                <tbody>
                    {currentBranches && currentBranches.map(branch => {
                        return <tr>
                            <td>{branch.insitutionName}</td>
                            <td>{branch.city}</td>
                            <td>{branch.contactNumber.map(pin =>{ return  <p>{pin}</p>})}</td>
                            <td>{branch.branchIncharge}</td>
                            <td>{branch.address}</td>
                            <td>{branch.branchName}</td>
                            <td>{branch.pincodeCovered.map(pin =>{ return  <p>{pin}</p>})}</td>
                        </tr>
                    })}
                </tbody>


            </table>
        </div> 
    )
}
