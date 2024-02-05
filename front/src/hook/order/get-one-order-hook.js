import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOneOrder } from '../../redux/actions/orderAction';

const GetOneOrderHook = (id) => {
    const [loading, setLoading] = useState(true);
    const [orderData, setOrderData] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const dispatch = useDispatch()


    const get = async () => {
        setLoading(true)
        await dispatch(getOneOrder(id));
        setLoading(false)
    }

    useEffect(() => {
        get()
    }, [])

    //get address detalis for user
    const resOneOrder = useSelector(state => state.order.getOneOrder)
    useEffect(() => {
        if (loading === false) {
            // console.log(resOneOrder)
            if (resOneOrder.data)
                setOrderData(resOneOrder.data)
            if (resOneOrder.data.cartItems)
                setCartItems(resOneOrder.data.cartItems)
        }
    }, [loading])


    return [orderData, cartItems]

}

export default GetOneOrderHook
