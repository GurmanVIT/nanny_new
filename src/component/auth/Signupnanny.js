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

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [mobileNumber, setmobileNumber] = useState('');
    const [experienceOfYears, setexperienceOfYears] = useState('');
    const [postalCode, setpostalCode] = useState('');
    const [address, setaddress] = useState('');
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
            postalCode: postalCode,
            address: address,
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
                                    <h3>Welcome to Nanny</h3>
                                    <p>Please Signup </p>
                                    <div className='input-group'>
                                        <input type="text" placeholder="FirstName" value={firstName} onChange={(e) => setfirstName(e.target.value)} />
                                    </div>
                                    <div className='input-group'>
                                        <input type="text" placeholder="LastName" value={lastName} onChange={(e) => setlastName(e.target.value)} />
                                    </div>
                                    <div className='input-group'>
                                        <input type="number" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setmobileNumber(e.target.value)} />
                                    </div>
                                    <div className='input-group'>
                                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className='input-group'>
                                        <input type="text" placeholder="Address" value={address} onChange={(e) => setaddress(e.target.value)} />
                                    </div>
                                    <div className='input-group'>
                                        <input type="number" placeholder="PostalCode" value={postalCode} onChange={(e) => setpostalCode(e.target.value)} />
                                    </div>
                                    <div className='input-group'>
                                        <input type="number" placeholder="Experience of years" value={experienceOfYears} onChange={(e) => setexperienceOfYears(e.target.value)} />
                                    </div>

                                    <div className="input-group">
                                        <input
                                            //type={showPassword ? 'text' : 'password'}
                                            type='password'
                                            id="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        //onChange={(e) => setPassword(e.target.value)}
                                        />
                                        {/*<FontAwesomeIcon
                                    icon={showPassword ? faEye : faEyeSlash}
                                    onClick={togglePasswordVisibility}
                                />*/}
                                    </div>
                                    <Button type='button' onClick={() => handleSignup()}>
                                        REGISTER
                                    </Button>

                                    {/*{error && <p style={{ color: 'red' }}>{error}</p>}*/}
                                    <div className='bottom-text'>
                                        <div className="mt-3 bottom_link">Im a new user.
                                            <div className='flex_link'>
                                                <p className='link_color' onClick={() => navigate('/signupnanny')} > {" "}REGISTER AS NANNY</p>
                                                <span className='mx-1'> / </span>
                                                <p className='link_color' onClick={() => navigate('/signupfamily')}>REGISTER AS FAMILY</p>
                                            </div>
                                        </div>
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
