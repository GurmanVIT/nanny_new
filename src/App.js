import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.scss';
import Header from './component/header/Header';
import Contact from './component/Contact/Contact';
import Home from './component/Home/Home';
import Nannycategories from './component/Nanny-categories/Nannycategories';
import Services from './component/Services/Services';
import About from './component/about/About';
import Login from './component/auth/login/Login';
import Blogs from './component/blogs/Blogs';
import Events from './component/events/Events';
import Footer from './component/footer/Footer';
import Tutorings from "./component/tutorings/Tutorings";
import My_Orders_Component from "./component/my-orders/My_Orders_Component";
import Profile from "./component/profile/Profile";
import Nanylisting from "./component/nany-listing/Nanylisting";
import CustomModal from "./component/CustomModal/CustomModal";
import Redeempromotion from "./component/Redeempromotion/Redeempromotion";
import Bookdetails from "./component/Redeempromotion/Bookdetails";
import Payment from "./component/Redeempromotion/Payment";
import Forgotpassword from "./component/auth/Forgotpassword/Forgotpassword";
import Signupfamily from "./component/auth/RegisterAsFamily/Signupfamily";
import Otp from "./component/auth/Otp";
import Signupnanny from "./component/auth/Signupnanny";
import Card from "./component/Nanny-categories/Card";
import Availability from "./component/Availability/Availability";
import Profilenanny from "./component/profile/Profilenanny";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signupfamily' element={<Signupfamily />} />
          <Route path='/forotpassword' element={<Forgotpassword />} />
          <Route path="/otp" element={<Otp/>}/>
          <Route path="/signupnanny" element={<Signupnanny/>}/>
          <Route path='/events' element={<Events />} />
          <Route path='/nannycategories' element={<Nannycategories />} />
          <Route path='/tutorings' element={<Tutorings />} />
          <Route path='/my_orders_component' element={<My_Orders_Component />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="/nanyList" element={<Nanylisting />}/>
          <Route path="/customModal" element={<CustomModal/>}/>
          <Route path="/redeempromotion" element={<Redeempromotion/>}/>
          <Route path="/bookdetails" element={<Bookdetails/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/card" element={<Card/>}/>
          <Route path="/availability" element={<Availability/>}/>
          <Route path='/profilenanny' element={<Profilenanny/>} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;