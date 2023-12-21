import React from 'react'
import Modal from 'react-modal';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Link } from 'react-router-dom';



const Addhours = ({ isOpen, onRequestClose }) => {
    return (
        <Modal className="add_hours"
        isOpen={isOpen} onRequestClose={onRequestClose}
        >
            <div className='add_details'>
                <div className='heading d-flex justify-content-center'>
                    <h4>ADD HOURS</h4>
                </div>
                <form className="w-100 mb-2 form_eyes">
                    <label>Number of Hours</label>
                    <input type='text' placeholder='Add Hours' defaultValue="2 hours" />
                </form>
                <div className='btn_modal'>
                    <Link to="#" onClick={onRequestClose}>CONTINUE</Link>
                </div>
            </div>
        </Modal>
    )
}

export default Addhours
