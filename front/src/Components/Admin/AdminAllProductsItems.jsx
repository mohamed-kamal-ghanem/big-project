import AdminAllCards from "./AdminAllCards";
import {  Row } from 'react-bootstrap';
import Paginate from '../uttilies/Pagination/Pagination'
import ViewHomeProductHook from '../../hook/products/view-home-product-hook';
import ViewProductAdminHook from "../../hook/admin/view-products-admin-hook";
import AllCategoryPageHook from "../../hook/category/all-category-page-hook";
const AdminAllProductsItems = () => {
  
  const [products] = ViewHomeProductHook();
  const [category] = AllCategoryPageHook();
  const [items, pagination, onPress] = ViewProductAdminHook();
    if (pagination)
        var pageCount = pagination;
    else
        pageCount = 0;


  return (
    <div>
      
      
      <h2>Manage Products</h2>
      <Row>
        
        {
          items.length > 0 ? 
            items.map((product) => {
              return (
                <AdminAllCards product={product} key={product._id}  />
              )
            }) : <center>No Products To View</center>
        }
        
      </Row>
      {
        pageCount > 1 ? (
          <Paginate pageCount={pageCount} onPress={onPress} />
        ) : null
      }
    </div>
  )
}

export default AdminAllProductsItems