import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import CustomModal from '../CustomModal/CustomModal';
import { Link } from 'react-router-dom';
import about from '../../assets/img/about.jpg';
import { useDispatch } from 'react-redux';
import { clearBookingData} from '../../store/apiSlice/BooknannySlice';

Modal.setAppElement('#root');


const Nannycard = ({ profileImage,time,firstName,lastName,price}) => {


    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="nanny_list_main px-3 text-center py-4 shadow bg-body">
                <div className='img_thumanail'>
                    <img src={profileImage} className="mb-3" alt="image" />
                </div>

                <h3> <span>{firstName}</span><span>{lastName}</span></h3>
                <ul>
                    <li className="nany_small_details d-flex justify-content-between py-1">
                        <h5>Price</h5>
                        <h5>{price}</h5>
                    </li>
                    <li className="nany_small_details d-flex justify-content-between py-1">
                        <h5>Time </h5>
                        <h5>{time}</h5>
                    </li>
                    {/*<li className="nany_small_details d-flex justify-content-between py-1">
                        <h5>Address</h5>
                        <h5>{address}</h5>
                    </li>*/}
                </ul>
                <div>
                    <Link className='btn btn-primary d-inline-block mt-2 all_btns px-4 py-2 position-relative'>Book Nannyl</Link>
                   
                </div>
            </div>
        </div>
    )
}

export default Nannycard
