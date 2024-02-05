import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsByCategory } from "../../redux/actions/productAction";

const GetAllProductCategory = (id) => {
    const limit =8
    // dispatch the action
    const dispatch = useDispatch();
    // useEffect to dispatch the action of all category
    useEffect(() => {
        dispatch(getAllProductsByCategory(id ,limit));
    }, [])
    // use useSelector to get the category
    const productCategory = useSelector(state => state.allProduct.productsCategory);
    // use useSelector to get the loading

    const loading = useSelector(state => state.allProduct.loading);

    //when click pagination
    const onPress = async (page) => {
        await dispatch(getAllProductsByCategory(id, limit, page))
    }


     let pagination = [];
    try {
        if (productCategory.paginationResult)
            pagination = productCategory.paginationResult.numberOfPages;
        else
            pagination = []
    } catch (e) { }

    // return statement to get the category and loading
    return [productCategory, loading ,pagination, onPress]
}

export default GetAllProductCategory
