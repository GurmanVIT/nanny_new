import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { NannyEditprofile } from '../../store/apiSlice/NeditProfileSlice';


const NeditProfile = () => {

    const dispatch = useDispatch();
    const NannyEditData = useSelector((state) => state.rootReducer.NannyEditprofileReducer.data);
    const profileData = useSelector((state) => state.rootReducer.nannyProfileReducer.data);
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
            dispatch(NannyEditprofile(payload));
            // Handle success, e.g., navigate to another screen
        } catch (error) {
            // Handle error, e.g., display an error message
            console.error('NannyEditprofile failed:', error);
        }
    };

    const navigate = useNavigate();

    useEffect(() => {
        console.log(" Data", NannyEditData)
        if (NannyEditData != null && NannyEditData.status === 1) {
            alert(NannyEditData.message)
        }
        else if (NannyEditData != null) {
            alert(NannyEditData.message)
        }
    }, [NannyEditData])


    useEffect(() => {
        console.log("Profile data ===> ", profileData)
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
                    {profileData != null && <div className="row">
                        <div className="col-12 mb-4 edit_photo">
                            <div className="upload-input">
                                <label htmlFor="upload"><span><img src={profileData.data.profileImage} alt="card" /></span>
                                    <span><input type="file" id="upload" style={{ display: "none" }} /></span>
                                </label>
                                <label className="btn_upload ms-3" htmlFor="upload">Change Porfile Image</label>
                            </div>
                            {/*<div className="upload-input">
                                <label htmlFor="upload"><span><img src={profileData.data.profileImage} alt="card" /></span>
                                    <span><input type="file" id="upload" style={{ display: "none" }} /></span>
                                </label>
                                <label className="btn_upload ms-3" htmlFor="upload">Change Porfile Image</label>
                            </div>*/}
                        </div>
                        <div className="col-md-6">
                            <form className="w-100 mb-4 pb-2" appearance="outline">
                                <div className="input-group mb-0">
                                    <input type="text" placeholder="First Name" value={firstName} onChange={(val) => setFirstName(val.target.value)} />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <form className="w-100 mb-4" appearance="outline">
                                <div className="input-group mb-0">
                                    <input type="text" placeholder="Last Name" value={lastName} onChange={(val) => setLastName(val.target.value)} />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <form className="w-100 mb-4" appearance="outline">
                                <div className="input-group mb-0">
                                    <input type="number" placeholder="Phone Number" value={mobileNumber} onChange={(val) => setMobileNumber(val.target.value)} />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <form className="w-100 mb-4" appearance="outline">
                                <div className="input-group mb-0">
                                    <input type="text" placeholder="Enter Email" value={email} onChange={(val) => setEmail(val.target.value)} />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <form className="w-100 mb-4" appearance="outline">
                                <div className="input-group mb-0">
                                    <input type="text" placeholder="Postal Code" value={pinCode} onChange={(val) => setPinCode(val.target.value)} />
                                </div>
                            </form>
                        </div>

                        <div className="col-md-6">
                            <form className="w-100 mb-4" appearance="outline">
                                <div className="input-group mb-0">
                                    <input type='date' value={date} onChange={(val) => setDate(val.target.value)} />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <form className="w-100 mb-4" appearance="outline">
                                <div className="input-group mb-0">
                                    <input type="text" placeholder="Education" value={education} onChange={(val) => setEducation(val.target.value)} />
                                </div>
                            </form>
                        </div>


                        <div className="col-12">
                            <div className="col-12 mt-3">
                                <Button type='button' color="primary" className="profile_button save save-btn " onClick={() => updateProfile()}>
                                    SAVE
                                </Button>
                            </div>
                        </div>
                    </div >
                    }
                </div >
            </div >
        </>
    )
}

export default NeditProfile
