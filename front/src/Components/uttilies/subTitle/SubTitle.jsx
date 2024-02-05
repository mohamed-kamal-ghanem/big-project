import React from 'react'
import "./SubTitle.css";
import { Link } from 'react-router-dom'

const SubTitle = ({ title, btntitle, pathText }) => {
    return (
        <div className="d-flex justify-content-between  align-items-center pt-4">
            <div className="sub-title fw-bold cart-title">{title}</div>
            {btntitle ? (
                <Link to={`${pathText}`} style={{ textDecoration: 'none' }}>
                    <button>
                        {btntitle}
                        <div className="arrow-wrapper">
                            <div className="arrow"></div>
                        </div>
                    </button>
                </Link>
            ) : null}
        </div>
    )
}

export default SubTitle