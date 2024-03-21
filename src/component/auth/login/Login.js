import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/img/logo-nanny.png";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../store/apiSlice/LoginSlice";
import { Button } from "react-bootstrap";
import { clearOtpData } from "../../../store/apiSlice/Otpslice";
import { clearSignupData } from "../../../store/apiSlice/Signupnannyslice";


const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.rootReducer.login.data);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  const handleLogin = () => {
    const payload = {
      email: email,
      password: password,
    };
    try {
      dispatch(loginUser(payload));
      // Handle success, e.g., navigate to another screen
    } catch (error) {
      // Handle error, e.g., display an error message
      console.error("login failed:", error);
    }
  };

  const navigate = useNavigate();

  const navigateToAnotherScreen = () => {
    if (user.data.type == 1) {
      navigate("/profilenanny");
    } else {
      navigate("/");
    }
  };

  //useEffect(()=>{
  //    dispatch(clearData())
  //    localStorage.clear()
  //},[])

  useEffect(() => {
    console.log("Login Data", user);
    if (user != null && user.status === 1) {
      if (localStorage.getItem("Token").length != null)
        navigateToAnotherScreen();
    } else if (user != null) {
      alert(user.message);
    }
  }, [user]);

  useEffect(() => {
    dispatch(clearOtpData);
    dispatch(clearSignupData);
  }, [])

  //  showpassword

  //const [password, setPassword] = useState('');
  //const [showPassword, setShowPassword] = useState(false);

  //const togglePasswordVisibility = () => {
  //    setShowPassword(!showPassword);
  //};

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
                  <h3>Welcome</h3>
                  <p>Please login to your account</p>
                  <div className="input-group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Username"
                    />
                  </div>
                  <div className="input-group mb-0">
                    <input
                      //type={showPassword ? 'text' : 'password'}
                      type="password"
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
                  <p>
                    {" "}
                    <Link
                      className="d-flex justify-content-end mt-2"
                      to="/forotpassword"
                    >
                      Forgot Password?
                    </Link>
                  </p>
                  <Button type="button" onClick={() => handleLogin()}>
                    {/*{loading ? 'Logging in...' : 'Login'}*/}
                    Login
                  </Button>

                  {/*{error && <p style={{ color: 'red' }}>{error}</p>}*/}
                  <div className="bottom-text">
                    <div className="mt-3 bottom_link">
                      Im a new user.
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
      </div>
    </div>
  );
};

export default Login;
