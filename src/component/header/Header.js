import React, { useEffect, useState } from 'react';
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { CastConnected, MenuOutlined, Notifications } from "@mui/icons-material";
import logo from '../../assets/img/logo_nav.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearData } from '../../store/apiSlice/LoginSlice';
import PersonIcon from '@mui/icons-material/Person';


const Header = () => {

  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const [type,setType] = useState(1)


  const user = useSelector((state) => state.rootReducer.login.data);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    if(user!=null)
    {
      console.log("TYPE ===> ",user.data.type)
      setType(user.data.type)
    }

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
  
      console.log("Logout")
      navigate('/login');

  }


  return (
    <>
      <div className={`header main-head ${scrolled ? "scrolled" : ""}`}>
        <div className="coustom_container">
          {localStorage.getItem("Token") == null ?
            (<div className="inner">
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
              </div>
            </div>)
            :user!=null&&user.data.type==1?
            (<div className="inner">
              <div className="logo">
                <Link to="/">
                  <img className="mw-100" src={logo} alt="logo" style={{ width: "160px" }} />
                </Link>
              </div>
              <div className="navigation">
                <ul>
                  <li>
                    <Link to="/nannycategories">Home</Link>
                  </li>
                  <li>
                    <Link to="/Nannybooking">Booking</Link>
                  </li>
                  <li>
                    <Link to="/availability">Availability</Link>
                  </li>
                </ul>
              </div>
              <div className="btns">
                <div className="btn">
                  <button type='button'  className="main-button" onClick={()=>onLogoutClick()}>
                    Logout
                  </button>
                </div>
                <div className='btn profile'>
                  <Link className='main-button ' to="#">< Notifications /></Link>
                </div>
                <div className='btn profile'>
                  
                  <Link className='main-button ' to={user!=null&&user.data.type==1?"/profilenanny":"/profile"}><PersonIcon /></Link>
                </div>
             
              </div>
            </div>)
            :(<div className="inner">
              <div className="logo">
                <Link to="/">
                  <img className="mw-100" src={logo} alt="logo" style={{ width: "160px" }} />
                </Link>
              </div>
              <div className="navigation">
                <ul>
                  <li>
                    <Link to="/nannycategories">Home</Link>
                  </li>
                  <li>
                    <Link to="/my_orders_component">Booking</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="btns">
                <div className="btn">
                  <button type='button'  className="main-button" onClick={()=>onLogoutClick()}>
                    Logout
                  </button>
                </div>
                <div className='btn profile'>
                  <Link className='main-button ' to="#">< Notifications /></Link>
                </div>
                <div className='btn profile'>
                  
                  <button type='button' className='main-button ' onClick={()=>user!=null&&user.data.type==1?navigate("/profilenanny"):navigate("/profile")}><PersonIcon /></button>
                </div>
             
              </div>
            </div>
            )
          }
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
    </>
  )
}

export default Header