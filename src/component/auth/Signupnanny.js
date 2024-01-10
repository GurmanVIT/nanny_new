import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import logo from "../../assets/img/logo-nanny.png";
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { signupUser } from '../../store/apiSlice/Signupnannyslice';
import { Button } from 'react-bootstrap';

const Signupnanny = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.rootReducer.signUp);
    console.log("state", data);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [mobileNumber, setmobileNumber] = useState('');
    const [experienceOfYears] = useState('');
    const isAuthenticated = useSelector((state) => state.isAuthenticated);


    const handleSignup = () => {

        const payload = {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            countryCode: "+91",
            mobileNumber: mobileNumber,
            referralCode: "",
            dateOfBirth: "",
            experienceOfYears: experienceOfYears,
            country: "sds",
            postalCode: "2342432",
            address: "sdf",
            latitude: "23.23232",
            longitude: "45.34343",
            type: 1
        }

        try {
            dispatch(signupUser(payload));
            // Handle success, e.g., navigate to another screen
        } catch (error) {
            // Handle error, e.g., display an error message
            console.error('signup failed:', error);
        }
    };

    const navigate = useNavigate();

    const navigateToAnotherScreen = () => {
        navigate('/otp');
    }


    useEffect(() => {
        if (data.data != null && data.data.status === 1) {
            navigateToAnotherScreen();
        }
    }, [data])


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="container py-5">
                    <a href="#" className="custom-logo d-block login-logo mx-auto">
                        <img className="mw-100" src={logo} alt="logo" />
                    </a>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 offset-sm-1 col-sm-10">
                            <div className="login-container">
                                <form className="login-form" appearance="outline">
                                    <h2>Welcome to Nanny</h2>
                                    <p>Please Signup </p>
                                    <div className='input-group'>
                                        <input type="text" placeholder="Enter firstName" value={firstName} onChange={(e) => setfirstName(e.target.value)} />
                                    </div>
                                    <div className='input-group'>
                                        <input type="text" placeholder="Enter lastName" value={lastName} onChange={(e) => setlastName(e.target.value)} />
                                    </div>
                                    <div className='input-group'>
                                        <input type="number" placeholder="Enter  Mobile Number" value={mobileNumber} onChange={(e) => setmobileNumber(e.target.value)} />
                                    </div>
                                    <div className='input-group'>
                                        <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="input-group">
                                        <input
                                            //type={showPassword ? 'text' : 'password'}
                                            type='password'
                                            id="password"
                                            placeholder="Enter Password"
                                            value={password} onChange={(e) => setPassword(e.target.value)}
                                        //onChange={(e) => setPassword(e.target.value)}
                                        />
                                        {/*<FontAwesomeIcon
                                    icon={showPassword ? faEye : faEyeSlash}
                                    onClick={togglePasswordVisibility}
                                />*/}
                                    </div>
                                    <Button onClick={() => handleSignup()}>
                                        REGISTER
                                    </Button>

                                    {/*{error && <p style={{ color: 'red' }}>{error}</p>}*/}
                                    <div className='bottom-text'>
                                        <p className="mt-3">Im a new user.<Link to="/signupnanny" >REGISTER AS NANNY</Link><span> / </span><Link to="/signupfamily" >REGISTER AS Family</Link></p>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Signupnanny
