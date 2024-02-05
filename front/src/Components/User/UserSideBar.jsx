import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillStar } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
const UserSideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-list ">
                <Link to="/user">
                    <div className="admin-side-text mt-1 border-bottom p-2">
                        Manage orders
                    </div>
                </Link>
                <Link to="/user/favorite">
                    <div className="admin-side-text mt-1 border-bottom p-2">
                        Favourite <AiFillStar />
                    </div>
                </Link>
                <Link to="/user/addresses">
                    <div className="admin-side-text mt-1 border-bottom p-2">
                        Personal Addresses <HiOutlineLocationMarker />
                    </div>
                </Link>
                <Link to="/user/profile">
                    <div className="admin-side-text mt-1 border-bottom p-2">
                        Profile <FaRegUserCircle />
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default UserSideBar