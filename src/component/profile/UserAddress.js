import React, { useState } from 'react';
import { DeleteForever, SaveAs } from '@mui/icons-material';
import { Button, Modal } from 'react-bootstrap';


const UserAddress = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='useraddres'>
                <div className='row'>
                    <div className='col-12'>
                        <div className="d-flex align-items-center mb-2">
                            <h4 className="m-0">My Address</h4>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='card card_profile card_box'>
                            <div className="d-flex align-items-center mb-3 heading_back_btn justify-content-between">
                                <h5 className="m-0 mb-2">Chandigarh</h5>
                                <div className='d-flex'>
                                    <button onClick={handleShow} className='savebtn'><SaveAs /></button>
                                    <button className="delete_btn"><DeleteForever /></button>
                                </div>
                            </div>
                            <div className='secondary'>
                                <p>Chandigarh kullu Punjab 12212</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='add_new-address'>
                    <button type='button' className='btn profile_button'>Add new address</button>
                </div>
                <Modal show={show} onHide={handleClose} className='modal_address'>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Address</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className='address_form'>
                                <label>Address</label>
                                <input type='text' placeholder='Chandigarh' defaultValue='Chandigarh' />
                            </div>
                            <div className='address_form'>
                                <label>City</label>
                                <input type='text' placeholder='kullu' defaultValue='kullu' />
                            </div>
                            <div className='address_form'>
                                <label>State</label>
                                <input type='text' placeholder='Punjab' defaultValue='Punjab' />
                            </div>
                            <div className='address_form'>
                                <label>Postal/Zip Code</label>
                                <input type='text' placeholder='12212' defaultValue='12212' />
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type='button' className='btn address_btn' onClick={handleClose}>
                            Update Address
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </>
    )
}

export default UserAddress
