import { Form, FormControl, Row } from 'react-bootstrap'
import "./SideBar.scss";
import SidebarSearchHook from '../../../hook/search/sidebar-search-hook';
import { useEffect, useRef } from 'react';
import { useState } from 'react';

const SideBar = () => {
    const [category, brand, selectCategory, selectBrand, priceFrom, priceTo] = SidebarSearchHook();
    const [allChecked, setAllChecked] = useState(false);
    const [itemChecked, setItemChecked] = useState(true);


    let fromPrice = sessionStorage.getItem("priceFrom");
    let toPrice = sessionStorage.getItem("priceTo");


    const handleClickAll = (e) => {
        setAllChecked(!allChecked)
        setItemChecked(!itemChecked)
        selectCategory(e);
    }
    return (
        <div className="mt-3">
            <Row>
                <div className="d-flex flex-column mt-2">
                    <div className="filter-title">Type</div>
                    <div  className='checkbox'  onClick={handleClickAll}>
                        <input type="checkbox" id="default-checkbox" name="All" />
                        <label htmlFor="default-checkbox">All</label>
                    </div>
                    {
                        category && category.data &&
                        category.data.map((cat) => {
                            return (
                                <div onClick={selectCategory} className='checkbox' key={cat._id}>
                                    <input type="checkbox" id={cat._id} name={cat.name} disabled={allChecked} />
                                    <label htmlFor={cat._id}>{cat.name}</label>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="d-flex flex-column mt-2">
                    <div className="filter-title mt-3">The brand</div>
                    {
                        brand && brand.data &&
                        brand.data.map((brand) => {
                            return (
                                <div className="form-check form-switch" onClick={selectBrand} key={brand._id}>
                                    <input className="form-check-input" type="checkbox" role="switch" id={brand._id} />
                                    <label className="form-check-label" htmlFor={brand._id}>{brand.name}</label>
                                </div>

                            )
                        })
                    }
                </div>

                <div className="filter-title my-3">Price</div>
                <div className="d-flex filter-item flex-column">
                    <FormControl type="number" step={10} className='my-2' placeholder='From' onChange={priceFrom} value={fromPrice} />
                </div>
                <div className="d-flex filter-item flex-column">
                    <FormControl type="number" step={10} className='my-2' placeholder='To' onChange={priceTo} value={toPrice} />
                </div>
            </Row>
        </div>
    )
}

export default SideBar