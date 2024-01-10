import React, { useState } from 'react'
import OTPInput from 'react-otp-input'
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo-nanny.png';
import { useDispatch, useSelector } from 'react-redux';
import { verifyOtp } from '../../store/apiSlice/Otpslice';

const Otp = () => {

    //const [otp, setOtp] = useState('');

    const dispatch = useDispatch();
    const otpVerificationError = useSelector((state) => state.otp);
    const data = useSelector((state) => state);
  
    console.log(data)

    const [otp, setotp] = useState('');
    const [id, setid] = useState('');
  
    const handleOtpVerification = async () => {
        const payload ={
            id : id,
            otp: otp,
            emailVerify: 1
        }
        try {
          dispatch(verifyOtp(payload));
        } catch (error) {
            console.error('otp failed:', error);
        }
      };
  

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="container py-5">
                        <a href="#" className="custom-logo d-block login-logo mx-auto">
                            <img className="mw-100" src={logo} alt="logo" />
                        </a>
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3 offset-sm-1 col-sm-10">
                                <div className="login_layout p-5 shadow-sm p-3 mb-5 bg-body rounded">
                                    <div className='otp_text'>
                                        <h6>OTP Verification</h6>
                                    </div>
                                    <form className="w-100 mb-4 input_otp" appearance="outline">
                                        <OTPInput
                                            value={otp}
                                            onChange={(value) => setotp(value)}
                                            numInputs={6}
                                            renderSeparator={<span className='space'></span>}
                                            renderInput={(props) => <input {...props} />}
                                        />
                                    </form>
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                        <button color="primary" className="login_button px-4 btn all_btn" onClick={handleOtpVerification}>
                                            Verify
                                        </button>
                                        {otpVerificationError && <p style={{ color: 'red' }}>{otpVerificationError}</p>}
                                        <p className="mt-3"><Link to="/signup" >Resend</Link> One Time Password</p>
                                        <p><Link to="/forotpassword"> Entered a wrong number ?</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Otp
