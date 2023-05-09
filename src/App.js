import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ProductsCategory from './pages/ProductsCategory';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Store from './Components/Store';
import Profile from './Components/Profile';
import { useSelector } from 'react-redux';
import PageNotFound from './Components/PageNotFound';
import Contact from './Components/Contact';

function App() {
  const isLogin = useSelector(state => state.cart.isLogin)
  return (
    <div className="App position-relative overflow-hidden ">
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='products/:category' element={<ProductsCategory />} />
          <Route path='productDetails/:id' element={<ProductDetails />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='store' element={<Store />} />
          <Route path='products/:category' element={<Store />} />
          <Route path='store/search' element={<Store />} />
          <Route path='store/search/:search' element={<Store />} />
          {isLogin && <Route path='profile' element={<Profile />} />}
          <Route path="*" element={<PageNotFound />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
