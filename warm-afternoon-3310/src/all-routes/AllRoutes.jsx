import React from 'react';
import {Routes,Route} from "react-router-dom";
import Usersdata from '../pages/admin-users/Usersdata';
import Admin from '../pages/admin/Admin';

import ProductCart from '../pages/cart/productCart';

import MenProducts from '../pages/men-products/MenProducts';
// import { Auth0Provider } from '@auth0/auth0-react';
import Cart from "../pages/cart/Cart";

const AllRoutes = () => {
  return (
    <div>
      <Routes>

        <Route path='/menproducts' element={<MenProducts/>} ></Route>
        <Route path='/usersdata' element={<Usersdata/>} ></Route>
        <Route path='/admin' element={<Admin/>} ></Route>
        <Route path='/productCart' element={<ProductCart/>} ></Route>
        <Route path='/menproducts' element={<MenProducts/>}></Route>
      </Routes>
      
    </div>
  )
}

export default AllRoutes