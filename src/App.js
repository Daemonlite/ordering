import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import 'bootstrap/dist/css/bootstrap.min.css'

import Restaurants from './pages/home'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Menu from './pages/menu'
import Navigation from './components/navbar';
import Order from './pages/order'
import Maindish from './components/mainDishes';
import Orders from './pages/orders'
import 'antd/dist/reset.css';
function App() {

 

  return (
  <>
  <Navigation/>
  <ToastContainer position='top-center' />
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Restaurants /> }/>
    <Route path='/menu' element={<Menu />}/>
    <Route path='/order' element={<Order/>}/>
    <Route  path='/maindish' element={<Maindish />}/>
    <Route path='/orders' element={<Orders/>}/>
    </Routes>

    </BrowserRouter>
  </>
  );
}

export default App;
