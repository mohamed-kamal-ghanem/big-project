import  { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct, getAllProductsPage } from '../../redux/actions/productAction';

const ViewProductAdminHook = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProduct(8))
    }, [])


    const onPress = async (page) => {
        await dispatch(getAllProductsPage(page, 8))
    }
    let items = []; let pagination = [];
    const allProducts = useSelector((state) => state.allProduct.allProducts);

    try {

        if (allProducts.data)
            items = allProducts.data;
        else
            items = []

        if (allProducts.paginationResult)
            pagination = allProducts.paginationResult.numberOfPages;
        else
            pagination = []
    } catch (e) {
        
     }
    return [items, pagination, onPress]

}

export default ViewProductAdminHook