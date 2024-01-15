import React, { useEffect, useState } from 'react';
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { CastConnected, MenuOutlined } from "@mui/icons-material";
import logo from '../../assets/img/logo_nav.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearData } from '../../store/apiSlice/LoginSlice';


const Header = () => {

  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch()


  const user = useSelector((state) => state.rootReducer.login.data);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [user]);

  const [openModal2, setOpenModal2] = useState(false);

  const onOpenModal2 = () => {
    setOpenModal2(true);
  };

  const onCloseModal2 = () => {
    setOpenModal2(false);
  };

  const onLogoutClick = () => {

    localStorage.clear()
    dispatch(clearData())
    setInterval(() => {
      navigate('/login');
    }, 1000);

  }

  //var className = "inverted";
  //var scrollTrigger = 60;

  //window.onscroll = function () {
  //    // We add pageYOffset for compatibility with IE.
  //    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
  //        document.getElementsByTagName("header")[0].classList.add(className);
  //    } else {
  //        document.getElementsByTagName("header")[0].classList.remove(className);
  //    }
  //};

  return (
    <>
      <div className={`header main-head ${scrolled ? "scrolled" : ""}`}>
        <div className="coustom_container">
          <div className="inner">
            <div className="logo">
              <Link to="/">
                <img className="mw-100" src={logo} alt="logo" style={{ width: "160px" }} />
              </Link>
            </div>
            <div className="navigation">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/tutorings">Tutorings</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            {localStorage.getItem("Token") == null ?
              <div className="btns">
                <div className="btn">
                  <Link className="main-button" to="/login">
                    Login
                  </Link>
                </div>
                <div className="btn">
                  <Link className="main-button" to="/signupnanny">
                    Sign up
                  </Link>
                </div>
              </div> :
              <div className="btns">
                <div className="btn">
                  <Link className="main-button" to="/login">
                    Logout
                  </Link>
                </div>
              </div>
            }
          </div>
        </div>
      </div>

      <div className="mob-header">
        <div className="inner">
          <div className="logo">
            <Link to="/"> <img className="mw-100" src={logo} alt="logo" style={{ width: "160px" }} /></Link>
          </div>

          <div className="">
            <MenuOutlined onClick={onOpenModal2} />
          </div>
        </div>
      </div>

      {/* modal Mobile header menu*/}
      <Modal
        open={openModal2}
        onClose={onCloseModal2}
        classNames={{
          modal: "P2P-ID__data",
          modalAnimationIn: "customEnterModalAnimation",
          modalAnimationOut: "customLeaveModalAnimation",
        }}
        center
      >
        <div className="main-sec">
          <div className="inner-sec">
            <ul className="menu-list2">
              <Link to="/" onClick={onCloseModal2}>Home</Link>
              <Link to="/about" onClick={onCloseModal2}>About</Link>
              <Link to="/services" onClick={onCloseModal2}>Services</Link>
              <Link to="/events" onClick={onCloseModal2}>Events</Link>
              <Link to="/tutorings" onClick={onCloseModal2}>Tutorings</Link>
              <Link to="/contact" onClick={onCloseModal2}>Contact</Link>
            </ul>
          </div>

          <div className="btn">
            <span><Link to="/login" className="main-button" onClick={onCloseModal2}>Login</Link></span>
            <span><Link to="/register" className="second-button" onClick={onCloseModal2}>Sign up</Link></span>
          </div>
        </div>
      </Modal>


      {/*<Navbar expand="lg" className="bg-body-tertiary custam_header header d-flex">
                <Container>
                    <Navbar.Brand href="#home" className=' custom-logo'>
                        <img className="mw-100" src={logo} alt="logo" style={{ width: "160px" }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='collapse navbar-collapse d-flex justify-content-end'>
                        <Nav>
                            <Nav.Link href="/"> Home</Nav.Link>
                            <Nav.Link href="/about" >About</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                            <Nav.Link href="/events">Events</Nav.Link>
                            <Nav.Link href="/tutorings">Tutorings</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <Nav.Link href="/login" className='btn login_btn'>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>*/}
    </>
  )
}

export default Header