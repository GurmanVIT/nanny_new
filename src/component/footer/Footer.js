import { LocalPhone, LocationOn, MailOutline } from '@mui/icons-material';
import React from 'react';


const Footer = () => {
    return (
        <>
            <div className="footer_banner_bg sections_padding position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <h5 className="fw-700 mb-5">About Us</h5>
                            <p>Our professional and experienced nannies are always available. You can rely on us daytime, nighttime, anytime!</p>
                            <br />
                            <p>We aim to take good care of our nannies as it’s important that you/they feel supported by the agency to ensure a positive working relationship. We understand that it’s crucial for everybody that the nanny is in a good place so that they deliver the best possible care.</p>
                        </div>
                        <div className="col-md-3 offset-md-1">
                            <h5 className="fw-700 mb-5">Services</h5>
                            <ul>
                                <li>
                                    <a to="#" className="py-2 d-block">Occasional bookings</a>
                                </li>
                                <li>
                                    <a to="#" className="py-2 d-block">Part-time bookings</a>
                                </li>
                                <li>
                                    <a to="#" className="py-2 d-block">Long-term bookings</a>
                                </li>
                                <li>
                                    <a to="#" className="py-2 d-block">Tutor nannies</a>
                                </li>
                                <li>
                                    <a to="#" className="py-2 d-block">PLAYDATE events</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5 className="fw-700 mb-5">Contact</h5>
                            <div className="d-flex align-items-center contact_section mb-4">
                                <LocationOn/>
                                <p>Placa del Duc de Medicinalei 08002, Barcelona</p>
                            </div>
                            <div className="d-flex align-items-center contact_section mb-4">
                                <LocalPhone/>
                                <p>+34 617 24 36 59</p>
                            </div>
                            <div className="d-flex align-items-center contact_section mb-4">
                                <MailOutline/>
                                <p>info@nanny-line.com </p>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4" />
                </div>
            </div>
        </>
    )
}

export default Footer