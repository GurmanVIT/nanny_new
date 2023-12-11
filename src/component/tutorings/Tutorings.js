import React from 'react'

const Tutorings = () => {
    return (
        <>
            <div class="inner_pages_banner position-absolute top-0 start-0"></div>
            <div class="baner_text d-flex sections_padding pt-0 align-items-center text-center">
                <div class="container">
                    <h1>About Nanny Line</h1>
                </div>
            </div>
            <div class="sections_padding mt-5">
                <h1 class="mb-4 pb-3 text-center"><span class="position-relative">Information About Founder</span></h1>
                <div class="mt-5">
                    <div class="d-flex mt-4 flex-wrap">
                        <div class="tutor_image p-5 d-flex align-items-center justify-content-center text-start position-relative">
                            <h1 class="display-1 fw-700">Every <br />possible<br />activity
                            </h1>
                        </div>
                        <div class="tutor_info px-3 py-5 px-lg-5">
                            <h3 class="fw-700 mb-5">The solution for COVID-19 #StayAtHome</h3>
                            <p class="fw-700 mb-4">Have fun and learn with our activities driven by one of our super nannies. Your children will be sharing this activities, playing and interacting, with children their same age.</p>

                            <p class=" mb-4">The Nanny Line gives your children the opportunity to learn English, the language of business and one of the most widely spoken languages in the world. English Tutor Nannies create fun and playful materials and games for your child so they enjoy their learning time. Our tutor nannies are qualified English teachers, certified with TEFL- Teach English in Foreign Language.</p>

                            <p class="fw-700 mb-4">The price for a tutor nanny is €6.00 per class per child for group sessions. A private class costs €15.00 for 40-60min.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-100">
                <div class="container schedule_image">
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <img class="w-100" src="../../assets/images/banner_bg.jpg" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="sections_padding tutor_form pb-0">
                <div class="d-flex mt-4 flex-wrap">
                    <div class="tutor_info px-3 py-5 px-lg-5">
                        <h3 class="fw-700 mb-5">The solution for COVID-19 #StayAtHome</h3>
                        <p class=" mb-4">Choose which tutoring program you would like to take, and send us your request with all the details below. After we received your request, one of our colleague will contact you with all the details and possible schedules.</p>
                        <form class="tutor_form_field">
                            <div class="mb-3">
                                <label for="Name_field" class="form-label">Name<span>*</span></label>
                                <input type="text" class="form-control" id="Name_field" placeholder="Name" />
                            </div>
                            <div class="mb-3">
                                <label for="email_field" class="form-label">Email<span>*</span></label>
                                <input type="email" class="form-control" id="email_field" placeholder="Email" />
                            </div>
                            <div class="mb-3">
                                <label for="phone_field" class="form-label">Phone<span>*</span></label>
                                <input type="phone" class="form-control" id="phone_field" placeholder="Phone" />
                            </div>
                            <div class="mb-3">
                                <label for="service_type" class="form-label">Select Service Type<span>*</span></label>
                                <select class="form-select mb-3" id="service_select" aria-label=".form-select-lg example">
                                    <option selected>Select Service Type</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="language_type" class="form-label">Select Language<span>*</span></label>
                                <select class="form-select mb-3" id="language_type" aria-label=".form-select-lg example">
                                    <option selected>Select Service Type</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary d-inline-block mt-4 all_btns px-4 py-2 position-relative">Confirm identity</button>
                        </form>
                    </div>
                    <div class="tutor_image p-5 d-flex align-items-center justify-content-center text-start position-relative"></div>
                </div>

            </div>
        </>
    )
}

export default Tutorings;