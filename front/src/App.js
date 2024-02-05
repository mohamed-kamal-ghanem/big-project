import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss"
import 'aos/dist/aos.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarLogin from './Components/uttilies/Navbar/NavbarLogin';
import Footer from './Components/uttilies/Footer/Footer';
import LoginPage from './Pages/Auth/Login/LoginPage';
import Register from './Pages/Auth/Register/Register';
import CategoriePage from './Pages/CategoriePage/CategoriePage';
import AllBrand from './Pages/AllBrand/AllBrand';
import ProductsShop from './Pages/ProductsShop/ProductsShop';
import ProductDetailsPage from './Pages/Products/ProductDetailsPage/ProductDetailsPage';
import Cart from './Pages/Cart/Cart';
import PaymentPage from './Pages/PaymentPage/PaymentPage';
import AdminPage from './Pages/Admin/AdminPage';
import AdminAllProductsItems from './Components/Admin/AdminAllProductsItems';
import AdminAllOrdersCom from './Components/Admin/AdminAllOrdersCom';
import AdminAddBrandCom from './Components/Admin/AdminAddBrandCom';
import AdminAddCategoriyCom from './Components/Admin/AdminAddCategoriyCom';
import AdminAddSubCategoriyCom from './Components/Admin/AdminAddSubCategoriyCom';
import AdminAddProductCom from './Components/Admin/AdminAddProductCom';
import AdminOrderDetails from './Components/Admin/AdminOrderDetails';
import UserPage from './Pages/User/UserPage';
import UserAllProductCom from './Components/User/UserAllProductCom';
import UserFavorite from './Components/User/UserFavorite';
import UserAdresses from './Components/User/UserAdresses';
import UserProfile from './Components/User/UserProfile';
import UserAddAddress from './Components/User/UserAddAddress';
import UserEditAdderss from './Components/User/UserEditAdderss';
import AdminEditPage from './Components/Admin/AdminEditPage';
import AdminAddCoupon from './Components/Admin/AdminAddCoupon';
import AdminEditCoupon from './Components/Admin/AdminEditCoupon';
import ProductCategory from './Components/ProductDetails/ProductCategory';
import ProductBrand from './Components/ProductDetails/ProductBrand';
import ProtectedRouteHook from './hook/Auth/protected-route-hook';
import ProtectedRoute from './Components/uttilies/ProtectedRoute';

function App() {

  const [userData, isUser, isAdmin] = ProtectedRouteHook();



  return (
    <div className="App">
      <BrowserRouter >

        <NavbarLogin />
        <Routes >
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/allcategorie" element={<CategoriePage />} />
          <Route path="/allbrand" element={<AllBrand />} />
          <Route path="/products" element={<ProductsShop />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/products/category/:id" element={<ProductCategory />} />
          <Route path="/products/brand/:id" element={<ProductBrand />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order/paymethoud" element={<ProtectedRoute auth={isUser}>
            <PaymentPage />
          </ProtectedRoute>} />
          <Route element={<ProtectedRoute auth={isAdmin}/>}>
            <Route path="admin/*" element={<AdminPage />} >
              <Route index element={<AdminAllProductsItems />} />
              <Route path="allorders" element={<AdminAllOrdersCom />} />
              <Route path="addbrand" element={<AdminAddBrandCom />} />
              <Route path="addcategory" element={<AdminAddCategoriyCom />} />
              <Route path="addsubcategory" element={<AdminAddSubCategoriyCom />} />
              <Route path="addproduct" element={<AdminAddProductCom />} />
              <Route path="addcoupon" element={<AdminAddCoupon />} />
              <Route path="editcoupon/:id" element={<AdminEditCoupon />} />
              <Route path="order/:id" element={<AdminOrderDetails />} />
              <Route path="editProduct/:id" element={<AdminEditPage />} />
            </Route>
          </Route>
          <Route element={<ProtectedRoute auth={isUser} />}>
            <Route path='user/*' element={<UserPage />} >
              <Route index element={<UserAllProductCom />} />
              <Route path="favorite" element={<UserFavorite />} />
              <Route path="addresses" element={<UserAdresses />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="add-address" element={<UserAddAddress />} />
              <Route path="edit-address/:id" element={<UserEditAdderss />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
