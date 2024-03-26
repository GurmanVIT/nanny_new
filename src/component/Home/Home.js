import React from 'react';
import about from "../../assets/img/about.jpg";
import wlogo from '../../assets/img/w-logo.png';
import { Link } from 'react-router-dom';
import { ArrowForward, CheckBox, Drafts, Edit, Map, Star } from '@mui/icons-material';

const Home = () => {


    const type = localStorage.getItem("type")
    const token = localStorage.getItem("Token")

    return (
        <>
            <div className="banner_bg_home position-absolute top-0 start-0"></div>
            <div className="baner_text_home d-flex align-items-center text-center">
                <div className="container">
                    <h1 className="mb-2">Welcome</h1>
                    <h2 className="mb-3">The <span>Nanny</span> Line
                    </h2>
                    {type != 1 &&
                        <Link to={token != null ? "/nannycategories" : "/login"} className="btn btn-book mt-4 position-relative">Book</Link>}
                </div>
            </div>
            <div className="who_we_section sections_padding">
                <div className="container text-center py-1 py-sm-4 secound_section">
                    <h3>Who We Are?</h3>
                    <h2 className="my-2 my-sm-3 pb-0 pb-sm-3">
                        <span className="position-relative babysitter">"More than a babysitter"</span>
                    </h2>
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <p className="mb-3">The Nanny Line is a multilingual agency with international, educated, experienced and enthusiastic nannies and babysitters</p>
                            <p>We provide the best service and support to families in Barcelona, Madrid and Ibiza. Our experienced nannies report directly to your home, hotel or event, day or night, <span className="d-block fw-700">ANYTIME!</span></p>
                            <Link to="/services" className="btn btn-primary d-inline-block mt-3 mt-sm-4 all_btns px-4 py-2 position-relative">Services</Link><br />
                            {token === null && <Link to="/signupnanny" className="btn btn-primary d-inline-block mt-3 mt-sm-4 all_btns px-4 py-2 position-relative">Apply to be Nanny</Link>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="sections_padding services_box secondry_bg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <h2 className="mb-0 mb-md-4 pb-3 offer_nanny">
                                <span className="position-relative">What do we offer</span>
                            </h2>
                            <p className='mb-2'>Our nannies are available for locals, tourists or special occasions.</p>
                        </div>
                        <div className="col-md-4 pe-2">
                            <img className="mw-100" src={about} alt="offers" />
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-12 mb-4 ps-3 ps-md-5 mt-5 mt-md-0">
                                    <div className="d-flex flex-column flex-md-row align-items-center">
                                        <div className="service_arrow mb-3 mb-md-0">
                                            <div className='d-flex align-items-center justify-content-center'>
                                                < ArrowForward />
                                            </div>

                                            {/*<i className="fa-solid fa-arrow-right "></i>*/}
                                        </div>
                                        <div className="service_info ps-0 ps-md-5">
                                            <h5 className="mb-3 fw-700">Occasional bookings</h5>
                                            <p>We provide the best babysitter service all around in Barcelona. In your home? In your hotel room? It does not matter, we are available <span className="fw-700">anywhere!</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mb-4 ps-3 ps-md-5">
                                    <div className="d-flex flex-column flex-md-row align-items-center">
                                        <div className="service_arrow mb-3 mb-md-0">
                                            <div className='d-flex align-items-center justify-content-center'>
                                                < ArrowForward />
                                            </div>
                                            {/*<i className="fa-solid fa-arrow-right d-flex align-items-center justify-content-center"></i>*/}
                                        </div>
                                        <div className="service_info ps-0 ps-md-5">
                                            <h5 className="mb-3 fw-700">Occasional bookings</h5>
                                            <p>We provide the best babysitter service all around in Barcelona. In your home? In your hotel room? It does not matter, we are available <span className="fw-700">anywhere!</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mb-4 ps-3 ps-md-5">
                                    <div className="d-flex flex-column flex-md-row align-items-center">
                                        <div className="service_arrow mb-3 mb-md-0">
                                            <div className='d-flex align-items-center justify-content-center'>
                                                < ArrowForward />
                                            </div>
                                            {/*<i className="fa-solid fa-arrow-right d-flex align-items-center justify-content-center"></i>*/}
                                        </div>
                                        <div className="service_info ps-0 ps-md-5">
                                            <h5 className="mb-3 fw-700">Occasional bookings</h5>
                                            <p>We provide the best babysitter service all around in Barcelona. In your home? In your hotel room? It does not matter, we are available <span className="fw-700">anywhere!</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="numbers_speaks sections_padding">
                <div className="container">
                    <h2 className="text-center pb-3">
                        <span className="position-relative">Numbers Speak</span>
                    </h2>
                    <p className="text-center">If you don`t believe us, believe in the numbers below </p>
                    <div className="mt-lg-5 mt-md-4 mt-3 row gx-0">
                        <div className="col-sm-6 col-lg-3 mb-3">
                            <div className="number_say_box text-center px-4 py-5">
                                <h2 className="mb-3 fw-700">5</h2>
                                <h6>Years of experience</h6>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 mb-3">
                            <div className="number_say_box text-center px-4 py-5">
                                <h2 className="mb-3 fw-700">100+
                                </h2>
                                <h6>Active nannies</h6>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 mb-3">
                            <div className="number_say_box text-center px-4 py-5">
                                <h2 className="mb-3 fw-700">24/7</h2>
                                <h6>Available</h6>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 mb-3">
                            <div className="number_say_box text-center px-4 py-5">
                                <h2 className="mb-3 fw-700">1000+</h2>
                                <h6>Bookings</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wny_us sections_padding">
                <div className="container">
                    <h2 className="pb-3  mb-lg-4 mb-md-2 mb-0 text-center">
                        <span className="position-relative">Why choose us?
                        </span>
                    </h2>
                    <p className="text-center">Daytime, nighttime, ANYTIME!</p>
                    <div className="row mt-5">
                        <div className="col-sm-6 col-lg-3 mb-3">
                            <div className="services_box secondry_bg pb-5 px-4 h-100">
                                <div className="choose_icon mb-5 d-inline-block">
                                    <CheckBox /></div>
                                <h4 className="mb-4 fw-700">Full availability</h4>
                                <p>Our nannies are available through every day of the week. Would you go for a late night dinner? No worries, our babysitters will be available for 24/7!</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 mb-3 why_2">
                            <div className="services_box secondry_bg pb-5 px-4  h-100">
                                <div className="choose_icon mb-5 d-inline-block">
                                    <Edit /></div>
                                <h4 className="mb-4 fw-700">Experienced and professional</h4>
                                <p>We are with full of competent and qualified nannies. How can we guarantee it? Every nanny in our database has at least 3+ years of experience!</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 mb-3 why_3">
                            <div className="services_box secondry_bg pb-5 px-4 h-100">
                                <div className="choose_icon mb-5 d-inline-block">
                                    <Drafts /></div>
                                <h4 className="mb-4 fw-700">Personally checked background</h4>
                                <p>Before applying to be a nanny at The Nanny Line, we request a background check from the given person. All of our nannies are personally checked for criminal background!</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 mb-3 why_4">
                            <div className="services_box secondry_bg pb-5 px-4 h-100">
                                <div className="choose_icon mb-5 d-inline-block">
                                    <Map /></div>
                                <h4 className="mb-4 fw-700">Hotel availability</h4>
                                <p>The Nanny Line is in contact with the biggest 5* Hotels in Barcelona. Are you coming for a trip? Will you spend more time in the "sunny city"? We get your back. Ask the concierge for one of our lovely babysitters!.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonials sections_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 className="mb-3 pb-3">
                                <span className="position-relative">Our Happy Moms</span>
                            </h2>
                            <p>Meet our satisfied customers. During the whole process of service what we offer, we aim to give the easiest and calmest procedure what we can!</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="testimonials_box py-5 px-4">
                                <h5 className="mb-4 fw-700">“We had a lovely babysitter who was super cool with our daughter and her group of friends.”</h5>
                                <hr />
                                <div className="d-flex pt-4 align-items-center justify-content-between">
                                    <div className="d-block">
                                        <h6 className="fw-700">Astrid Aafjes</h6>
                                        <h6>TNL Mom</h6>
                                    </div>
                                    <div className="stars d-flex align-items-center">
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="testimonials_box py-5 px-4 mt-0">
                                <h5 className="mb-4 fw-700">“We had a lovely babysitter who was super cool with our daughter and her group of friends.”</h5>
                                <hr />
                                <div className="d-flex pt-4 align-items-center justify-content-between">
                                    <div className="d-block">
                                        <h6 className="fw-700">Astrid Aafjes</h6>
                                        <h6>TNL Mom</h6>
                                    </div>
                                    <div className="stars d-flex align-items-center">
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row mb-3  align-items-center">
                                <div className="col-sm-2">
                                    <div className="d-flex testimonials_box py-4 px-3 align-items-center justify-content-center">
                                        <div className="d-block">
                                            <h6 className="fw-700">Astrid Aafjes</h6>
                                            <h6>TNL Mom</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-10 mt-3 mt-sm-0">
                                    <div className="stars d-flex align-items-center">
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                    </div>
                                    <h5 className="fw-700">“We had a lovely babysitter who was super cool with our daughter and her group of friends.”</h5>
                                </div>
                            </div>
                            <div className="row  flex-row-reverse align-items-center">
                                <div className="col-sm-2">
                                    <div className="d-flex testimonials_box py-4 px-3 align-items-center justify-content-center">
                                        <div className="d-block">
                                            <h6 className="fw-700">Astrid Aafjes</h6>
                                            <h6>TNL Mom</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-10 mt-3 mt-sm-0">
                                    <div className="stars d-flex align-items-center">
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                    </div>
                                    <h5 className="fw-700 ml-3">“We had a lovely babysitter who was super cool with our daughter and her group of friends.”</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="prtners sections_padding">
                <div className="container">
                    <h2 className="text-center fw-700 mb-4 pb-3">
                        <span className="position-relative">Our partners
                        </span>
                    </h2>
                    <p className="text-center">We are proud to co-operate with more than 40 luxury hotels in Barcelona!</p>
                    <div className="row">
                        <div className="col text-center">
                            <img className="mw-100" src={wlogo} alt="wlogo" />
                        </div>
                        <div className="col text-center">
                            <img className="mw-100" src={wlogo} alt="wlogo" />
                        </div>
                        <div className="col text-center">
                            <img className="mw-100" src={wlogo} alt="wlogo" />
                        </div>
                        <div className="col text-center">
                            <img className="mw-100" src={wlogo} alt="wlogo" />
                        </div>
                        <div className="col text-center">
                            <img className="mw-100" src={wlogo} alt="wlogo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home