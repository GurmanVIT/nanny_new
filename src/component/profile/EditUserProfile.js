import React, { useEffect, useState } from 'react';
import about from '../../assets/img/about.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { UserEditprofile } from '../../store/apiSlice/EditUserProfileSlice';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import { Form } from 'react-bootstrap';
import { uploadFile } from '../../store/apiSlice/uploadFileSlice';

const EditUserProfile = () => {

    const dispatch = useDispatch();
    const UserEditData = useSelector((state) => state.rootReducer.UserEditprofileReducer.data);
    const profileData = useSelector((state) => state.rootReducer.UserProfileReducer.data);
    const uploadFileData = useSelector((state) => state.rootReducer.uploadFileReducer.data);
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [address, setAddress] = useState('');
    const [date, setDate] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [education, setEducation] = useState('');
    const [country, setCountry] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [updateImageIndex, setUpdateImageIndex] = useState(-1)
    const isAuthenticated = useSelector((state) => state.isAuthenticated);


    const updateProfile = () => {
        const payload = {
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: date,
            address: profileData.data.address,
            profileImage: profileImage,
            pinCode: pinCode,
            latitude: profileData.data.latitude,
            longitude: profileData.data.longitude,
            countryCode: profileData.data.countryCode
        }

        console.log(payload)

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
            setCountry(profileData.data.countryCode);
            setMobileNumber(profileData.data.mobileNumber)
            setProfileImage(profileData.data.profileImage);
        }

    }, [profileData])

    const handleOnChange = (value, country) => {
        console.log(country.dialCode)
        console.log(value)
        //setMobileNumber(va);
        setCountry(country.dialCode);
    };

    useEffect(() => {
        console.log("uploadimg ==>", uploadFileData)
        if (uploadFileData != null) {
            setProfileImage(uploadFileData.Location);
        }
    }, [uploadFileData]);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];

        dispatch(uploadFile(file));
    };


    return (
        <>
            <div className="row" >
                <div className="col-12">
                    <div className="d-flex align-items-center mb-3 heading_back_btn">
                        <h4 className="m-0">Edit Profile</h4>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-4 edit_photo">
                            <div className="upload-input">
                                <label htmlFor="upload"><span><img src={profileImage} alt="card" /></span>
                                    <span><input type="file" id="upload" style={{ display: "none" }} onChange={handleFileUpload} /></span>
                                </label>
                                <label className="btn_upload ms-3" htmlFor="upload">Change Porfile Image</label>
                            </div>
                        </div>
                        {/*<div className="col-12 mb-4 edit_photo">
                            <img src={profileData.data.profileImage} alt="logo" />
                            <a href="#" className="ms-3 change_image_btn">Change Porfile Image</a>
                        </div>*/}
                        <div className="col-md-6">
                            <form className="w-100 mb-4 pb-2">
                                <Form.Label>First Name</Form.Label>
                                <div className="input-group mb-0">
                                    <input type="text" placeholder="First Name" value={firstName} onChange={(val) => setFirstName(val.target.value)} />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <form className="w-100 mb-4" >
                                <Form.Label>Last Name</Form.Label>
                                <div className="input-group mb-0">
                                    <input type="text" placeholder="Last Name" value={lastName} onChange={(val) => setLastName(val.target.value)} />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <form className="w-100 mb-4">
                                <Form.Label>Email</Form.Label>
                                <div className="input-group mb-0">
                                    <input type="text" placeholder="Enter Email" value={email} onChange={(val) => setEmail(val.target.value)} />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <form>
                                <div className='main_input'>
                                    <div className="input_field_flex ">
                                        <Form.Label>Phone Number</Form.Label>
                                        <div className='btn_flex'>
                                            <PhoneInput
                                                inputClass={"inputt-ph"}
                                                containerStyle={{}}
                                                searchClass="search-class"
                                                disableSearchIcon={false}
                                                enableTerritories
                                                countryCodeEditable={false}
                                                placeholder='Phone Number'
                                                buttonStyle={{ width: '47px' }}
                                                dropdownStyle={{ height: '150px' }}
                                                enableSearch={true}
                                                value={country}
                                                onChange={handleOnChange}
                                                readOnly
                                            />
                                            <input type='number' className='mobilenumber' value={mobileNumber} onChange={(val) => setMobileNumber(val.target.value)} />
                                        </div>
                                    </div>
                                </div>
                            </form>
                            {/*<form className="w-100 mb-4">
                                <div className="input-group mb-0">
                                    <input type="number" placeholder="Phone Number" value={mobileNumber} onChange={(val) => setMobileNumber(val.target.value)} />
                                </div>
                            </form>*/}
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
