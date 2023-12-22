import React from 'react'
import Form from 'react-bootstrap/Form';
import visa from "../../assets/img/visa-payment-card.png";
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Payment = () => {
    return (
        <>
            <div className='book_detailsmain'>
                <div className="book_details">
                    <div className='book_title'>
                        <h4>Select Card Payment</h4>
                    </div>
                    <div className='payment'>
                        <div className='card'>
                            <div className='card_body'>
                                <div className='card_card'>
                                    <div className='radio_card'>
                                        <Form.Check type="radio" aria-label="radio 1" />
                                    </div>
                                    <div className='card_details'>
                                        <h6>Debit Card</h6>
                                        <div className='card_visa'>
                                            <p>***0541</p>
                                            <img src={visa} alt='visa' />
                                        </div>
                                    </div>
                                </div>
                                <div className='card_last'>
                                <Form.Control type="number" />
                                </div>
                            </div>
                            <div className='card_body card_credit'>
                                <div className='card_card'>
                                    <div className='radio_card'>
                                        <Form.Check type="radio" aria-label="radio 1" />
                                    </div>
                                    <div className='card_details'>
                                        <h6>Credit Card</h6>
                                        <div className='card_visa'>
                                            <p>***0320</p>
                                            <img src={visa} alt='visa' />
                                        </div>
                                    </div>
                                </div>
                                <div className='card_last'>
                                <Form.Control type="number" />
                                </div>
                            </div>
                        </div>
                        <div className='add_card'>
                            <Link to="#">
                                <span className='add_new'><AddIcon/></span>
                                <span>Add a new card</span>
                            </Link>
                        </div>
                        <div className='pay_btn'>
                            <div className='pay_total'>
                                <h6>Total Payable</h6>
                                <p>$155.00</p>
                            </div>
                            <div>
                                <Button className='btn btn_continue'>Pay</Button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Payment
