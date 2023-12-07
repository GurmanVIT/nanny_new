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
import Header from './component/header/Header';
import './style.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Header />  
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/nannycategories' element={<Nannycategories/>}/>
      </Routes>
      <Footer/>
    </Router>
   
    </>
  );
}

export default App;