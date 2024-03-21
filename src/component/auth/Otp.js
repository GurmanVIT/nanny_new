import React, { useEffect, useState } from 'react'
import OTPInput from 'react-otp-input'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo-nanny.png';
import { useDispatch, useSelector } from 'react-redux';
import { clearOtpData, verifyOtp } from '../../store/apiSlice/Otpslice';
import { clearSignupData } from '../../store/apiSlice/Signupnannyslice';
import { clearFamilyData } from '../../store/apiSlice/SignupfamilySilce';

const Otp = () => {

    const [otp, setOtp] = useState('');

    const dispatch = useDispatch();
    const data = useSelector((state) => state.rootReducer.otp);
    const signUpData = useSelector((state) => state.rootReducer.signUp.data);

    //const [otp, setotp] = useState('');


    const handleOtpVerification = async () => {
        const emailVerify = signUpData.data.otp == otp ? 1 : signUpData.data.otpPhone == otp ? 2 : 3
        if (emailVerify != 3) {
            const payload = {
                _id: signUpData.data._id,
                otp: otp,
                emailVerify: emailVerify,
            }

            try {
                dispatch(verifyOtp(payload));
            } catch (error) {
                console.error('otp failed:', error);
            }
        }
        else {
            console.log("Invalid OTP");
        }
    };


    const navigate = useNavigate();

    const navigateToAnotherScreen = () => {
        dispatch(clearOtpData);
        dispatch(clearSignupData);
        navigate('/login');
    }

    useEffect(() => {
        console.log("data login ===>", data)
        if (data.otpData != null && data.otpData.status === 1) {
            navigateToAnotherScreen();
        }
    }, [data])

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
                                            onChange={(value) => setOtp(value)}
                                            numInputs={6}
                                            renderSeparator={<span className='space'></span>}
                                            renderInput={(props) => <input {...props} />}
                                        />
                                        {/*<OTPInput
                                            
                                           
                                            numInputs={6}
                                            renderSeparator={<span className='space'></span>}
                                            renderInput={(props) => <input {...props} />}
                                        />*/}
                                    </form>
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                        <button type='button' color="primary" className="login_button px-4 btn all_btn" onClick={() => handleOtpVerification()} >
                                            Verify
                                        </button>
                                        {/*{otpVerificationError && <p style={{ color: 'red' }}>Found Error</p>}*/}
                                        <p className="mt-3"><Link to="/signup" >Resend</Link> One Time Password</p>
                                        <p onClick={() => navigate('/forotpassword')}>Entered a wrong number ?</p>
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