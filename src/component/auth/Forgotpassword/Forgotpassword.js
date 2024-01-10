import { React, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../../assets/img/logo-nanny.png";
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchForgotpasdAsync } from '../../../store/apiSlice/ForgotpasswordSlice';


const Forgotpassword = () => {


    const dispatch = useDispatch();
    const user = useSelector((state) => state.rootReducer.Forgotpasd.data);
    console.log("state", user);

    const [email, setEmail] = useState('');
    const isAuthenticated = useSelector((state) => state.isAuthenticated);


    const handleotp = () => {
        const payload = {
            email: email,
        }

        try {
            dispatch(fetchForgotpasdAsync(payload));
            // Handle success, e.g., navigate to another screen
        } catch (error) {
            // Handle error, e.g., display an error message
            console.error('Otp failed:', error);
        }
    };
    const navigate = useNavigate();

    const navigateToAnotherScreen = () => {
        navigate('/otp');
    }


    useEffect(() => {
        console.log("Data ===>", user)
        if (user != null && user.status === 1) {
            navigateToAnotherScreen();
        }
    }, [user])



    //const [password, setPassword] = useState('');
    //const [showPassword, setShowPassword] = useState(false);

    //const togglePasswordVisibility = () => {
    //    setShowPassword(!showPassword);
    //};

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
                                    <div className="login-container">
                                        <form className="login-form m-2" appearance="outline">
                                            <h3 className='mb-3'>Forgot password</h3>
                                            <div className='input-group'>
                                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                                            </div>
                                            {/*<p> <Link className="d-flex justify-content-end" to='/forotpassword' >Forgot Password</Link></p>*/}
                                            <Button  onClick={() => handleotp()}>
                                                Send OTP
                                            </Button>
                                        </form>
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
