import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { getSpetificAddresses } from "../../redux/actions/userAddressAction";
import notify from "../useNotification";
import GetAllUserCartHook from "../cart/get-all-user-cart-hook";
import { createOrderCash } from "../../redux/actions/orderAction";
const OrderPayCashHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)
    const [cashLoading, setCashLoading] = useState(true);
    const [addressDetails, setAddressDetails] = useState([]);

    // Get Cart ID
    const [, , , , , cartID] = GetAllUserCartHook();

    //function to handle change addreess
    const handleChooseAddress = (e) => {
        setAddressDetails([])
        if (e.target.value !== "0") {
            get(e.target.value);
        }
    }

    const get = async (id) => {
        setLoading(true)
        await dispatch(getSpetificAddresses(id));
        setLoading(false)
    }

    const spetificOneRes = useSelector((state) => state.userAddress.getSpetificAddress);

    useEffect(() => {
        if (loading === false) {
            if (spetificOneRes.status === 'success' && spetificOneRes.data) {
                setAddressDetails(spetificOneRes.data)
            } else {
                setAddressDetails([])
            }
        }
    }, [loading])


    // function to handle createCashOrder
    const handleCreateCashOrder = async  () => {
        if (cartID === "") {
            notify("Please Add Products To cart First", "error")
            return;
        }
        if (addressDetails.length <= 0) {
            notify("Please Choose Address First", "warn")
            return;
        }
        setCashLoading(true)
        await dispatch(createOrderCash(cartID, {
            "shippingAddress": {
                details: addressDetails.alias,
                phone: addressDetails.phone,
                city: addressDetails.city,
                postalCode: addressDetails.postalCode
            }
        }))
        setCashLoading(false)
    }

    const cashRes = useSelector((state) => state.order.createOrderCash)

    console.log(cashRes)

    useEffect(() => {
        if (cashLoading === false) {
            if (cashRes) {
                if (cashRes.status === 201) {
                    notify("The cash order successfully created", "success");
                    setTimeout(() => {
                        navigate('/user')
                    }, 1500);
                }
                if (cashRes.status === 404) {
                    notify("You Have No Products In Cart , Add Products!", "error");
                }
            }
        }
    }, [cashLoading])


    return [handleChooseAddress, addressDetails, handleCreateCashOrder]
}

export default OrderPayCashHook
