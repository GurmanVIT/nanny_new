import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import EditNoteIcon from '@mui/icons-material/EditNote';
import RedeemIcon from '@mui/icons-material/Redeem';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import nanny from "../../assets/img/event_main.jpg";
import { Button, Form, Modal, InputGroup } from 'react-bootstrap';

//import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

//const stripePromise = loadStripe('your_publishable_key');

//import { loadStripe } from '@stripe/stripe-js';
//import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
//const stripePromise = loadStripe('pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3');

const Bookdetails = () => {

    const [show, setShow] = useState(false);

    const handleCloses = () => setShow(false);
    const handleShows = () => setShow(true);


    //const [paymentError, setPaymentError] = useState(null);
    //const stripe = useStripe();
    //const elements = useElements();

    //const handleSubmit = async (event) => {
    //    event.preventDefault();

    //    if (!stripe || !elements) {
    //        return;
    //    }

    //    const cardElement = elements.getElement(CardElement);

    //    const { error, paymentIntent } = await stripe.confirmCardPayment('{CLIENT_SECRET}', {
    //        payment_method: {
    //            card: cardElement,
    //            billing_details: {
    //                name: 'Jenny Rosen',
    //            },
    //        },
    //    });

    //    if (error) {
    //        setPaymentError(error.message);
    //    } else {
    //        console.log('Payment successful:', paymentIntent);
    //        // Redirect or show success message
    //    }
    //};


    return (
        <>
            <div className='book_detailsmain'>
                <div className="book_details">
                    <form >
                        <div className='book_title'>
                            <div className='heading'>
                                <h4>Occasionl Nanny</h4>
                                <p>
                                    <span>08 Aug</span> - <span>04:00PM</span>
                                </p>
                            </div>
                            <div className='extendbooking'>
                                <Link to="#"><EditNoteIcon /> Extend Booking</Link>
                            </div>
                        </div>
                        <div className='description'>
                            <p>DESCRIPTION</p>
                            <p>Subtotal</p>
                        </div>
                        <div className='nanny_info'>
                            <div className='nanny_img'>
                                <img src={nanny} alt='nanny' />
                                <h5>Occasionl Nanny</h5>
                            </div>
                            <h5>$20</h5>
                        </div>
                        <div className='redeem-icon'>
                            <h6><span><RedeemIcon /></span> Redeem promotion</h6>
                            <div className='modal_btn'>
                                <Link to="#" onClick={handleShows}><ChevronRightIcon /></Link>
                            </div>
                        </div>
                        <div className='price_details'>
                            <ul>
                                <div className='fee_price'>
                                    <ul>
                                        <li>Base Fee</li>
                                    </ul>
                                    <p>$10</p>
                                </div>
                                <div className='fee_price'>
                                    <ul>
                                        <li>Discount</li>
                                    </ul>
                                    <p>$8</p>
                                </div>
                                <div className='fee_price'>
                                    <ul>
                                        <li>Credits</li>
                                    </ul>
                                    <p>$25</p>
                                </div>
                                <div className='fee_price'>
                                    <ul>
                                        <li>Promotions</li>
                                    </ul>
                                    <p>0</p>
                                </div>
                            </ul>
                        </div>
                        <div className='total_price'>
                            <h4>Total</h4>
                            <h4>$155.00</h4>
                        </div>
                        {/*<div className='booking_btn'>
                            <CardElement />
                            <button type="submit" disabled={!stripe}>
                                Pay
                            </button>
                            {paymentError && <div>{paymentError}</div>}
                        </div>*/}
                    </form>
                </div>
            </div>
            <Modal show={show} onHide={handleCloses} className="redeem_modal mt-5">
                <Modal.Header closeButton>
                    <Modal.Title>Redeem Promotion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='book_detailsmain'>
                        <div className='book_details mt-0'>
                            <Form className='redeem_form'>
                                <InputGroup className="mb-3">
                                    <Form.Control placeholder="Enter Promo Code" />
                                    <InputGroup.Text>
                                        <Link to="#">Redeem</Link>
                                    </InputGroup.Text>
                                </InputGroup>
                            </Form>
                            <div className='redeem_cards'>
                                <div className='heading'>
                                    <h6>AVAILABE COUPONS</h6>
                                </div>
                                <div className='card'>
                                    <div className='card_body'>
                                        <div className='card_heading'>
                                            <h5>Naturebreed</h5>
                                            <Link to="#" onClick={handleCloses}>Buy</Link>
                                        </div>
                                        <div className='get_off'>
                                            <span>Get 50% off</span>
                                        </div>
                                        <div className='off_all'>
                                            <p>50% Off on all service</p>
                                        </div>
                                    </div>
                                    <div className='card_end'>
                                        <p>Offer valid <span>Today,till 05:00 pm</span></p>
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className='card_body'>
                                        <div className='card_heading'>
                                            <h5>Naturebreed</h5>
                                            <Link to="#" onClick={handleCloses}>Buy</Link>
                                        </div>
                                        <div className='get_off'>
                                            <span>Get 50% off</span>
                                        </div>
                                        <div className='off_all'>
                                            <p>50% Off on all service</p>
                                        </div>
                                    </div>
                                    <div className='card_end'>
                                        <p>Offer valid <span>Today,till 05:00 pm</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Bookdetails
