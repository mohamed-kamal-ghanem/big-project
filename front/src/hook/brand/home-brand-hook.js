import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrand } from '../../redux/actions/brandAction';

const HomeBrandHook = () => {
    // dispatch the action
    const dispatch = useDispatch();
    // useEffect to dispatch the action of all category
  useEffect(() => {
    dispatch(getAllBrand());
  }, [])
    // use useSelector to get the category
    const brand = useSelector(state => state.allBrand.brand);
    // use useSelector to get the loading
    
    const loading = useSelector(state => state.allBrand.loading);
    // Set the colors of the backgroud of every product
    // return statement to get the category and loading and colors
  return [brand, loading]
}

export default HomeBrandHook
