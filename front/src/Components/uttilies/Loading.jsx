import React from 'react'
import { Spinner } from 'react-bootstrap'
import { MdOutlineDoNotDisturb } from "react-icons/md";

const Loading = () => {
  return (
    <div className='d-flex justify-content-center' style={{fontSize:"80px"}}>
      <MdOutlineDoNotDisturb />
    </div>
  )
}

export default Loading
