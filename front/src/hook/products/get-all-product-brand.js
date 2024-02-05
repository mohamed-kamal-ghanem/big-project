import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsByBrand } from "../../redux/actions/productAction";

const GetAllProductBrand = (id) => {
    const limit = 8
    // dispatch the action
    const dispatch = useDispatch();
    // useEffect to dispatch the action of all category
    useEffect(() => {
        dispatch(getAllProductsByBrand(id, limit));
    }, [])
    // use useSelector to get the category
    const productBrand = useSelector(state => state.allProduct.productsBrand);
    // use useSelector to get the loading

    const loading = useSelector(state => state.allProduct.loading);

    //when click pagination
    const onPress = async (page) => {
        await dispatch(getAllProductsByBrand(id, limit, page))
    }


     let pagination = [];
    try {
        if (productBrand.paginationResult)
            pagination = productBrand.paginationResult.numberOfPages;
        else
            pagination = []
    } catch (e) { }

    // return statement to get the category and loading
    return [productBrand, loading, pagination, onPress]
}

export default GetAllProductBrand
