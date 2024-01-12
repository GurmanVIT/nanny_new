import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CustomModal from '../CustomModal/CustomModal';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Card = ({ name, image }) => {

    const [isFirstModalOpen, setFirstModalOpen] = useState(false);

    const openFirstModal = () => {
        setFirstModalOpen(true);
    };

    const closeModals = () => {
        setFirstModalOpen(false);
    };



    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className='nannay_cat_main d-block shadow bg-body rounded overflow-hidden'>
                <Link onClick={openFirstModal}>
                    {isFirstModalOpen && (
                        <CustomModal  isOpen={isFirstModalOpen} onRequestClose={closeModals} />
                    )}
                    <div className="category_image">
                        <img src="https://picsum.photos/200" className="w-100" alt={name} />
                    </div>
                    <div className="px-2 pt-2 categoty_heading w-100 d-flex justify-content-between align-items-center">
                        <h6 className="m-0">{name}</h6>
                        <Link to="#" className='arrow_right'><ArrowRightAltIcon /></Link>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Card
