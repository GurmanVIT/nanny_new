import React, { useEffect, useState } from 'react';
import about from '../../assets/img/about.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { UserEditprofile } from '../../store/apiSlice/EditUserProfileSlice';
import { useNavigate } from 'react-router-dom';

const EditUserProfile = () => {

    const dispatch = useDispatch();
    const UserEditData = useSelector((state) => state.rootReducer.UserEditprofileReducer.data);
    const profileData = useSelector((state) => state.rootReducer.UserProfileReducer.data);
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [address, setAddress] = useState('');
    const [date, setDate] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [education, setEducation] = useState('');
    const [country, setCountry] = useState('');
    const isAuthenticated = useSelector((state) => state.isAuthenticated);


    const updateProfile = () => {
        const payload = {
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: date,
            address: profileData.data.address,
            profileImage: profileData.data.profileImage,
            pinCode: pinCode,
            latitude: profileData.data.latitude,
            longitude: profileData.data.longitude
        }

        try {
            dispatch(UserEditprofile(payload));
            // Handle success, e.g., navigate to another screen
        } catch (error) {
            // Handle error, e.g., display an error message
            console.error('UserEditprofile failed:', error);
        }
    };

    const navigate = useNavigate();

    useEffect(() => {
        console.log(" Data", UserEditData)
        if (UserEditData != null && UserEditData.status === 1) {
            alert(UserEditData.message)
        }
        else if (UserEditData != null) {
            alert(UserEditData.message)
        }
    }, [UserEditData])


    useEffect(() => {
        console.log("UserProfile data ===> ", profileData)
        if (profileData != null && profileData.status === 1) {
            setFirstName(profileData.data.firstName)
            setLastName(profileData.data.lastName)
            setDate(profileData.data.dateOfBirth)
            setEmail(profileData.data.email)
            setEducation(profileData.data.education)
            setPinCode(profileData.data.pinCode)
            setMobileNumber(profileData.data.mobileNumber)
        }

    }, [profileData])


    return (
        <>
            <div className="row" >
                <div className="col-12">
                    <div className="d-flex align-items-center mb-3 heading_back_btn">
                        <h4 className="m-0">Edit Profile</h4>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-4 edit_photo">
                            <img src={profileData.data.profileImage} alt="logo" />
                            <a href="#" className="ms-3 change_image_btn">Change Porfile Image</a>
                        </div>
                        <div className="col-md-6">
                            <form className="w-100 mb-4 pb-2">
                                <div className="input-group mb-0">
                                    <input type="text" placeholder="First Name" value={firstName} onChange={(val) => setFirstName(val.target.value)} />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <form className="w-100 mb-4" >
                                <div className="input-group mb-0">
                                    <input type="text" placeholder="Last Name" value={lastName} onChange={(val) => setLastName(val.target.value)} />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <form className="w-100 mb-4">
                                <div className="input-group mb-0">
                                    <input type="text" placeholder="Enter Email" value={email} onChange={(val) => setEmail(val.target.value)} />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <form className="w-100 mb-4">
                                <div className="input-group mb-0">
                                    <input type="number" placeholder="Phone Number" value={mobileNumber} onChange={(val) => setMobileNumber(val.target.value)} />
                                </div>
                            </form>
                        </div>
                        <div className="col-12">
                            <div className="col-12 mt-3">
                                <button type='button' color="primary" className="profile_button save" onClick={() => updateProfile()}>
                                    SAVE
                                </button>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        </>
    )
}

export default EditUserProfile
