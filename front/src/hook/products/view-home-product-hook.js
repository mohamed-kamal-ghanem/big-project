import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../redux/actions/productAction";

const ViewHomeProductHook = () => {
  // dispatch the action
    const dispatch = useDispatch();
    // useEffect to dispatch the action of all category
    useEffect(() => {
      const get = async () => {
        await dispatch(getAllProduct());
      }
      get();
    }, [])
    // Select Sub products
  const allProducts = useSelector(state => state.allProduct.allProducts);
  const category = useSelector(state => state.allCategory.category);
  const brand = useSelector(state => state.allBrand.brand);
  

  let products = [];
  try {
        if (allProducts && allProducts.data.length >= 1)
            products = allProducts.data
    } catch (e) { }

    
    

    return [products]
}

export default ViewHomeProductHook
