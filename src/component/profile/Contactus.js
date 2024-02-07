import React from 'react';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Contactus = () => {
  return (
    <>
      <div className='contactus'>
        <div className='row'>
          <div className='col-12'>
            <div className="d-flex align-items-center mb-3 heading_back_btn justify-content-between">
              <h5 className="m-0">Contact Us</h5>
            </div>
          </div>
          <div className='col-12'>
            <div className='number d-flex'>
              <PhoneAndroidIcon/> <h6>+91 9816898168</h6>
            </div>
            <div className='email d-flex'>
              <MailOutlineIcon/> <h6>Nanny@gmail.com</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contactus
