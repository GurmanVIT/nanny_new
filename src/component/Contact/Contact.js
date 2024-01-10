import React from 'react';
import book_nanny from '../../assets/img/book_nanny.svg';

const Contact = () => {
  return (
    <>
    <div className="inner_pages_banner position-absolute top-0 start-0"></div>
<div className="baner_text d-flex sections_padding pt-0 align-items-center text-center">
    <div className="container">
        <h1>Contact Us</h1>
    </div>
</div>
<div className="sections_padding mt-5">
    <div className="container">
        <h1 className="mb-4 pb-3 text-center"><span className="position-relative">Book a Nanny</span></h1>
        <p className="text-center">During all of our services we aim to provide the best possible service to our customers</p>
        <div className="row mt-5">
            <div className="col-md-10 offset-md-1 booking_box">
                <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="px-3 pt-5">
                                <img className="w-100" src={book_nanny} alt="logo" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <form className="py-5 px-4">
                                <div className="mb-3">
                                    <label for="fristname" className="form-label">First Name</label>
                                    <input type="email" className="form-control" id="fristname" placeholder="First Name"/>
                                </div>
                                <div className="mb-3">
                                    <label for="lastname" className="form-label">Last Name</label>
                                    <input type="email" className="form-control" id="lastname" placeholder="Last Name"/>
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Email Address"/>
                                </div>
                                <div className="mb-3">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="radio" name="nanny_service_radio" id="value1" checked/>
                                        <label className="form-check-label" for="value1">
                                          Default radio
                                        </label>
                                      </div>
                                      <div className="form-check mb-2">
                                        <input className="form-check-input" type="radio" name="nanny_service_radio" id="value2" />
                                        <label className="form-check-label" for="value2">
                                          Default checked radio
                                        </label>
                                      </div>                                      
                                </div>
                                <div className="mb-3">
                                    <label for="description" className="form-label">Example textarea</label>
                                    <textarea className="form-control" id="description" rows="3"></textarea>
                                </div>
                                <button _ngcontent-tvf-c4="" type="submit" className="btn btn-primary d-inline-block mt-4 all_btns px-4 py-2 position-relative">Confirm identity</button>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="sections_padding secondry_bg">
    <div className="container">
        <div className="row">
            <div className="col-md-4 h-100 service_text contact_bg pe-0">
                <div className="p-5">
                    <h2 className="mb-4 fw-700">Get In Touch</h2>
                    <ul>
                        <li className="address_box d-flex align-items-center mb-5">
                            <i className="fa fa-user d-flex align-items-center justify-content-center me-3"></i>
                            <div className="address_info">
                                <h5 className="fw-700 mb-2">Meets Us</h5>
                                <p>Plaça del Duc de Medinaceli, 08002 Barcelona
                                </p>
                            </div>
                        </li>
                        <li className="address_box d-flex align-items-center mb-5">
                            <i className="fa fa-phone d-flex align-items-center justify-content-center me-3"></i>
                            <div className="address_info">
                                <h5 className="fw-700 mb-2">Meets Us</h5>
                                <p>Plaça del Duc de Medinaceli, 08002 Barcelona
                                </p>
                            </div>
                        </li>
                        <li className="address_box d-flex align-items-center mb-5">
                            <i className="fa fa-envelope d-flex align-items-center justify-content-center me-3"></i>
                            <div className="address_info">
                                <h5 className="fw-700 mb-2">Meets Us</h5>
                                <p>Plaça del Duc de Medinaceli, 08002 Barcelona
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-8 ps-0">
                <div className="py-5 w-100">
                    <div className="iframe_container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1750517.5864517696!2d75.4110207!3d31.026816300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1685378413776!5m2!1sen!2sin" scrolling="no" frameborder="0"
                     allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{position: "relative; height: 100%; width: 100%;"}}></iframe></div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="sections_padding">
    <div className="container">
        <h1 className="mb-4 pb-3 text-center"><span className="position-relative">Apply As Nanny</span></h1>
        <p className="text-center">During all of our services we aim to provide the best possible service to our customers</p>
        <div className="row mt-5">
            <div className="col-md-10 offset-md-1">
                <div className="row align-items-center">
                        <div className="col-md-6">
                            <h4 className="mb-3">Welcome at The Nanny Line!</h4>
                            <p>We are place nannies with families from all over the world at home, in their hotels or events. We have many different services for any type of schedule. Part time, full time or occasional according to your free time. We currently work in Barcelona, Ibiza and Madrid. Apply through the contact form or send us an email with your CV and motivation letter: info@nanny-line.com
                            </p>
                            <h4 className=" mt-5 mb-3">Our requirements are:</h4>
                            <ul>
                                <li className="mb-2">- 3 years of professional child care experience
                                </li>
                                <li className="mb-2">- 21+ years old
                                </li>
                                <li className="mb-2">- clear criminal record
                                </li>
                                <li className="mb-2">- at least two references

                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <form className="py-5 booking_box px-4">
                                <div className="mb-3">
                                    <label for="nannyname" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="nannyname" placeholder="Full Name"/>
                                </div>
                                <div className="mb-3">
                                    <label for="nannyemail" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="nannyemail" placeholder="Email Address"/>
                                </div>
                                <div className="mb-3">
                                    <label for="nannyaddress" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="nannyaddress" placeholder="Email Address"/>
                                </div>
                                <div className="mb-3">
                                    <label for="nannyexp" className="form-label">Years of professional experience</label>
                                    <input type="text" className="form-control" id="nannyexp" placeholder="Email Address"/>
                                </div>
                                <div className="mb-3">
                                    <label for="description" className="form-label">Motivation in short (why we hire you) </label>
                                    <textarea className="form-control"  id="description" rows="3"></textarea>
                                </div>
                                <button _ngcontent-tvf-c4="" type="submit" className="btn btn-primary d-inline-block mt-4 all_btns px-4 py-2 position-relative">Apply Now</button>
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