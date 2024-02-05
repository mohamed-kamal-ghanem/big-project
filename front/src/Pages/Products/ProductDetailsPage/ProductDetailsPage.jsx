import { Container } from 'react-bootstrap';
import ProductDetails from '../../../Components/ProductDetails/ProductDetails';
import RateContainer from '../../../Components/Rate/RateContainer';
import CardProductsCon from "../../../Components/CardProductsCon/CardProductsCon";
import { useParams } from 'react-router-dom';
import ViewProductsDetalisHook from '../../../hook/products/view-product-details-hook';
const ProductDetailsPage = () => {

  // Get the route parameter using useParams
  const { id } = useParams();

  // Retrieve the id from local storage, if available
  const [item, images, cat, brand, prod] = ViewProductsDetalisHook(id);

  
  try {
    if (prod)
      var items = prod.slice(0, 4)
  } catch (e) { }
  try {
    if (item) {
      var rateAvg = item.ratingsAverage
      var rateQty = item.ratingsQuantity
    }
  } catch (e) { }




  return (
    <div>
          <Container>
            <ProductDetails />
            <RateContainer />
            <CardProductsCon title="Products you may like" products={items} />
          </Container>
    </div>
  )
}
export default ProductDetailsPage



