import React from 'react';
import service from "../../assets/img/service_ocational.jpg";
import service_holiday from "../../assets/img/service_holiday.jpg";
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <>
            <div className=" nannycategories">
                <div className='banner_categories banner_service'>
                    <div className='heading_categories container'>
                        <h1>Services</h1>
                    </div>
                </div>
            </div>
            <div className="sections_padding mt-3">
                <div className="container">
                    <h1 className="text-center mb-4 pb-3">
                        <span className="position-relative content_offer">What do we offer exactly?</span>
                    </h1>
                    <p className="text-center">During all of our services we aim to provide the best possible service to our customers</p>
                    <div className="row mt-0 mt-md-5 mt-sm-0 row_padding">
                        <div className="col-md-6 offset-md-1 p-0">
                            <img className="w-100 my-5 service_holiday_img" src={service_holiday} alt="image" />
                        </div>
                        <div className="col-md-4 service_text secondry_bg">
                            <div className="hotel_book">
                                <h2 className="mb-4 fw-700">Hotel Booking</h2>
                                <p>Are you on holiday in Barcelona? Do you want some free, quality time to go around and discover the beauty of the city by day or night? We suggest a holiday nanny to accompany you during your holiday. She might have some tips for family restaurants or nice places to visit. And you can have a nice dinner while your children are in the good hands of our babysitters. Our Holiday nannies cost €20.00 per hour including agency fee and VAT.​</p>
                                <Link to="/nanyList" className="btn btn-primary d-inline-block mt-4 all_btns px-4 py-2 position-relative">Boook Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 flex-row-reverse row_padding">
                        <div className="col-md-6 p-0">
                            <img className="w-100 my-0 my-md-5 my-sm-0" src={service} alt="image" />
                        </div>
                        <div className="col-md-4 offset-md-1 service_text secondry_bg ">
                            <div className="hotel_book">
                                <h2 className="mb-4 fw-700">Hotel Booking</h2>
                                <p>Are you on holiday in Barcelona? Do you want some free, quality time to go around and discover the beauty of the city by day or night? We suggest a holiday nanny to accompany you during your holiday. She might have some tips for family restaurants or nice places to visit. And you can have a nice dinner while your children are in the good hands of our babysitters. Our Holiday nannies cost €20.00 per hour including agency fee and VAT.​</p>
                                <Link to="/nanyList" className="btn btn-primary d-inline-block mt-4 all_btns px-4 py-2 position-relative">Boook Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wny_us sections_padding">
                <div className="container">
                    <h1 className="pb-3 mb-4 text-center">
                        <span className="position-relative content_offer">Extra services
                        </span>
                    </h1>
                    <p className="text-center">Besides regular babysitting, The Nanny Line offers a special range of nanny-services. Meet with the new concept of babysitting!</p>
                    <div className="row mt-3 mt-md-5 mt-sm-3">
                        <div className="col-sm-6 col-lg-3 mb-3">
                            <div className="service_text secondry_bg pb-4 pb-sm-5 px-3 px-sm-4 h-100">
                                <div className="choose_icon mb-5 d-inline-block">
                                    <i className="fas fa-chalkboard-teacher"></i>
                                </div>
                                <h3 className="mb-4 fw-700">Tutoring nanny</h3>
                                <p>English is definitely the most spoken language in the world, The Nanny Line gives your children the opportunity to learn English, the language of business and one of the most widely spoken languages in the world. English Tutor Nannies create fun and playful materials and games for your child so they enjoy their learning time. Our tutor nannies are qualified English teachers, certified with TEFL- Teach English in Foreign Language. The price for a tutor nanny is €12.50 per hour.</p>
                                <Link to="/nanyList" className="btn btn-primary d-inline-block mt-4 all_btns px-4 py-2 position-relative">Boook Now</Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 mb-3 why_2">
                            <div className="service_text secondry_bg pb-4 pb-sm-5 px-3 px-sm-4 h-100">
                                <div className="choose_icon mb-5 d-inline-block">
                                    <i className="fas fa-share"></i>
                                </div>
                                <h3 className="mb-4 fw-700">Nanny sharing</h3>
                                <p>We offer Nanny Sharing with this in mind. By sharing a nanny, you and your friends can take a coffee break, catch-up or learn Spanish together. Our nannies can babysit yours and 2 friend’s children for €7.50 per hour per child (if you’re a member), for a minimum of 2 hours. The cost per hour for non-members is 8.50 per child per hour.</p>
                                <Link to="/nanyList" className="btn btn-primary d-inline-block mt-4 all_btns px-4 py-2 position-relative">Boook Now</Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 mb-3 why_3">
                            <div className="service_text secondry_bg pb-4 pb-sm-5 px-3 px-sm-4  h-100">
                                <div className="choose_icon mb-5 d-inline-block">
                                    <i className="fas fa-hourglass-start"></i>
                                </div>
                                <h3 className="mb-4 fw-700">Part-time & Long-term bookings</h3>
                                <p>Would you like to have somebody who is taking care of your children during your afternoon routine? Looking for somebody to pick up the guys in the school? We provide a wide range of part-time and long-term nannies.</p>
                                <Link to="/nanyList" className="btn btn-primary d-inline-block mt-4 all_btns px-4 py-2 position-relative">Boook Now</Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 mb-3 why_4">
                            <div className="service_text secondry_bg pb-4 pb-sm-5 px-3 px-sm-4 h-100">
                                <div className="choose_icon mb-5 d-inline-block">
                                    <i className="fas fa-sack-dollar"></i>
                                </div>
                                <h3 className="mb-4 fw-700">Specially priced nanny</h3>
                                <p>This booking is exactly like booking The Nanny Line nannies the only difference is that this is their first booking with our agency and we require one thing from you…your review/feedback after the booking!</p>
                                <Link to="/nanyList" className="btn btn-primary d-inline-block mt-4 all_btns px-4 py-2 position-relative">Boook Now</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Services