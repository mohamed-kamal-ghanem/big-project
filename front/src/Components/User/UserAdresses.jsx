import React from 'react'
import UserAddressCard from './UserAddressCard'
import { useNavigate } from 'react-router-dom'
import GetAddressHook from '../../hook/address/get-address-hook';
import { Spinner } from 'react-bootstrap';
const UserAdresses = () => {
    const navigate = useNavigate();
    const [address, onDeleteAddress] = GetAddressHook();
    return (
        <div>
            <h2>Personal Addresses</h2>
            {
                 address ? address.data ? (
                    address.data.map((add) => {
                        return (
                            <UserAddressCard key={add._id} add={add} />
                        )

                    })
                ) : <Spinner animation="border" variant="primary" /> : <h3>You Have No Address</h3>
            }
            <button className="btn-add-address w-50 m-auto" onClick={() => navigate("/user/add-address")}>Add New Address</button>
        </div>
    )
}

export default UserAdresses