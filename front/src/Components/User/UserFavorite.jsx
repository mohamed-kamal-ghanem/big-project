import React, { useEffect, useState } from 'react'
import { Row, Spinner } from 'react-bootstrap'
import Paginate from '../uttilies/Pagination/Pagination'
import ProductCard from '../ProductCard/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { getUserWishlist } from '../../redux/actions/wishlistAction'
import CardProductsCon from '../CardProductsCon/CardProductsCon'
const UserFavorite = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await dispatch(getUserWishlist())
            setLoading(false)
        }
        get()
    }, [])

    const res = useSelector(state => state.wishList.userWishlist)
    useEffect(() => {
        if (loading === false) {
            if (res)
                setItems(res.data)
        }
    }, [loading])
    return (
        <div>
            <h2 className='my-2'>Favorite List</h2>
            <Row className='justify-content-start'>
                {
                    items.length <= 0 ? (<Spinner animation="border" variant="primary" />) : <CardProductsCon products={items} title="" btntitle="" />
                }
            </Row>
            <Paginate />
        </div>
    )
}
export default UserFavorite