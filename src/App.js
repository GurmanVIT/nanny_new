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
import Nannyprofile from "./component/profile/Nannyprofile";
import Nannybooking from "./component/Nannybooking/Nannybooking";
import HeaderNanny from "./component/header/HeaderNanny";
import { useSelector } from "react-redux";
import { useEffect , useState } from "react";
import io from "socket.io-client";
import Dayschange from "./component/Availability/Dayschange";

export const socket = io("https://dev-api-nanny.virtualittechnology.com/");
function App() {


  const [isSocketConnected, setSocketConnected] = useState(false);




  const type = localStorage.getItem("type")
  const user = useSelector((state) => state.rootReducer.login.data);
  useEffect(()=>{
    if(user!=null&&user.status){
      console.log("Type ===>",user.data.type)
    }
  },[user])

  useEffect(()=>{

   
    function onConnect() {
      console.log("Is Socket Conneted ===> ",isSocketConnected)
      setSocketConnected(true);
    }

    function onDisconnect() {
      setSocketConnected(false);
    }

    if(!isSocketConnected&&user!=null){
    const data = {userId: user._id}
       socket.emit("touch_server", data)
    }

    return () => {

      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  },[isSocketConnected])
  return (
    <>
      <BrowserRouter>
       {type==1?<HeaderNanny />:<Header />} 
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
          <Route path='/Nannybooking' element={<Nannybooking/>}/>
          <Route path='/dayschange' element={<Dayschange/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;