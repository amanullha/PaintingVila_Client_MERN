import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authentication/Login/Login';
import SignUp from './Pages/Authentication/SignUp/SignUp';
import Home from './Pages/Home/Home/Home';
import ManageProduct from './Pages/Home/ManageProduct/ManageProduct';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import TopHeader from './Pages/Shared/Header/TopHeader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Products from './Pages/Home/Products/Products';
import Deshboard from './Pages/Deshboard/Deshboard';
import MyOrders from './Pages/Deshboard/MyOrders';
import AddReview from './Pages/Deshboard/AddReview';
import MyProfile from './Pages/Deshboard/MyProfile';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import Users from './Pages/Deshboard/Users';
import RequireAdmin from './Pages/Authentication/RequireAdmin/RequireAdmin';
import ManageAllOrders from './Pages/Deshboard/ManageAllOrders';
import AddNewProduct from './Pages/Deshboard/AddNewProduct';
import ManageProductInfo from './Pages/Deshboard/ManageProductInfo';
import useAdmin from './hooks/useAdmin';
import auth from './firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import NotFound from './Pages/Shared/NotFound/NotFound';
import About from './Pages/About/About';
import ContactUs from './Pages/ContactUs/ContactUs';
import Portfolio from './Pages/Portfolio/Portfolio';


function App() {

  const [user, loading, error] = useAuthState(auth);

  const [admin, setAdmin, adminLoading] = useAdmin(user);

  return (
    <div className="relative">
      <TopHeader />
      <Header />

      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>



        <Route path="/products" element={<Products />}></Route>
        <Route path="/manage-product/:productId" element={<RequireAuth><ManageProduct /></RequireAuth>}></Route>

        <Route path="/deshboard" element={<RequireAuth><Deshboard /></RequireAuth>}>

          {
            admin ? <Route path='' element={<RequireAdmin><Users /></RequireAdmin>} /> : <Route path='' element={<MyOrders />} />
          }
          <Route path='add-review' element={<AddReview />} />
          <Route path='profile' element={<MyProfile />} />


          <Route path='manage-all-orders' element={<RequireAdmin><ManageAllOrders /></RequireAdmin>} />
          <Route path='add-new-product' element={<RequireAdmin><AddNewProduct /></RequireAdmin>} />
          <Route path='update-product' element={<RequireAdmin><ManageProductInfo /></RequireAdmin>} />


        </Route>


        <Route path="/about" element={<About />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>



        <Route path='*' element={<NotFound />} />

      </Routes>

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
