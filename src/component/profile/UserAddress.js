import React from 'react';
import { DeleteForever, SaveAs } from '@mui/icons-material';

const UserAddress = () => {
    return (
        <>
            <div className='useraddress'>
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
                                    <button><SaveAs /></button>
                                    <button className="delete_btn"><DeleteForever /></button>
                                </div>
                            </div>
                            <div className='secondary'>
                                <p>Chandigarh kullu Punjab 12212</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserAddress
