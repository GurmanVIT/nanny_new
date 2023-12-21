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
            <div class="container sections_padding">
                <div class="nanny_list_box py-5 px-3 mb-5 position-relative">
                    <h1 class="text-center my-5 pb-3">
                        <span class="position-relative">Part Time Full Time</span>
                    </h1>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="nanny_list_main px-3 text-center py-4 shadow bg-body rounded">
                            <img src={about} class="mb-3" alt="image" />
                            <h3>Nanny Name</h3>
                            <ul>
                                <li class="nany_small_details d-flex justify-content-between py-3">
                                    <h5>Price</h5>
                                    <h5>$20</h5>
                                </li>
                                <li class="nany_small_details d-flex justify-content-between py-3">
                                    <h5>Time </h5>
                                    <h5>2 Hours</h5>
                                </li>
                            </ul>
                            <div>
                                <Link onClick={openFirstModal} className='btn btn-primary d-inline-block mt-4 all_btns px-4 py-2 position-relative'>Book Nannyl</Link>
                                {isFirstModalOpen && (
        <CustomModal isOpen={isFirstModalOpen} onRequestClose={closeModals} />
      )}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="nanny_list_main px-3 text-center py-4 shadow bg-body rounded">
                            <img src={about} class="mb-3" alt="image" />
                            <h3>Nanny Name</h3>
                            <ul>
                                <li class="nany_small_details d-flex justify-content-between py-3">
                                    <h5>Price</h5>
                                    <h5>$20</h5>
                                </li>
                                <li class="nany_small_details d-flex justify-content-between py-3">
                                    <h5>Time </h5>
                                    <h5>2 Hours</h5>
                                </li>
                            </ul>
                            <a href="#" class="btn btn-primary d-inline-block mt-4 all_btns px-4 py-2 position-relative">
                                Book Nanny
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="nanny_list_main px-3 text-center py-4 shadow bg-body rounded">
                            <img src={about} class="mb-3" alt="image" />
                            <h3>Nanny Name</h3>
                            <ul>
                                <li class="nany_small_details d-flex justify-content-between py-3">
                                    <h5>Price</h5>
                                    <h5>$20</h5>
                                </li>
                                <li class="nany_small_details d-flex justify-content-between py-3">
                                    <h5>Time </h5>
                                    <h5>2 Hours</h5>
                                </li>
                            </ul>
                            <a href="#" class="btn btn-primary d-inline-block mt-4 all_btns px-4 py-2 position-relative">
                                Book Nanny
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="nanny_list_main px-3 text-center py-4 shadow bg-body rounded">
                            <img src={about} class="mb-3" alt="image" />
                            <h3>Nanny Name</h3>
                            <ul>
                                <li class="nany_small_details d-flex justify-content-between py-3">
                                    <h5>Price</h5>
                                    <h5>$20</h5>
                                </li>
                                <li class="nany_small_details d-flex justify-content-between py-3">
                                    <h5>Time </h5>
                                    <h5>2 Hours</h5>
                                </li>
                            </ul>
                            <a href="#" class="btn btn-primary d-inline-block mt-4 all_btns px-4 py-2 position-relative">
                                Book Nanny
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="nanny_list_main px-3 text-center py-4 shadow bg-body rounded">
                            <img src={about} class="mb-3" alt="image" />
                            <h3>Nanny Name</h3>
                            <ul>
                                <li class="nany_small_details d-flex justify-content-between py-3">
                                    <h5>Price</h5>
                                    <h5>$20</h5>
                                </li>
                                <li class="nany_small_details d-flex justify-content-between py-3">
                                    <h5>Time </h5>
                                    <h5>2 Hours</h5>
                                </li>
                            </ul>
                            <a href="#" class="btn btn-primary d-inline-block mt-4 all_btns px-4 py-2 position-relative">
                                Book Nanny
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Nanylisting
