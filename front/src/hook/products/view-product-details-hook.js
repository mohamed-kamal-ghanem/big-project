import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getOneProduct, getProductLike } from '../../redux/actions/productAction';
import { getOneCategory } from '../../redux/actions/categoryAction';
import { getOneBrand } from '../../redux/actions/brandAction';

const ViewProductsDetalisHook = (id) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneProduct(id))
    },[])

    const oneProduct = useSelector((state) => state.allProduct.oneProduct)
    const oneCategory = useSelector((state) => state.allCategory.oneCategory)
    const oneBrand = useSelector((state) => state.allBrand.oneBrand)
    const productLike = useSelector((state) => state.allProduct.productsLike)

    //to show products item
    let item = [];
    if (oneProduct.data) {
        item = oneProduct.data;
    }
    else {
        item = []
    }


    useEffect(() => {
        if (item.category)
            dispatch(getOneCategory(item.category))
        if (item.brand)
            dispatch(getOneBrand(item.brand))
        if (item.category)
            dispatch(getProductLike(item.category))
    }, [item])

    // const similerProducts = products.filter((product) => product.category === oneProduct.category && product._id !== oneProduct._id);

    //to view images gallery
    let images = []
    if (item.images)
        images = item.images.map((img) => { return { original: img } })
    else {
        images = []
    }

    //to show category item
    let cat = [];
    if (oneCategory.data)
        cat = oneCategory.data;
    else
        cat = []

    //to show brand item
    let brand = [];
    if (oneBrand.data)
        brand = oneBrand.data;
    else
        brand = []

    let prod = []
    if (productLike)
        prod = productLike.data;
    else
        prod = []

    return [item, images, cat, brand, prod]
}

export default ViewProductsDetalisHook;