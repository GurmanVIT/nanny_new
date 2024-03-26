import React from 'react';
import banner from '../../assets/img/banner_bg.jpg';

const Tutorings = () => {
    return (
        <>
            <div className="tutoring_banner_page inner_pages_banner position-absolute top-0 start-0"></div>
            <div className="baner_text about_nanny_text d-flex tutoring_inner_sec sections_padding pt-0 align-items-center text-center">
                <div className="container">
                    <h1 className='line_text'>About Nanny Line</h1>
                </div>
            </div>
            <div className="sections_padding mt-5">
                <h1 className="mb-4 pb-3 text-center"><span className="position-relative babysitter">Information About Founder</span></h1>
                <div className="mt-5">
                    <div className="d-flex mt-4 flex-wrap">
                        <div className="tutor_image p-5 d-flex align-items-center justify-content-center text-start position-relative">
                            <h1 className="display-1 fw-700 possible_center">Every <br />possible<br />activity
                            </h1>
                        </div>
                        <div className="tutor_info px-3 py-5 px-lg-5">
                            <h3 className="fw-700 mb-3 mb-md-5">The solution for COVID-19 #StayAtHome</h3>
                            <p className="fw-700 mb-3 mb-md-4">Have fun and learn with our activities driven by one of our super nannies. Your children will be sharing this activities, playing and interacting, with children their same age.</p>

                            <p className="mb-3 mb-md-4">The Nanny Line gives your children the opportunity to learn English, the language of business and one of the most widely spoken languages in the world. English Tutor Nannies create fun and playful materials and games for your child so they enjoy their learning time. Our tutor nannies are qualified English teachers, certified with TEFL- Teach English in Foreign Language.</p>

                            <p className="fw-700 mb-0 mb-md-4 ">The price for a tutor nanny is €6.00 per class per child for group sessions. A private class costs €15.00 for 40-60min.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="w-100">
                <div className="container schedule_image">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <img src={banner} alt="image" className="w-100" />
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="sections_padding tutor_form pb-0">
                <div className="d-flex mt-0 mt-md-4 flex-wrap">
                    <div className="tutor_info tutor_solution  px-3 py-5 px-lg-5 mb-md-0 mb-3">
                        <h3 className="fw-700 mb-3 mb-md-5">The solution for COVID-19 #StayAtHome</h3>
                        <p className=" mb-4">Choose which tutoring program you would like to take, and send us your request with all the details below. After we received your request, one of our colleague will contact you with all the details and possible schedules.</p>
                        <form className="tutor_form_field">
                            <div className="mb-3">
                                <label for="Name_field" className="form-label">Name<span>*</span></label>
                                <input type="text" className="form-control" id="Name_field" placeholder="Name" />
                            </div>
                            <div className="mb-3">
                                <label for="email_field" className="form-label">Email<span>*</span></label>
                                <input type="email" className="form-control" id="email_field" placeholder="Email" />
                            </div>
                            <div className="mb-3">
                                <label for="phone_field" className="form-label">Phone<span>*</span></label>
                                <input type="phone" className="form-control" id="phone_field" placeholder="Phone" />
                            </div>
                            <div className="mb-3">
                                <label for="service_type" className="form-label">Select Service Type<span>*</span></label>
                                <select className="form-select mb-3" id="service_select" aria-label=".form-select-lg example">
                                    <option selected>Select Service Type</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="language_type" className="form-label">Select Language<span>*</span></label>
                                <select className="form-select mb-3" id="language_type" aria-label=".form-select-lg example">
                                    <option selected>Select Service Type</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary d-inline-block mt-4 all_btns px-4 py-2 position-relative">Confirm identity</button>
                        </form>
                    </div>
                    <div className="tutor_image p-5 d-flex align-items-center justify-content-center text-start position-relative"></div>
                </div>
            </div>
        </>
    )
}

export default Tutorings;