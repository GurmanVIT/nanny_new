import Contact from './component/Contact/Contact';
import About from './component/about/About';
import Blogs from './component/blogs/Blogs';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import './style.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
      <Routes>
          <Route path="/about" element={<About />} />
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;