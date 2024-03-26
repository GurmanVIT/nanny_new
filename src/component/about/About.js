import React from 'react';
import about from "../../assets/img/about.jpg";
import founder from "../../assets/img/founder.jpg";
import offers from "../../assets/img/offers.jpg";
import { Link } from 'react-router-dom';
import { Facebook, LinkedIn } from '@mui/icons-material';

const About = () => {
    return (
        <>
            <div className=" nannycategories">
                <div className='banner_categories'>
                    <div className='heading_categories container'>
                        <h1>About Nanny Line</h1>
                    </div>

                </div>
            </div>
            <div className="sections_padding mt-5">
                <div className="container">
                    <h1 className="mb-0 mb-lg-4 pb-3 text-center"><span className="position-relative babysitter">Information About Founder</span></h1>
                    <div className="row mt-10">
                        <div className="col-md-10 offset-md-1">
                            <div className="img_contents mt-4">
                                <img className="founder_image" src={about} />
                                <div className="owner_info ps-4 d-flex flex-column justify-content-between">
                                    <p>During her studies she worked as a volunteer at a young women and children’s shelter. Josi then completed a 2 year internship in a home for people with psychiatric problems followed by 2 years working in childcare with families in need of support. Josi was then offered a full-time Family Manager role by Jeugdbescherming Regio Amsterdam, her employer during her internship. Here, Josi focussed on creating a positive environment within families for children who needed it the most. Although Josi found this greatly rewarding, the work was not easy and required intensive training in family therapy, child safety, communication skills and juvenile justice etc.</p>
                                    <ul className="mt-4 d-flex flex-wrap">
                                        <li className="position-relative ps-3 mb-3 sm_font">CEO</li>
                                        <li className="position-relative ps-3 mb-3 sm_font">Hard working</li>
                                        <li className="position-relative ps-3 mb-3 sm_font">Good Manager</li>
                                        <li className="position-relative ps-3 mb-3 sm_font">Social Worker</li>
                                        <li className="position-relative ps-3 mb-3 sm_font">Enthusiastic</li>
                                        <li className="position-relative ps-3 mb-3 sm_font">Friend</li>
                                    </ul>
                                    <h4 className="mt-2 mt-sm-4 fw-700 text-end">Josi van Ogtrop-Sambou
                                        <span className="d-block fw-400">Founder</span>
                                    </h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="sections_padding secondry_bg">
                <div className="container">
                    <h1 className="mb-0 mb-sm-4 pb-3 text-center"><span className="position-relative babysitter">Mission &amp; Vision
                    </span></h1>
                    <div className="row mt-3 mt-md-5">
                        <div className="col-md-6 offset-md-3 text-center">
                            <p>After 5 years of work in youth protection, Josi decided to change focus to working with children in established, good homes and environments. Children from expats or tourists could have adjustment challenges. Our nannies are trained to make children feel comfortable in their new home with their new nanny. Josi brings her education and experience in nannying to Barcelona from the Netherlands.</p>
                            <p className="fw-700 mt-4">
                                Happy nannies = happy children = happy families and that is our aim. She founded The Nanny Line in 2016 to fully develop her knowledge and services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sections_padding">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4">
                                    <img className="mw-100 founder_image" src={about} alt="image" />
                                </div>
                                <div className="col-md-8 ps-3 ps-ms-4 mt-3 mt-md-0 mb-4 mt-md-0">
                                    <h4 className="fw-700">Sergio Dankfort</h4>
                                    <h5 className="fw-700 my-2">Business Partner</h5>
                                    <p className='nanny_font'>The Nanny Line is a company made out of love and passion for children. It is my goal to make it the best working nanny app and website in Spain and Europe. Our absolute aim is to unburden hard working parents worldwide and nothing less.” Sergio is our business partner from Amsterdam. He is actively involved the development of the application and does our long-term strategy planning. Sergio has great experience in B2B and B2C Markets.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4 ">
                                    <img className="mw-100 founder_image" src={founder} alt="image" />
                                </div>
                                <div className="col-md-8 mt-3 mt-md-0">
                                    <h4 className="fw-700">Sergio Dankfort</h4>
                                    <h5 className="fw-700 my-2">Business Partner</h5>
                                    <p className='nanny_font'>The Nanny Line is a company made out of love and passion for children. It is my goal to make it the best working nanny app and website in Spain and Europe. Our absolute aim is to unburden hard working parents worldwide and nothing less.” Sergio is our business partner from Amsterdam. He is actively involved the development of the application and does our long-term strategy planning. Sergio has great experience in B2B and B2C Markets.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className="fw-700 mb-4">Our Team</h4>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className="team_section p-4 text-center position-relative">
                                <div className="team_image corner-rounded mx-auto mb-3">
                                    <img className="w-100" src={founder} alt="image" />
                                </div>
                                <h4 className="fw-700 mb-2">Adam Smith</h4>
                                <h6 className="fw-700 mb-4">Adam Smith</h6>
                                <p>The Nanny Line allows you to learn and step up your game by taking initiatives and present new ideas and solutions to the company”</p>
                                <div className="team_social_links position-absolute d-flex align-items-center justify-content-center">
                                    <Link to="#" className="mx-2"><Facebook /></Link>
                                    <Link to="#" className="mx-2"><LinkedIn /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 offset-md-3 col-md-6 mb-3">
                            <div className="team_section p-4 text-center position-relative">
                                <div className="team_image corner-rounded mx-auto mb-3">
                                    <img className="w-100" src={founder} alt="image" />
                                </div>
                                <h4 className="fw-700 mb-2">Adam Smith</h4>
                                <h6 className="fw-700 mb-4">Adam Smith</h6>
                                <p>The Nanny Line allows you to learn and step up your game by taking initiatives and present new ideas and solutions to the company”</p>
                                <div className="team_social_links position-absolute d-flex align-items-center justify-content-center">
                                    <Link to="#" className="mx-2"><Facebook /></Link>
                                    <Link to="#" className="mx-2"><LinkedIn /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 offset-lg-3 col-md-6 mb-3 custom_positon position-relative">
                            <div className="team_section p-4 text-center position-relative">
                                <div className="team_image corner-rounded mx-auto mb-3">
                                    <img className="w-100" src={founder} alt="image" />
                                </div>
                                <h4 className="fw-700 mb-2">Adam Smith</h4>
                                <h6 className="fw-700 mb-4">Adam Smith</h6>
                                <p>The Nanny Line allows you to learn and step up your game by taking initiatives and present new ideas and solutions to the company”</p>
                                <div className="team_social_links position-absolute d-flex align-items-center justify-content-center">
                                    <Link to="#" className="mx-2"><Facebook /></Link>
                                    <Link to="#" className="mx-2"><LinkedIn /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 offset-lg-3 col-md-6 mb-3 custom_positon position-relative">
                            <div className="team_section p-4 text-center position-relative">
                                <div className="team_image corner-rounded mx-auto mb-3">
                                    <img className="w-100" src={founder} alt="image" />
                                </div>
                                <h4 className="fw-700 mb-2">Adam Smith</h4>
                                <h6 className="fw-700 mb-4">Adam Smith</h6>
                                <p>The Nanny Line allows you to learn and step up your game by taking initiatives and present new ideas and solutions to the company”</p>
                                <div className="team_social_links position-absolute d-flex align-items-center justify-content-center">
                                    <Link to="#" className="mx-2"><Facebook /></Link>
                                    <Link to="#" className="mx-2"><LinkedIn /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sections_padding secondry_bg">
                <div className="container">
                    <h1 className="mb-0 mb-sm-4 pb-3 text-center"><span className="position-relative babysitter">The best of the bests</span></h1>
                    <div className="row mt-4 mt-md-5">
                        <div className="col-lg-3 col-sm-6">
                            <div className="best_box d-flex flex-column">
                                <img className="w-100 mb-4" src={offers} alt="logo" />
                                <div className="best_content">
                                    <h5 className="fw-700 mb-2 mb-sm-4">Heaing</h5>
                                    <p>The Nanny Line is a company made out of love and passion for children. It is my goal to make it the best working nanny app and website in Spain and Europe. Our absolute aim is to unburden hard working parents worldwide and nothing less.” Sergio is our business partner from Amsterdam. He is actively involved the development of the application and does our long-term strategy planning. Sergio has great experience in B2B and B2C Markets.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="best_box d-flex flex-column flex-column-reverse">
                                <img className="w-100 my-4" src={offers} alt="logo" />
                                <div className="best_content">
                                    <h5 className="fw-700 mb-2 mb-sm-4">Heaing</h5>
                                    <p className='mb-3 mb-sm-0'>The Nanny Line is a company made out of love and passion for children. It is my goal to make it the best working nanny app and website in Spain and Europe. Our absolute aim is to unburden hard working parents worldwide and nothing less.” Sergio is our business partner from Amsterdam. He is actively involved the development of the application and does our long-term strategy planning. Sergio has great experience in B2B and B2C Markets.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="best_box d-flex flex-column">
                                <img className="w-100 mb-4" src={offers} alt="logo" />
                                <div className="best_content">
                                    <h5 className="fw-700 mb-2 mb-sm-4">Heaing</h5>
                                    <p>The Nanny Line is a company made out of love and passion for children. It is my goal to make it the best working nanny app and website in Spain and Europe. Our absolute aim is to unburden hard working parents worldwide and nothing less.” Sergio is our business partner from Amsterdam. He is actively involved the development of the application and does our long-term strategy planning. Sergio has great experience in B2B and B2C Markets.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="best_box d-flex flex-column flex-column-reverse">
                                <img className="w-100 my-4" src={offers} alt="logo" />
                                <div className="best_content">
                                    <h5 className="fw-700 mb-2 mb-sm-4">Heaing</h5>
                                    <p>The Nanny Line is a company made out of love and passion for children. It is my goal to make it the best working nanny app and website in Spain and Europe. Our absolute aim is to unburden hard working parents worldwide and nothing less.” Sergio is our business partner from Amsterdam. He is actively involved the development of the application and does our long-term strategy planning. Sergio has great experience in B2B and B2C Markets.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About