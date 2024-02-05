import React from 'react'
import { MdOutlineDoNotDisturb } from "react-icons/md";
const NotAvailable = () => {
    return (
        <div className='w-100 h-100 d-flex justify-content-center flex-column align-items-center'>
            <MdOutlineDoNotDisturb style={{fontSize:"100px"}} />
            <div style={{fontSize:"70px"}}>Ooooops,</div>
            <p>No Product Available</p>
        </div>
    )
}

export default NotAvailable
