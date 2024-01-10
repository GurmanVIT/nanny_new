import { React, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import logo from "../../assets/img/logo-nanny.png";
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { signupUser } from '../../store/apiSlice/Signupnannyslice';
import { Button } from 'react-bootstrap';

const Signupnanny = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state);
    console.log("state", data);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [mobileNumber, setmobileNumber] = useState('');
    const [experienceOfYears, setexperienceOfYears] = useState('');
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

    const navigateToAnotherScreen =() =>{
        navigate('/otp');
    }


    useEffect(()=>{
        console.log("Data ===>",data)
        if(data!=null&&data.status===1){
            navigateToAnotherScreen();
        }
    },[data])


    return (
        <div className="container-fluid">
        <div className="row">
            <div className="container py-5">
                <a href="#" className="custom-logo d-block login-logo mx-auto">
                    <img className="mw-100" src={logo} alt="logo" />
                </a>
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 offset-sm-1 col-sm-10">
                        <div className="login_layout p-5 shadow-sm p-3 mb-5 bg-body rounded">
                             <form className="w-100 mb-4" appearance="outline">
                                <input type="text" placeholder="Enter firstName" value={firstName} onChange={(e) => setfirstName(e.target.value)} />
                            </form>
                             <form className="w-100 mb-4" appearance="outline">
                                <input type="text" placeholder="Enter lastName" value={lastName} onChange={(e) => setlastName(e.target.value)} />
                            </form>
                            <form className="w-100 mb-4" appearance="outline">
                                <input type="number" placeholder="Enter  Mobile Number" value={mobileNumber} onChange={(e) => setmobileNumber(e.target.value)} />
                            </form>
                            <form className="w-100 mb-4" appearance="outline">
                                <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </form>
                            <form className="w-100 mb-3 form_eyes">
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
                            </form>
                            <form className="w-100 mb-4" appearance="outline">
                                <input type="number" placeholder="Experience Of Years" value={experienceOfYears} onChange={(e) => setexperienceOfYears(e.target.value)} />
                            </form>
                            <div className="d-flex justify-content-between mb-3">
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} />
                                </FormGroup>
                                <Link className="d-flex justify-content-end" to='/forotpassword' >Forgot Password</Link>
                            </div>
                            <div className="d-flex flex-column align-items-center justify-content-center">
                                <Button color="primary" className="login_button px-4 btn" onClick={()=>handleSignup()}>
                               REGISTER
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </div >
    )
}

export default Signupnanny
