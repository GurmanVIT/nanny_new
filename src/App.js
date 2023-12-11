import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.scss';
import Header from './component/header/Header';
import Contact from './component/Contact/Contact';
import Home from './component/Home/Home';
import Nannycategories from './component/Nanny-categories/Nannycategories';
import Services from './component/Services/Services';
import About from './component/about/About';
import Signup from './component/auth/Signup/Signup';
import Login from './component/auth/login/Login';
import Blogs from './component/blogs/Blogs';
import Events from './component/events/Events';
import Footer from './component/footer/Footer';
import Tutorings from "./component/tutorings/Tutorings";
import My_Orders_Component from "./component/my-orders/My_Orders_Component";
import Profile from "./component/profile/Profile";

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
          <Route path='/signup' element={<Signup />} />
          <Route path='/events' element={<Events />} />
          <Route path='/nannycategories' element={<Nannycategories />} />
          <Route path='/tutorings' element={<Tutorings />} />
          <Route path='/my_orders_component' element={<My_Orders_Component />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;