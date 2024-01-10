import React, { useState } from 'react';
import about from '../../assets/img/about.jpg';
import CustomModal from '../CustomModal/CustomModal';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root');


const Nanylisting = () => {


    const [isFirstModalOpen, setFirstModalOpen] = useState(false);

    const openFirstModal = () => {
        setFirstModalOpen(true);
    };

    const closeModals = () => {
        setFirstModalOpen(false);
    };


    return (
        <>
            <div className="">
                <div className="nanny_list_box ">
                    <div className='nanny_banner'>
                        <div className='heading_categories container'>
                            <h1>
                                <span>Part Time </span>
                            </h1>
                            <h1>
                                <span>And</span>
                            </h1>
                            <h1>
                                <span>Full Time</span>
                            </h1>
                        </div>
                    </div>

                </div>
                <div className='container sections_padding'>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="nanny_list_main px-3 text-center py-4 shadow bg-body">
                                <div className='img_thumanail'>
                                    <img src={about} className="mb-3" alt="image" />
                                </div>

                                <h3>Nanny Name</h3>
                                <ul>
                                    <li className="nany_small_details d-flex justify-content-between py-1">
                                        <h5>Price</h5>
                                        <h5>$20</h5>
                                    </li>
                                    <li className="nany_small_details d-flex justify-content-between py-1">
                                        <h5>Time </h5>
                                        <h5>2 Hours</h5>
                                    </li>
                                </ul>
                                <div>
                                    <Link onClick={openFirstModal} className='btn btn-primary d-inline-block mt-2 all_btns px-4 py-2 position-relative'>Book Nannyl</Link>
                                    {isFirstModalOpen && (
                                        <CustomModal isOpen={isFirstModalOpen} onRequestClose={closeModals} />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="nanny_list_main px-3 text-center py-4 shadow bg-body rounded">
                                <div className='img_thumanail'>
                                    <img src={about} className="mb-3" alt="image" />
                                </div>
                                <h3>Nanny Name</h3>
                                <ul>
                                    <li className="nany_small_details d-flex justify-content-between py-1">
                                        <h5>Price</h5>
                                        <h5>$20</h5>
                                    </li>
                                    <li className="nany_small_details d-flex justify-content-between py-1">
                                        <h5>Time </h5>
                                        <h5>2 Hours</h5>
                                    </li>
                                </ul>
                                <a href="#" className="btn btn-primary d-inline-block mt-2 all_btns px-4 py-2 position-relative">
                                    Book Nanny
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="nanny_list_main px-3 text-center py-4 shadow bg-body rounded">
                                <div className='img_thumanail'>
                                    <img src={about} className="mb-3" alt="image" />
                                </div>
                                <h3>Nanny Name</h3>
                                <ul>
                                    <li className="nany_small_details d-flex justify-content-between py-1">
                                        <h5>Price</h5>
                                        <h5>$20</h5>
                                    </li>
                                    <li className="nany_small_details d-flex justify-content-between py-1">
                                        <h5>Time </h5>
                                        <h5>2 Hours</h5>
                                    </li>
                                </ul>
                                <a href="#" className="btn btn-primary d-inline-block mt-2 all_btns px-4 py-2 position-relative">
                                    Book Nanny
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="nanny_list_main px-3 text-center py-4 shadow bg-body rounded">
                                <div className='img_thumanail'>
                                    <img src={about} className="mb-3" alt="image" />
                                </div>
                                <h3>Nanny Name</h3>
                                <ul>
                                    <li className="nany_small_details d-flex justify-content-between py-1">
                                        <h5>Price</h5>
                                        <h5>$20</h5>
                                    </li>
                                    <li className="nany_small_details d-flex justify-content-between py-1">
                                        <h5>Time </h5>
                                        <h5>2 Hours</h5>
                                    </li>
                                </ul>
                                <a href="#" className="btn btn-primary d-inline-block mt-2 all_btns px-4 py-2 position-relative">
                                    Book Nanny
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="nanny_list_main px-3 text-center py-4 shadow bg-body rounded">
                                <div className='img_thumanail'>
                                    <img src={about} className="mb-3" alt="image" />
                                </div>
                                <h3>Nanny Name</h3>
                                <ul>
                                    <li className="nany_small_details d-flex justify-content-between py-1">
                                        <h5>Price</h5>
                                        <h5>$20</h5>
                                    </li>
                                    <li className="nany_small_details d-flex justify-content-between py-1">
                                        <h5>Time </h5>
                                        <h5>2 Hours</h5>
                                    </li>
                                </ul>
                                <a href="#" className="btn btn-primary d-inline-block mt-2 all_btns px-4 py-2 position-relative">
                                    Book Nanny
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Nanylisting
