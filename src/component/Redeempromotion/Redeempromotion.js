import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


const Redeempromotion = ({ isOpen, onRequestClose }) => {
    return (
        <>
        <Modal  isOpen={isOpen}
      onRequestClose={onRequestClose} 
      className="redeem_modal">
            <div className='book_detailsmain'>
                <div className='book_details'>
                    <Form className='redeem_form'>
                        <InputGroup className="mb-3">
                            <Form.Control placeholder="Enter Promo Code"/>
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
                                    <Link to="#"  onClick={onRequestClose}>Buy</Link>
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
                                    <Link to="#"  onClick={onRequestClose}>Buy</Link>
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
            </Modal>
        </>
    )
}

export default Redeempromotion
