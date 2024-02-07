import React from 'react';
import banner from '../../assets/img/banner_bg.jpg'
import { AccessAlarm, Favorite, Keyboard, Sms } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';


const Events = () => {
    return (
        <>
            <div className=" nannycategories">
                <div className='banner_categories'>
                    <div className='heading_categories container'>
                        <h1>The Nanny Line</h1>
                    </div>
                </div>
            </div>

            <div className="sections_padding mt-5">
                <div className="d-flex mt-4 flex-wrap">
                    <div className="events_image p-5 d-flex align-items-center justify-content-center text-start position-relative">
                        <h1 className="display-1 fw-700">A BEAUTIFUL NEW CONCEPT OF BABYSITTING</h1>
                    </div>
                    <div className="events_info px-3 py-5 px-lg-5">
                        <h3 className="fw-700 mb-5">What is Playdate?</h3>
                        <p className="fw-700 mb-4">In collaboration with the best kindergartens in Barcelona: A wonderful new playdate with qualified, experienced, multilingual nannies provided by The Nanny Line. We have created a wonderful new event where you can feel safe leaving your children with professional, experienced and multilingual nannies to offer your child the chance to learn and play whilst you take a well-deserved break.</p>
                        <p className=" mb-4">A wonderful new playdate with qualified, experienced, multilingual nannies provided by The Nanny Line. We have created a wonderful new playdate with the help of The Nanny Line where you can feel safe leaving your children with professional, experienced and multilingual nannies to offer your child the chance to learn and play whilst you take a well-deserved break.</p>
                        <p className="mb-4">This is your opportunity to give your children a chance to speak and hear both English and Spanish with our fantastic nannies. You don’t need to worry about a thing! You can take the time to relax and have a rest and we will entertain them with games and activities to engage their attention.</p>
                    </div>
                </div>
            </div>

            <div className="sections_padding secondry_bg">
                <div className="container">
                    <h1 className="mb-4 pb-3 text-center"><span className="position-relative">What do we offer with Playdate?
                    </span></h1>
                    <p className="text-center">Get to know more about our brand new concept</p>
                    <div className="row mt-5">
                        <div className="col-lg-3 col-sm-6 mb-3 text-center">
                            <div className="event_circle mb-4 mx-auto d-flex align-items-center justify-content-center">
                                <Sms />
                            </div>
                            <h4 className="mb-4 fw-700">Learn English &amp; Spanish</h4>
                            <p>During Playdate, your children will have the opportunity to learn English and Spanish!</p>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-3 text-center">
                            <div className="event_circle mb-4 mx-auto d-flex align-items-center justify-content-center">
                                <AccessAlarm />
                            </div>
                            <h4 className="mb-4 fw-700">4 hours of babysitting</h4>
                            <p>The price includes a total of 4 hours professional babysitting with games and toys!</p>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-3 text-center">
                            <div className="event_circle mb-4 mx-auto d-flex align-items-center justify-content-center">
                                < Favorite />
                            </div>
                            <h4 className="mb-4 fw-700">Profession &amp; Love</h4>
                            <p>Our nannies professionals and experienced for entertain your loved ones!</p>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-3 text-center">
                            <div className="event_circle mb-4 mx-auto d-flex align-items-center justify-content-center">
                                <Keyboard />
                            </div>
                            <h4 className="mb-4 fw-700">Enjoy your ME-TIME</h4>
                            <p>Every parent deserves some free time alone. Enjoy yourself during we take care of your beloved ones.!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid sections_padding">
                <div className='my_swiper'>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        breakpoints={{

                            1600: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                        }}>
                        <SwiperSlide>
                            <div className="card">
                                <div className="card-img">
                                    <img src={banner} alt="slider" className="d-block w-100" />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card">
                                <div className="card-img">
                                    <img src={banner} alt="slider" className="d-block w-100" />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card">
                                <div className="card-img">
                                    <img src={banner} alt="slider" className="d-block w-100" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/*<div id="carouselExampleFade" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={banner} className="d-block w-100" alt="slider" />
                        </div>
                        <div className="carousel-item">
                            <img src={banner} className="d-block w-100" alt="slider" />
                        </div>
                        <div className="carousel-item">
                            <img src={banner} className="d-block w-100" alt="slider" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>*/}
            </div>
        </>
    )
}

export default Events