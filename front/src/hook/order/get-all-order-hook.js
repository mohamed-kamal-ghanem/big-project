import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllOrders } from "../../redux/actions/orderAction";
const GetAllOrderHook = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const [results, setResult] = useState(0);
    const [paginate, setPaginate] = useState({});
    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await dispatch(getAllOrders("" , 5));
            setLoading(false)
        }
        get()
    }, [])

    const onPress = async (page) => {
        setLoading(true)
        await dispatch(getAllOrders(page, 5))
        setLoading(false)
    }
    
    const allOrders = useSelector((state) => state.order.getAllOrders);

    useEffect(() => {
        if (loading === false) {
            if (allOrders.results)
                setResult(allOrders.results)
            if (allOrders.paginationResult)
                setPaginate(allOrders.paginationResult)
            if (allOrders.data)
                setOrderData(allOrders.data)

        }
    }, [loading])
    
    return [orderData, results, paginate, onPress]
}

export default GetAllOrderHook
