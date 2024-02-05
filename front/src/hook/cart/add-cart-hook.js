import { useState , useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import notify from "../useNotification";
import { addCart } from "../../redux/actions/cartAction";

const AddCartHook = (id , item) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("");
    const [indexColor, setIndexColor] = useState("");

    const onChangeColor = (index, color) => {
        setColor(color);
        setIndexColor(index)
    }

    const onAddProductCart = async () => {
        if (item.availableColors.length >= 1) {
            if (color === "") {
                notify("Please Select Color for Product", "warn")
                return
            }
        } else {
            setColor('')
        }
        setLoading(true)
        await dispatch(addCart({
            productId: id,
            color: color
        }))
        setLoading(false)
    }

    const addCartRes = useSelector(state => state.cart.addCart);

    useEffect(() => {
        if (loading === false) {
            if (addCartRes) {
                if (addCartRes.status === 403 && addCartRes.statusText === "Forbidden" ){
                    notify("It is not allowed for admin to add to cart", "error")
                } else if (addCartRes.status === 200) {
                    notify("Product Added Successfully", "success")
                    setTimeout(() => {
                        window.location.reload()
                    }, 1000);
                }
            }
        }
    }, [loading])
    

    return [onChangeColor,indexColor , onAddProductCart]
}

export default AddCartHook
