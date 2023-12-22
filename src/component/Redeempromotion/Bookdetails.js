import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import EditNoteIcon from '@mui/icons-material/EditNote';
import RedeemIcon from '@mui/icons-material/Redeem';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import nanny from "../../assets/img/event_main.jpg";
import { Button } from 'react-bootstrap';
import Redeempromotion from './Redeempromotion';

const Bookdetails = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

    return (
        <>
         <div className='book_detailsmain'>
            <div className="book_details">
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
                        <Link to="#" onClick={openModal}><ChevronRightIcon /></Link>
                        <Redeempromotion isOpen={isModalOpen} onRequestClose={closeModal}/>
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
                <div className='booking_btn'>
                    <Link to="/payment" className="btn btn_continue">CONTINUE</Link>
                </div>
                </div>
            </div>
        </>
    )
}

export default Bookdetails
