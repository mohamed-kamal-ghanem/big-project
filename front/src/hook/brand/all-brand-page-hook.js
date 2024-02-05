import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrand, getAllBrandPage } from '../../redux/actions/brandAction';

const AllBrandPageHook = () => {
  const dispatch = useDispatch();

  // Get All Category with limit
  useEffect(() => {
    dispatch(getAllBrand(6));
  }, [])
  // Select Category
  const brand = useSelector(state => state.allBrand.brand);
  // Select Loading
    const loading = useSelector(state => state.allBrand.loading);
    //name pageCount to get the page numbers 
  let pageCount = 0;
  if (brand.paginationResult) {
    pageCount = brand.paginationResult.numberOfPages;
  }
  // Function to get the page
  const getPage = (page)=>{
    dispatch(getAllBrandPage(page));
  }

    return [brand, loading, pageCount, getPage]
}

export default AllBrandPageHook
