import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCaetgory } from '../../redux/actions/categoryAction';

const HomeCategoryHook = () => {
    // dispatch the action
    const dispatch = useDispatch();
    // useEffect to dispatch the action of all category
  useEffect(() => {
    dispatch(getAllCaetgory());
  }, [])
    // use useSelector to get the category
    const category = useSelector(state => state.allCategory.category);
    // use useSelector to get the loading
    
    const loading = useSelector(state => state.allCategory.loading);
    // Set the colors of the backgroud of every product
    const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]
    // return statement to get the category and loading and colors
  return [category, loading, colors]
}

export default HomeCategoryHook
