import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCaetgory, getAllCaetgoryPage } from '../../redux/actions/categoryAction';

const AllCategoryPageHook = () => {
  const dispatch = useDispatch();


  // Get All Category with limit
  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCaetgory(6));
    }
    get();
  }, [])
  // Select Category
  const category = useSelector(state => state.allCategory.category);

  // console.log(category)
  // Select Loading
    const loading = useSelector(state => state.allCategory.loading);
    //name pageCount to get the page numbers 
  let pageCount = 0;
  if (category.paginationResult) {
    pageCount = category.paginationResult.numberOfPages;
  }
  // Function to get the page
  const getPage = (page)=>{
    const get = async () => {
      await dispatch(getAllCaetgoryPage(page));
    }
    get();

  }

    return [category, loading, pageCount, getPage]
}

export default AllCategoryPageHook
