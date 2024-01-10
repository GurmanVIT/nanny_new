import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/img/logo-nanny.png";
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const Forgotpassword = () => {

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
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
                                        <form className="w-100 mb-4 form-groupes" appearance="outline">

                                            <input className='inputfor' type="text" />
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <label className='labelup'>Number / Gmail</label>
                                        </form>
                                        <div className="d-flex flex-column align-items-center justify-content-center">
                                            <button color="primary" className="login_button px-4 btn all_btn">
                                                Send OTP
                                            </button>
                                            {/*<p className="mt-3">Don't have an account ? <Link to="/signup" >Sign up</Link></p>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </>
        </>
    )
}

export default Forgotpassword
