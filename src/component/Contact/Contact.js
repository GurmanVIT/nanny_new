import React from 'react';
import book_nanny from '../../assets/img/book_nanny.svg';

const Contact = () => {
  return (
    <>
    <div class="inner_pages_banner position-absolute top-0 start-0"></div>
<div class="baner_text d-flex sections_padding pt-0 align-items-center text-center">
    <div class="container">
        <h1>Contact Us</h1>
    </div>
</div>
<div class="sections_padding mt-5">
    <div class="container">
        <h1 class="mb-4 pb-3 text-center"><span class="position-relative">Book a Nanny</span></h1>
        <p class="text-center">During all of our services we aim to provide the best possible service to our customers</p>
        <div class="row mt-5">
            <div class="col-md-10 offset-md-1 booking_box">
                <div class="row align-items-center">
                        <div class="col-md-6">
                            <div class="px-3 pt-5">
                                <img class="w-100" src={book_nanny} alt="logo" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <form class="py-5 px-4">
                                <div class="mb-3">
                                    <label for="fristname" class="form-label">First Name</label>
                                    <input type="email" class="form-control" id="fristname" placeholder="First Name"/>
                                </div>
                                <div class="mb-3">
                                    <label for="lastname" class="form-label">Last Name</label>
                                    <input type="email" class="form-control" id="lastname" placeholder="Last Name"/>
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" placeholder="Email Address"/>
                                </div>
                                <div class="mb-3">
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="radio" name="nanny_service_radio" id="value1" checked/>
                                        <label class="form-check-label" for="value1">
                                          Default radio
                                        </label>
                                      </div>
                                      <div class="form-check mb-2">
                                        <input class="form-check-input" type="radio" name="nanny_service_radio" id="value2" />
                                        <label class="form-check-label" for="value2">
                                          Default checked radio
                                        </label>
                                      </div>                                      
                                </div>
                                <div class="mb-3">
                                    <label for="description" class="form-label">Example textarea</label>
                                    <textarea class="form-control" id="description" rows="3"></textarea>
                                </div>
                                <button _ngcontent-tvf-c4="" type="submit" class="btn btn-primary d-inline-block mt-4 all_btns px-4 py-2 position-relative">Confirm identity</button>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="sections_padding secondry_bg">
    <div class="container">
        <div class="row">
            <div class="col-md-4 h-100 service_text contact_bg pe-0">
                <div class="p-5">
                    <h2 class="mb-4 fw-700">Get In Touch</h2>
                    <ul>
                        <li class="address_box d-flex align-items-center mb-5">
                            <i class="fa fa-user d-flex align-items-center justify-content-center me-3"></i>
                            <div class="address_info">
                                <h5 class="fw-700 mb-2">Meets Us</h5>
                                <p>Plaça del Duc de Medinaceli, 08002 Barcelona
                                </p>
                            </div>
                        </li>
                        <li class="address_box d-flex align-items-center mb-5">
                            <i class="fa fa-phone d-flex align-items-center justify-content-center me-3"></i>
                            <div class="address_info">
                                <h5 class="fw-700 mb-2">Meets Us</h5>
                                <p>Plaça del Duc de Medinaceli, 08002 Barcelona
                                </p>
                            </div>
                        </li>
                        <li class="address_box d-flex align-items-center mb-5">
                            <i class="fa fa-envelope d-flex align-items-center justify-content-center me-3"></i>
                            <div class="address_info">
                                <h5 class="fw-700 mb-2">Meets Us</h5>
                                <p>Plaça del Duc de Medinaceli, 08002 Barcelona
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-8 ps-0">
                <div class="py-5 w-100">
                    <div class="iframe_container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1750517.5864517696!2d75.4110207!3d31.026816300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1685378413776!5m2!1sen!2sin" scrolling="no" frameborder="0"
                     allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{position: "relative; height: 100%; width: 100%;"}}></iframe></div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="sections_padding">
    <div class="container">
        <h1 class="mb-4 pb-3 text-center"><span class="position-relative">Apply As Nanny</span></h1>
        <p class="text-center">During all of our services we aim to provide the best possible service to our customers</p>
        <div class="row mt-5">
            <div class="col-md-10 offset-md-1">
                <div class="row align-items-center">
                        <div class="col-md-6">
                            <h4 class="mb-3">Welcome at The Nanny Line!</h4>
                            <p>We are place nannies with families from all over the world at home, in their hotels or events. We have many different services for any type of schedule. Part time, full time or occasional according to your free time. We currently work in Barcelona, Ibiza and Madrid. Apply through the contact form or send us an email with your CV and motivation letter: info@nanny-line.com
                            </p>
                            <h4 class=" mt-5 mb-3">Our requirements are:</h4>
                            <ul>
                                <li class="mb-2">- 3 years of professional child care experience
                                </li>
                                <li class="mb-2">- 21+ years old
                                </li>
                                <li class="mb-2">- clear criminal record
                                </li>
                                <li class="mb-2">- at least two references

                                </li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <form class="py-5 booking_box px-4">
                                <div class="mb-3">
                                    <label for="nannyname" class="form-label">Full Name</label>
                                    <input type="text" class="form-control" id="nannyname" placeholder="Full Name"/>
                                </div>
                                <div class="mb-3">
                                    <label for="nannyemail" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="nannyemail" placeholder="Email Address"/>
                                </div>
                                <div class="mb-3">
                                    <label for="nannyaddress" class="form-label">Address</label>
                                    <input type="text" class="form-control" id="nannyaddress" placeholder="Email Address"/>
                                </div>
                                <div class="mb-3">
                                    <label for="nannyexp" class="form-label">Years of professional experience</label>
                                    <input type="text" class="form-control" id="nannyexp" placeholder="Email Address"/>
                                </div>
                                <div class="mb-3">
                                    <label for="description" class="form-label">Motivation in short (why we hire you) </label>
                                    <textarea class="form-control"  id="description" rows="3"></textarea>
                                </div>
                                <button _ngcontent-tvf-c4="" type="submit" class="btn btn-primary d-inline-block mt-4 all_btns px-4 py-2 position-relative">Apply Now</button>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Contact