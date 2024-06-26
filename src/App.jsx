import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";
import MyState from "./context/data/myState";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/productInfo";
import AddProduct from "./pages/admin/pages/AddProduct";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";
import { ToastContainer } from "react-toastify";
import Allproducts from "./pages/allProducts/allProduct";
import PageNotFound from "./pages/nopage/NoPage";
import PaymentSuccess from "./pages/successPage/Success";
import PlatinumMember from "./pages/platinumMembers/PlatinumMember";
function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/allproducts" element={<Allproducts />} />          
          <Route path="/dashboard" element={<ProtectedRoutesForAdmin><Dashboard/></ProtectedRoutesForAdmin>} />
          <Route path="/login" element={<Login />} />
          <Route path="/buypremium" element={<PlatinumMember/>} />
          <Route path="/orderconfirmation/:id" element={<PaymentSuccess />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/addproduct" element={<ProtectedRoutesForAdmin><AddProduct /></ProtectedRoutesForAdmin>} />
          <Route path="/updateproduct" element={<ProtectedRoutesForAdmin><UpdateProduct /></ProtectedRoutesForAdmin>} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <ToastContainer/>
      </Router>
    </MyState>
  );
}

export default App;

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('currentUser')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'sugatachanda.cse2022@nsec.ac.in') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}
export const ProtectedRoutesForPremium = ({children}) => {
  const premiumUser = JSON.parse(localStorage.getItem('user'))
  console.log(premiumUser.user.isPlatinum)
  if (premiumUser.user.isPlatinum === "False") {
    return children
  }
  else {
    return <Link to={'/'}/>
  }
}