import React from 'react';


const Footer = () => {
    return (
        <>
            <div class="footer_banner_bg sections_padding position-relative">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5">
                            <h5 class="fw-700 mb-5">About Us</h5>
                            <p>Our professional and experienced nannies are always available. You can rely on us daytime, nighttime, anytime!</p>
                            <br />
                            <p>We aim to take good care of our nannies as it’s important that you/they feel supported by the agency to ensure a positive working relationship. We understand that it’s crucial for everybody that the nanny is in a good place so that they deliver the best possible care.</p>
                        </div>
                        <div class="col-md-3 offset-md-1">
                            <h5 class="fw-700 mb-5">Services</h5>
                            <ul>
                                <li>
                                    <a to="#" class="py-2 d-block">Occasional bookings</a>
                                </li>
                                <li>
                                    <a to="#" class="py-2 d-block">Part-time bookings</a>
                                </li>
                                <li>
                                    <a to="#" class="py-2 d-block">Long-term bookings</a>
                                </li>
                                <li>
                                    <a to="#" class="py-2 d-block">Tutor nannies</a>
                                </li>
                                <li>
                                    <a to="#" class="py-2 d-block">PLAYDATE events</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <h5 class="fw-700 mb-5">Contact</h5>
                            <div class="d-flex align-items-center contact_section mb-4">
                                <i class="fas fa-map-marked-alt me-3"></i>
                                <p>Placa del Duc de Medicinalei 08002, Barcelona</p>
                            </div>
                            <div class="d-flex align-items-center contact_section mb-4">
                                <i class="fas fa-phone-alt me-3"></i>
                                <p>+34 617 24 36 59</p>
                            </div>
                            <div class="d-flex align-items-center contact_section mb-4">
                                <i class="fas fa-envelope me-3"></i>
                                <p>info@nanny-line.com </p>
                            </div>
                        </div>
                    </div>
                    <hr class="my-4" />
                </div>
            </div>
        </>
    )
}

export default Footer