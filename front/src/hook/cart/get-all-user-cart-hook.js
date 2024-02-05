import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllCart } from "../../redux/actions/cartAction";
const GetAllUserCartHook = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [allCart, setAllCart] = useState([]);
    const [cartNumber, setCartNumber] = useState(0);
    const [totalCartPrice, setTotalCartPrice]=useState(0)
    const [priceAfterDiscount, setPriceAfterDiscount] = useState(0)
    const [couponName, setCouponName] = useState("");
    const [cartID, setCartID]=useState("0")


    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await dispatch(getAllCart())
            setLoading(false)
        }
        get()
    },[])

    const allCartRes = useSelector(state => state.cart.AllCart);

    useEffect(() => {
        if (loading === false) {
            if (allCartRes) {
                if (allCartRes.status === "success") {
                    setAllCart(allCartRes.data.products)
                    setCartNumber(allCartRes.numOfCartItems)
                    setTotalCartPrice(allCartRes.data.totalCartPrice)
                    setCartID(allCartRes.data._id)
                } 
                if (allCartRes.data.coupon) {
                    setCouponName(allCartRes.data.coupon)
                } else {
                    setCouponName('')
                }
                if (allCartRes.data.totalAfterDiscount) {
                    setPriceAfterDiscount(allCartRes.data.totalAfterDiscount)
                } else {
                    setPriceAfterDiscount('')
                }
            }else {
                setAllCart([])
                setCartNumber(0)
                setCartID("0")
            }
        }
    }, [loading])

    
    

    return [allCart, cartNumber, couponName, totalCartPrice, priceAfterDiscount, cartID]
}

export default GetAllUserCartHook
